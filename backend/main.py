from threading import Thread, Timer
import time
from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

from atc_classes import Plane, Flight

def move_plane(new_plane: Plane):
    print(f'moving plane with id {new_plane.id}')

# Function that moves planes at set intervals
def updater():
    while True:
        time.sleep(5)
        print('updater interval triggered')

        # Move planes from queues into their next queue
        dq_doc_ref = db.collection("AirplaneQueues").document("distant")
        oq_doc_ref = db.collection("AirplaneQueues").document("overhead")
        dq_doc = dq_doc_ref.get()
        oq_doc = oq_doc_ref.get()

        dq_moved_plane, oq_moved_plane = None, None

        # Pop first airplane from each queue 
        distantqueue_list = dq_doc.to_dict()['airplane_ids']
        if distantqueue_list:
            dq_moved_plane = distantqueue_list.pop(0)

        overheadqueue_list = oq_doc.to_dict()['airplane_ids']
        if overheadqueue_list:
            oq_moved_plane = overheadqueue_list.pop(0)

        # Then add them to the next queue AFTER all have been popped
        if dq_moved_plane is not None:
            overheadqueue_list.append(dq_moved_plane)

        # Finally, update the Firestore Database with the correct states
        dq_doc_ref.set({'airplane_ids': distantqueue_list})
        oq_doc_ref.set({'airplane_ids': overheadqueue_list})


    
updater_thread = Thread(target=updater)
updater_thread.daemon = True # Make thread exit when parent (main thread) exists, mainly usefull for dev environment with hot reload
updater_thread.start()

# Initialize FastAPI app
app = FastAPI()

# CORS policy: allow all
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize app and db using creds (generated private key on firebase console)
cred = credentials.Certificate('air-traffic-control-743e7-firebase-adminsdk-5i41z-92631cacbe.json')
firebase_app = firebase_admin.initialize_app(cred)
db = firestore.client()


# The api paths
@app.get("/")
async def root():
    return {"message": "FastAPI server for COE892 Project: Air Traffic Control"}

@app.get("/airplane/{airplane_id}")
async def ack_airplane(airplane_id):
    return {"message": f"Airplane with ID={airplane_id}, you are acknowledged and loved"}

@app.post("/airplane")
async def create_airplane(airplane_id: int):
    new_plane = Plane(id=airplane_id, status='distant')

    # Add the new airplane to Airplanes collection of Firestore Database
    doc_ref = db.collection("Airplanes").document("airplane1")
    doc_ref.set(new_plane.__dict__)
    print(f'Added new plane: {new_plane}')

    # Add the new airplane to distant queue (document in Firestore Database)
    dq_doc_ref = db.collection("AirplaneQueues").document("distant")
    dq_doc = dq_doc_ref.get()
    if dq_doc.exists:
        distantqueue_list = dq_doc.to_dict()['airplane_ids']
        distantqueue_list.append(new_plane.id)

        dq_doc_ref.set({'airplane_ids': distantqueue_list})
    else:
        print("ERROR: could not find distant queue document from Firebase")

    return {"message": "Successfully created new plane"}

@app.get("/gated")
async def getGatedPlane():
     gq_doc_ref = db.collection("AirplaneQueues").document("gate1")
     gq_doc = gq_doc_ref.get()
     gatequeue_list = gq_doc.to_dict()['airplane_ids']
     return gatequeue_list

@app.get("/runway")
async def getGatedPlane():
     rq_doc_ref = db.collection("AirplaneQueues").document("runway1")
     rq_doc = rq_doc_ref.get()
     runwayqueue_list = rq_doc.to_dict()['airplane_ids']
     return runwayqueue_list

# WS connection 
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        res = {'msg': 'hi'}
        data = await websocket.receive_text()
        print(f'Data received from client: {data}')

        print(f"INFO: sending res={res} to client")
        await websocket.send_json(res)
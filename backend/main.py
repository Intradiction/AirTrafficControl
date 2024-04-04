from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


from atc_classes import Plane, Flight

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
    return {"message": "Hello World"}

@app.get("/airplane/{airplane_id}")
async def ack_airplane(airplane_id):
    return {"message": f"Airplane with ID={airplane_id}, you are acknowledged and loved"}

@app.post("/airplane")
async def create_airplane(airplane_id: int):
    new_plane = Plane(id=airplane_id, status='distant')

    doc_ref = db.collection("Airplanes").document('airplane1')
    doc_ref.set(new_plane.__dict__)
    print(f'Added new plane: {new_plane}')


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
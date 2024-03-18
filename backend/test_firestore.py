import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


# Initialize app and db using creds (generated private key on firebase console)
cred = credentials.Certificate('backend/air-traffic-control-743e7-firebase-adminsdk-5i41z-92631cacbe.json')
app = firebase_admin.initialize_app(cred)
db = firestore.client()

# db operations
db.collection("AirTrafficControl").document("Airplanes").set({
    "airplane1": {
        "id": 1,
        "model": "Boeing 737",
        "runwayReq": 1800,
        "location": "overhead_airspace", # location can be ["gate1", "gate2", "runway1", "runway2", "overhead_airspace", "distant"]
        "direction": "toAirport"
    },
    "airplane2": {
        "id": 2,
        "model": "Airbus A320",
        "runwayReq": 1700,
        "location": "gate2",
        "direction": "leaveAirport"
    },
}, merge=True)
print("added airplanes to db")
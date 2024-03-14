import firebase_admin
from firebase_admin import credentials, db

# Initialize instance of Firebase App using private key credentials
cred = credentials.Certificate('backend/air-traffic-control-743e7-firebase-adminsdk-5i41z-92631cacbe.json')
firebase_app = firebase_admin.initialize_app(cred, {
	'databaseURL': 'https://air-traffic-control-743e7-default-rtdb.firebaseio.com/'
})

# Access database
ref = db.reference("/")

ref.set({
    "airplane1": {
        "id": 1,
        "model": "Boeing 737"
    },
    "airplane2": {
        "id": 2,
        "model": "Airbus A320"
    },
})



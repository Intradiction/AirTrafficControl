import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


# Initialize app and db using creds (generated private key on firebase console)
cred = credentials.Certificate('backend/air-traffic-control-743e7-firebase-adminsdk-5i41z-92631cacbe.json')
app = firebase_admin.initialize_app(cred)
db = firestore.client()

aq = db.collection('AirplaneQueues').get()
print(aq)
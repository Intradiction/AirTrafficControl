# Air Trafic Control 
This project contains Frontend and Backend for an Air Traffic Control system. The frontend was built with React, the backend with FastAPI in Python. Database TBD.

## Run Locally
To run this project on your local machine (assuming you have a Firestore database set up),
1. Run the FastAPI server:
    - Make sure you are in the [backend](backend/) folder
    - run `pip install -r requirements.txt`
    - run `uvicorn main:app --reload` to start the server

2. Run the React web app:
    - Make sure you are in the [frontend](frontend/) folder
    - run `npm install`
    - run `npm run dev` to start the frontend

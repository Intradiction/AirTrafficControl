from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


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

# The api paths
@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/airplane/{airplane_id}")
async def ack_airplane(airplane_id):
    return {"message": f"Airplane with ID={airplane_id}, you are acknowledged and loved"}
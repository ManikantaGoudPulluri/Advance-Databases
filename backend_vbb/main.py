from fastapi import FastAPI, Query
from typing import Optional
from services.journey_service import fetch_journey
from services.refresh_service import refresh_journey
from utils.resolve import get_station_id
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
import os
from dotenv import load_dotenv

app = FastAPI()
load_dotenv()
MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client["Vbb_transport"]
station_collection = db["station_logs"]

# CORS setup for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "VBB Transport API is running!"}


@app.get("/journey")
def journey(
    from_station: str,
    to_station: str,
    products: Optional[list[str]] = Query(default=None, alias="products[]"),
    departure: Optional[str] = None,       # ✅ corrected key name
    user_id: Optional[str] = None
):
    # Resolve names to IDs
    from_id = get_station_id(from_station) if not from_station.isdigit() else from_station
    to_id = get_station_id(to_station) if not to_station.isdigit() else to_station

    # ✅ Call journey service with all values
    return fetch_journey(from_id, to_id, products, departure=departure, user_id=user_id)


@app.get("/journey/refresh")
def refresh(token: str):
    return refresh_journey(token)

@app.get("/stations")
def get_stations():
    stations = list(station_collection.find({}, {"_id": 0, "station_id": 1, "name": 1}))
    return {"stations": stations}

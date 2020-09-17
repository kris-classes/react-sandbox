"""
ISCG7420 Week 9
FastAPI: https://fastapi.tiangolo.com/

Run with:
    uvicorn main:app --reload
"""

from typing import Optional
from datetime import datetime

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    'http://localhost:3000',
]

# CORS: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/time")
def current_time():
    return {"datetime": f'FastAPI Time : {datetime.now()}'}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routes.estruct import router as factorial_router

app = FastAPI()

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

app.include_router(factorial_router)

@app.get("/")
async def test():
    return("Hello World")
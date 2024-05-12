from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel

from ..services.factorial_service import factorial_service

router = APIRouter()

class FactorialResponse(BaseModel):
    factorial: list
    
class FactorialNot(BaseModel):
    response: str

@router.get("/factorial/{number}", response_model=FactorialResponse, status_code=status.HTTP_200_OK)
async def factorial(number: int) -> FactorialResponse:
    if number < 1:
        raise HTTPException(status_code=404, detail='Number Invalid')
    
    result = factorial_service(number)
    return FactorialResponse(factorial=result)
    
@router.get("/factorial/", response_model=FactorialNot, status_code=status.HTTP_200_OK)
async def factorial_not() -> FactorialNot:
    return FactorialNot(response="Enter a number after the '/'")
import os
from datetime import datetime, timedelta
from typing import Union,Any
import jwt
from fastapi import HTTPException
from fastapi.security import HTTPBearer
from pydantic import ValidationError
from fastapi import Depends, HTTPException
from dotenv import load_dotenv

load_dotenv()

reusable_oauth2 = HTTPBearer(scheme_name='Authorization')

class Authentication:
    def __init__(self):
        self.SECRET_KEY=os.getenv("JWT_SECRET")
        self.SECURITY_ALGORITHM="HS256"

    #create JWT    
    def generate_token(self,username: Union[str, Any]) -> str:
        expire = datetime.utcnow() + timedelta(
            seconds=60 * 60 * 24 * 3  # Expired after 3 days
        )
        to_encode = {
            "exp": expire, "username": username
        }
        encoded_jwt = jwt.encode(to_encode,self.SECRET_KEY, algorithm=self.SECURITY_ALGORITHM)
        return encoded_jwt
    
    #validate_token JWT
    def validate_token(self,http_authorization_credentials=Depends(reusable_oauth2)) -> str:
        try:
            payload = jwt.decode(http_authorization_credentials.credentials, self.SECRET_KEY, algorithms=[self.SECURITY_ALGORITHM])
            if datetime.fromtimestamp(payload['exp']) < datetime.now():
                raise HTTPException(status_code=403, detail="Token expired")
            return payload.get('username')
        except(jwt.PyJWTError, ValidationError):
            raise HTTPException(
                status_code=403,
                detail=f"Could not validate credentials",
            )
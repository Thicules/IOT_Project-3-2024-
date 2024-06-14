from App import app
from fastapi import HTTPException
from App.models import User
from App.models import Authentication

@app.post("/api/singin")
def singin(user: User):
    if user.verify()==True:
        token = Authentication().generate_token(user.username)
        return {"status":True,"message":"Singin successfully","token":token}
    else:
        raise HTTPException(status_code=403,detail="Invalid username or password")
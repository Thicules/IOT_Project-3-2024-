from App import app
from fastapi import HTTPException,Depends
from App.models import Sensor,Authentication
from fastapi import Body

@app.post("/api/add_sensor")
def add_sensor(sensor: Sensor,username=Depends(Authentication().validate_token)):
    sensor.admin_user.append(username)
    result=sensor.add_sensor()
    if result!=None:
        return {"status":True,"message":"Add sensor successfully","id_sensor":str(result)}
    else:
        raise HTTPException(status_code=400,detail="Add sensor fail")
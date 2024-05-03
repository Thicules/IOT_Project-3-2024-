from App import app
from fastapi import HTTPException,Depends
from App.models import Sensor,Authentication

@app.post("/api/post_avg_value")
def post_avg(sensor: Sensor,username=Depends(Authentication().validate_token)):
    if sensor.verify()==False:
        raise HTTPException(status_code=403,detail="Invalid sensor")
    if username in sensor.get_admin_user():
        result=sensor.update_data()
        if result!=None:
            return {"status":True,"message":"Update successfully"}
        else:
            raise HTTPException(status_code=400,detail="Update data fail")
    else:
        raise HTTPException(status_code=403,detail="Not permission to update data")
    
@app.get("/api/get_avg_value")
def get_avg_value(id_sensor:str,period:int,username=Depends(Authentication().validate_token)):
    sensor = Sensor(id=id_sensor)
    if sensor.verify()==False:
        raise HTTPException(status_code=403,detail="Invalid sensor")
    if username in sensor.get_admin_user():
        result=sensor.get_data(period=period)
        return {"status":True,"data":result,'message':"Get data successfully"}
    else:
        raise HTTPException(status_code=403,detail="Not permission to get data")


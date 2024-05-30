from App import app
from fastapi import HTTPException
from App.models import User
from App.models import Authentication
from fastapi import Depends
from App.models import Sensor,ProcessData
from App.core import Forecast_model

@app.get("/api/forecast")
def forecast(id_sensor:str,username=Depends(Authentication().validate_token)):
    sensor = Sensor(id=id_sensor)
    if sensor.verify()==False:
        raise HTTPException(status_code=403,detail="Invalid sensor")
    if username not in sensor.get_admin_user():
        raise HTTPException(status_code=403,detail="Not permission to forecast")
    # Get data from sensor
    data = sensor.get_previous_data(24)
    # process data
    process_data = ProcessData.process_to_train(data)
    prediction = Forecast_model(process_data).get_forecast()
    print(prediction)
    return {"status":True,"message":"Forecast successfully","prediction":prediction}
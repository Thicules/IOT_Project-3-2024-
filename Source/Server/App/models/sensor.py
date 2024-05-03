from pydantic import BaseModel, Field
from datetime import datetime,timedelta
from typing import  Dict, Any
from App.db import My_MongoDB as MongoDB
from bson.objectid import ObjectId
from bson import json_util

class Sensor(BaseModel):
    id: str= None
    location: str=None
    status: str=None
    data: Dict[Any, Any] = {}
    admin_user: list=["admin"]

    def verify(self):
        try:
            db = MongoDB()
            query = {"_id":ObjectId(self.id)}
            result = db.find_one("Sensors",query)
            db.disconnect()
            if result is None:
                return False
            return True
        except:
            db.disconnect()
            return False

    def update_data(self):
        db = MongoDB()
        current_time = datetime.now()
        current_time = datetime.fromisoformat(current_time.isoformat())
        insert_data ={"id_sensor":ObjectId(self.id),"data":self.data,"timestamp":current_time}
        result= db.insert("Datas_sensor",insert_data)
        db.disconnect()
        return result.inserted_id
    
    def get_admin_user(self):
        db = MongoDB()
        query = {"_id":ObjectId(self.id)}
        result = db.find_one("Sensors",query)
        db.disconnect()
        return result['admin_user']
    
    def get_data(self,period:int):
        current_time = datetime.now()
        start_time = (current_time.replace()-timedelta(days=period-1)).replace(hour=0,minute=0,second=0,microsecond=0)
        query = {"id_sensor":ObjectId(self.id),"timestamp":{"$gte":datetime.fromisoformat(start_time.isoformat()),"$lte":datetime.fromisoformat(current_time.isoformat())}}
        db = MongoDB()
        result = db.find("Datas_sensor",query,{"_id":0,"id_sensor":0})
        merged_json = json_util.dumps(result)
        db.disconnect()
        return merged_json
    
    def add_sensor(self):
        db = MongoDB()
        insert_data = {"location":self.location,"status":self.status,"admin_user":list(set(self.admin_user))}
        result = db.insert("Sensors",insert_data)
        db.disconnect()
        return result.inserted_id

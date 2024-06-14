from pydantic import BaseModel
from App.db import My_MongoDB as MongoDB

class User(BaseModel):
    username: str
    password: str=None

    def verify(self):
        db = MongoDB()
        query = {"username":self.username}
        result = db.find_one("Users",query)
        db.disconnect()
        if result['password']==self.password:
            return True
        return False
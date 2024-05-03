import pymongo
import os
from dotenv import load_dotenv

load_dotenv()
# Thiết lập thông tin kết nối

class My_MongoDB:
    def __init__(self):
        host = os.environ.get("DB_HOST")  # Địa chỉ máy chủ MongoDB
        port = os.getenv("DB_PORT")  # Cổng MongoDB
        username = os.getenv("DB_USER")  # Tên người dùng
        password = os.getenv("DB_PASSWORD")  # Mật khẩu
        database = os.getenv("DB_NAME")  # Tên cơ sở dữ liệu
        self.client = pymongo.MongoClient(f"mongodb://{username}:{password}@{host}:{port}/")
        self.db = self.client[database]
        self.collection = self.db["test"]

    def insert(self, collection_name, data):
        collection = self.db[collection_name]
        return collection.insert_one(data)

    def find(self, collection_name,query,protections=None):
        collection = self.db[collection_name]
        return collection.find(query,protections)

    def update(self,collection_name, query, data):
        collection = self.db[collection_name]
        return collection.update_one(query, data)

    def delete(self,collection_name, query):
        collection = self.db[collection_name]
        return collection.delete_one(query)
    
    def find_one(self,collection_name,query,projections=None):
        collection = self.db[collection_name]
        return collection.find_one(query,projections)

    def disconnect(self):
        self.client.close()
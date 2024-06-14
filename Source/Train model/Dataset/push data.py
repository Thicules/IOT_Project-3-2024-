import pandas as pd
import requests
import json

data=pd.read_csv('Test data.csv')
data['timestamp'] = data['YEAR'].astype(str) + "-" + data["MO"].apply(lambda x: str(x).zfill(2)) + "-" + data['DY'].apply(lambda x: str(x).zfill(2)) + " " +  data['HR'].apply(lambda x: str(x).zfill(2))+":00:00"
data['data'] = data[['UV', 'Tem', 'Hum']].to_dict('records')
# Drop the unwanted columns
data = data.drop(columns=['YEAR', 'MO', 'DY', 'HR', 'UV', 'Tem', 'Hum'])
json_data = data.to_json(orient='records')
json_data = json.loads(json_data)
json_post={"id":"66308f81873ef1d334dd28dc","data":json_data}
print(json_post)

res = requests.post('http://20.127.187.112/api/update_lastest_data',data=json.dumps(json_post), headers={'Content-Type': 'application/json', 
                                                                           'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTcxNzMwNDEsInVzZXJuYW1lIjoiYWRtaW4ifQ.PdX6cPvzpAe0gLMSC4l9LENsqWvKv1qvwpA7dthUXLs'})
print(res.json())


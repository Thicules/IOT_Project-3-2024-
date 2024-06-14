import paho.mqtt.client as mqtt
from tinydb import TinyDB, Query
import json
import threading
import schedule
import time
import numpy as np
import requests

# MQTT
mqqt_broker_public = "192.168.137.1"
mqqt_broker_public_port = 1883
mqqt_broker_public_user = "public"
mqqt_broker_public_password = "public"
mqqt_broker_local = "localhost"
mqqt_broker_local_port = 1883
mqqt_broker_local_user = "nhom3"
mqqt_broker_local_password = "123456"

#db
db = TinyDB('db.json')
table = db.table('sensors')

def on_connect_public(client, userdata, flags, rc):
    print("Public: Connected with result code "+str(rc))


def on_message_public(client, userdata, msg):
    print(msg.topic+" "+str(msg.payload))

def on_connect_local(client, userdata, flags, reason_code, properties):
    print("Local: Connected with result code "+str(reason_code))
    client.subscribe("sensors/#")


def on_message_local(client, userdata, msg):
    try:
        print(msg.topic+" "+str(msg.payload))
        payload= msg.payload.decode('utf-8')
        payload=json.loads(payload)
        if Process_data.filter_data(payload["data"])==True:
            current_time = time.localtime()
            table.insert({'id_sensor': payload["id_sensor"] ,'data': payload["data"],'timestamp':time.strftime("%Y-%m-%d %H:%M:%S", current_time)})
            client_public.publish("sensors", json.dumps(payload))
    except Exception as e:
        print("erro: " ,e)


class Process_data():
    @staticmethod
    def filter_data(data):
        tem=data["Tem"]
        hum=data['Hum']
        uv=data['UV']
        if tem>50 or tem <10 or hum>100 or hum<15  or uv<0 or uv>14: 
            return False
        return True

    @staticmethod
    def cal_avg():
        data=[[item['data']['UV'], item['data']['Tem'], item['data']['Hum']] for item in table.search( Query().id_sensor == '17291y12i21dwwe')]
        column_means = np.mean(data, axis=0)
        table.truncate()
        requests.post('https://192.168.137.1:8000//api/post_avg_value', json = {'id_sensor': '17291y12i21dwwe', 'data': {'UV': column_means[0], 'Tem': column_means[1], 'Hum': column_means[2]}})



client_public = mqtt.Client()
client_public.on_connect = on_connect_public
client_public.on_message = on_message_public
client_public.username_pw_set(mqqt_broker_public_user, mqqt_broker_public_password)
client_public.connect(mqqt_broker_public, mqqt_broker_public_port, 60)


if __name__ == "__main__":
    client_local = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2,client_id="local")
    client_local.on_connect = on_connect_local
    client_local.on_message = on_message_local
    client_local.username_pw_set(mqqt_broker_local_user, mqqt_broker_local_password,)
    client_local.connect(mqqt_broker_local, mqqt_broker_local_port, 60)
    client_local.loop_forever()
    schedule.every(1).hour.do(Process_data.cal_avg)
    while True:
        schedule.run_pending()
        client_local.loop()

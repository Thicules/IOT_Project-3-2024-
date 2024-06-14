import paho.mqtt.client as mqtt
from tinydb import TinyDB, Query
import json
import threading
import schedule
import time

# MQTT
mqqt_broker_public = "broker.hivemq.com"
mqqt_broker_public_port = 1883
mqqt_broker_public_user = "public"
mqqt_broker_public_password = "public"
mqqt_broker_local = "localhost"
mqqt_broker_local_port = 1883
mqqt_broker_local_user = "user"
mqqt_broker_local_password = "123456"

def on_connect_public(client, userdata, flags, rc):
    print("Public: Connected with result code "+str(rc))


def on_message_public(client, userdata, msg):
    print(msg.topic+" "+str(msg.payload))
    db = TinyDB('db.json')
    table = db.table('sensors')
    table.insert({'id': msg.topic, 'payload': msg.payload})

def on_connect_local(client, userdata, flags, reason_code, properties):
    print("Local: Connected with result code "+str(reason_code))
    client.subscribe("sensors/#")


def on_message_local(client, userdata, msg):
    print(msg.topic+" "+str(msg.payload))
    data= msg.payload.decode('utf-8')
    data=json.loads(data)
    db = TinyDB('db.json')
    print(data)
    print( msg._client_id.decode())
    db.insert({'id_sensors': 1 ,'data': data})


client_public = mqtt.Client()
client_public.on_connect = on_connect_public
client_public.on_message = on_message_public
client_public.username_pw_set(mqqt_broker_public_user, mqqt_broker_public_password)
client_public.connect(mqqt_broker_public, mqqt_broker_public_port, 60)


client_local = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2,client_id="local")
client_local.on_connect = on_connect_local
client_local.on_message = on_message_local
client_local.username_pw_set(mqqt_broker_local_user, mqqt_broker_local_password,)
client_local.connect(mqqt_broker_local, mqqt_broker_local_port, 60)
client_local.loop_forever()


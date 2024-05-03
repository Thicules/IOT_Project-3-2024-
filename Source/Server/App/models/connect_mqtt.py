import paho.mqtt.client as mqtt


class Mqtt_process:
    def __init__(self):
        self.mqttc = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)
        self.mqttc.on_message = self.on_message
        self.mqttc.on_connect = self.on_connect
        self.mqttc.username_pw_set(username="usertest", password="123456")
        self.stop_flag = False

    def publish(self, topic, message):
        self.mqttc.publish(topic, message)

    @staticmethod
    def on_message(client, userdata, msg):
        print(msg.topic+" "+str(msg.payload))

    @staticmethod
    def on_connect(client, userdata, flags, reason_code, properties):
        print(f"Connected with result code {reason_code}")
        # Subscribing in on_connect() means that if we lose the connection and
        # reconnect then subscriptions will be renewed.
        client.subscribe("#")
        client.publish("test", "Hello World")

    def stop(self):
        self.stop_flag = True
    
    def __call__(self):
        self.mqttc.connect("localhost", 1883, 60)
        while not self.stop_flag:
            self.mqttc.loop()
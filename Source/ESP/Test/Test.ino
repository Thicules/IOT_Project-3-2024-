#include <DHT.h>
#include <Wire.h> 
#include <WiFi.h>     
#include <PubSubClient.h> 
#include <ArduinoJson.h>
#define DHTPIN 16   
#define DHTTYPE DHT22   

int UVSensor = 34; 
int REF_3V3 = 35;

DHT dht(DHTPIN, DHTTYPE);

const char* ssid = "MSI5958";            
const char* password = "12345678";    
const char* mqttServer = "192.168.137.121"; 
const int mqttPort = 1883;                    
const char* mqttUser = "nhom3"; 
const char* mqttPassword = "123456"; 

WiFiClient espClient;
PubSubClient client(espClient);

void callback(char* topic, byte* message, unsigned int length) {
  Serial.print("Message arrived on topic: ");
  Serial.print(topic);
  Serial.print(". Message: ");
  String messageTemp;
  
  for (int i = 0; i < length; i++) {
    Serial.print((char)message[i]);
    messageTemp += (char)message[i];
  }
  Serial.println();
}

void setup() {
  pinMode(UVSensor, INPUT);
  pinMode(REF_3V3, INPUT);
  Serial.begin(9600);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi!");

  client.setServer(mqttServer, mqttPort);
  while (!client.connected()) {
    if (client.connect("", mqttUser, mqttPassword)) {
      Serial.println("Connected to MQTT broker!");
    } else {
      Serial.print("Failed to connect to MQTT broker, rc=");
      Serial.println(client.state());
      delay(1000);
    }
  }


  dht.begin();
}

void loop() {
  delay(1000);
  float h = dht.readHumidity();
  float t = dht.readTemperature();    
  Serial.println("Temperature: " + String(t) + "°C");
  Serial.println("Humidity: " + String(h) + "%");

  int uvLevel = averageAnalogRead(UVSensor);
  int refLevel = averageAnalogRead(REF_3V3);
  float outputVoltage = 3.3 / refLevel * uvLevel;
  float uvIntensity = mapfloat(outputVoltage, 0.99, 2.8, 0.0, 15.0);
  Serial.println("output: " + String(refLevel)); 
  Serial.println("ML8511 output: " + String(uvLevel)); 
  Serial.println("ML8511 voltage: " + String(outputVoltage));
  Serial.println("UV Intensity (mW/cm^2): " + String(uvIntensity));
  Serial.println("");

  if (client.connected()) {
    publishTelemetry("temperature", t);
    publishTelemetry("humidity", h);
    publishTelemetry("uv_intensity", uvIntensity);
  }

  delay(1000); // Delay sau khi gửi dữ liệu để đảm bảo kết nối MQTT hoàn thành
}
void publishTelemetry(const char* key, float value) {
  StaticJsonDocument<100> jsonBuffer;
  jsonBuffer[key] = value;
  
  String jsonPayload;
  serializeJson(jsonBuffer, jsonPayload);
  
  client.publish("sensor/value", jsonPayload.c_str());
}
int averageAnalogRead(int pinToRead)
{
  byte numberOfReadings = 8;
  unsigned int runningValue = 0;
  for(int x = 0 ; x < numberOfReadings ; x++) runningValue += analogRead(pinToRead);
  Serial.println(runningValue);
  runningValue /= numberOfReadings;
  return runningValue;
}
float mapfloat(float x, float in_min, float in_max, float out_min, float out_max)
{
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

void reconnect() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    if (client.connect("esp_client","nhom3","123456")) {
      Serial.println("connected");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" retrying in 5 seconds");
    }
  }
}

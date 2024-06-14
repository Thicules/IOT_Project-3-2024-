/*
 * This ESP32 code is created by esp32io.com
 *
 * This ESP32 code is released in the public domain
 *
 * For more detail (instruction and wiring diagram), visit https://esp32io.com/tutorials/esp32-dht22
 */

#include <DHT.h>
#define DHT_PIN 5 // ESP32 pin GPIO21 connected to DHT22 sensor

DHT dht(DHT_PIN, DHT22);

void setup() {
  Serial.begin(9600);
  pinMode(DHT_PIN,INPUT);
  dht.begin(); // initialize the DHT22 sensor
}

void loop() {
  float humi  = dht.readHumidity();
  // read temperature in Celsius
  float tempC = dht.readTemperature();
  // read temperature in Fahrenheit
  float tempF = dht.readTemperature(true);

  // check whether the reading is successful or not
  if ( isnan(tempC) || isnan(tempF) || isnan(humi)) {
    Serial.println("Failed to read from DHT22 sensor!");
  } else {
    Serial.print("Humidity: ");
    Serial.print(humi);
    Serial.print("%");

    Serial.print("  |  ");

    Serial.print("Temperature: ");
    Serial.print(tempC);
    Serial.print("°C  ~  ");
    Serial.print(tempF);
    Serial.println("°F");
  }

  delay(2000);
}

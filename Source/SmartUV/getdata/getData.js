// sensorData.js
import mqtt from 'mqtt';

const username = 'baongan';
const password = '123456';

let UVIndex = 0;
let temperature = 0;
let humidity = 0;

const connectToMqttBroker = () => {
  const client = mqtt.connect('ws://107.22.93.237:8883/', {
    username,
    password,
  });

  client.on('connect', () => {
    console.log('Connected to MQTT broker');
    client.subscribe('nhom3/baongan');
  });

  client.on('message', (topic, message) => {
    try {
      const data = JSON.parse(message.toString());
      if (data.UVIndex !== undefined) {
        UVIndex = data.UVIndex;
      }
      if (data.temperature !== undefined) {
        temperature = data.temperature;
      }
      if (data.humidity !== undefined) {
        humidity = data.humidity;
      }
      console.log(message);
    } catch (error) {
      console.error('Error parsing MQTT message:', error);
    }
  });

  client.on('error', (error) => {
    console.error('MQTT error:', error);
  });
};

const getSensorData = () => ({
  UVIndex,
  temperature,
  humidity,
});

export { connectToMqttBroker, getSensorData };
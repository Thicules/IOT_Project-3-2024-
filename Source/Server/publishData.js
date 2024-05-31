const mqtt = require('mqtt');

const username = 'baongan';
const password = '123456';
const brokerUrl = 'mqtt://107.22.93.237:1883';
const topic = 'nhom3/baongan';

const client = mqtt.connect(brokerUrl, {
  username,
  password,
});

client.on('connect', () => {
  console.log('Connected to MQTT broker');
  setInterval(publishFakeData, 1000);
});

client.on('error', (error) => {
  console.error('MQTT error:', error);
});

const getRandomValue = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(2);
};

const publishFakeData = () => {
  const data = {
    UVIndex: getRandomValue(0, 11),
    temperature: getRandomValue(15, 35), 
    humidity: getRandomValue(30, 70),   
  };

  client.publish(topic, JSON.stringify(data), { qos: 0, retain: false }, (error) => {
    if (error) {
      console.error('Publish error:', error);
    } else {
      console.log('Data published:', data);
    }
  });
};
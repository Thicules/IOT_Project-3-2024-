// import { Client } from 'react-native-paho-mqtt';
// import { updateUVIndex, updateTemperature, updateHumidity } from './action.js';

// export const connectToMqttBroker = (dispatch) => {
//   const client = new Client('mqtt://107.22.93.237:1883/', '');
  
//   client.onConnectionLost = (responseObject) => {
//     if (responseObject.errorCode !== 0) {
//       console.log('onConnectionLost:' + responseObject.errorMessage);
//     }
//   };

//   client.onMessageArrived = (message) => {
//     try {
//       const data = JSON.parse(message.payloadString);
//       if (data.UVIndex !== undefined) {
//         dispatch(updateUVIndex(data.UVIndex));
//       }
//       if (data.temperature !== undefined) {
//         dispatch(updateTemperature(data.temperature));
//       }
//       if (data.humidity !== undefined) {
//         dispatch(updateHumidity(data.humidity));
//       }
//     } catch (error) {
//       console.error('Error parsing MQTT message:', error);
//     }
//   };

//   client.connect({
//     onSuccess: () => {
//       console.log('Connected to MQTT broker');
//       client.subscribe('nhom3/baongan');
//     },
//     onFailure: (err) => {
//       console.error('Connection error:', err);
//     }
//   });
// };

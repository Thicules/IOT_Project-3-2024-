import init from 'react_native_mqtt'
import {updateAll } from '../reducers/dataRealtime';
import store from '../store';

 const myStorage = {
  setItem: (key, item) => {
    myStorage[key] = item;
  },
  getItem: (key) => myStorage[key],
  removeItem: (key) => {
    delete myStorage[key];
  },
};
init({
  size: 10000,
  storageBackend: myStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
});


export default class MQTT{
  constructor(){
    this.onMessageArrived = this.onMessageArrived.bind(this)
    this.onConnectionLost = this.onConnectionLost.bind(this)
    const client = new Paho.MQTT.Client("20.127.187.112",Number(1883), String(Math.random()));
    client.onMessageArrived = this.onMessageArrived;
    client.onConnectionLost = this.onConnectionLost;
    client.connect({ 
      onSuccess: this.onConnect,
      useSSL: true,
      userName:"usertest",
      password:"123456",
      reconnect:true,
      cleanSession:true,
      onFailure: (e) => {console.log("here is the error" , e); }
    });
    this.client=client
    this.state = {
      message: [''],
      client,
      messageToSend:'',
      isConnected: false,
    };
  }

  onMessageArrived(entry) {
    const action=updateAll(entry.payloadString)
    console.log("test")
  }


  onConnect = () => {
    console.log("Connected MQTT BROKER!!!!");
    this.client.subscribe(`${this.username}/${this.idGarden}/Data/Moisture`)
    this.client.subscribe(`${this.username}/${this.idGarden}/Data/Temperature`);
    this.client.subscribe(`${this.username}/${this.idGarden}/Data/Humidity`);
    this.client.subscribe(`${this.username}/${this.idGarden}/Data/Light`);
    this.client.subscribe(`${this.username}/${this.idGarden}/Broadcast/Led`)
  };

  onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }
  controlLED()
  {
    try {
      const currentLed=Boolean(store.getState().dataMQTT.led)
      var action=updateLed(!currentLed)
      store.dispatch(action)
      this.client.publish(`${this.username}/${this.idGarden}/Control/Led`, payload=String(Number(!currentLed  )), qos=1)
    }
    catch
    {
      console.log("Đã xảy ra lỗi khi public message")
    }
  }
  disconect(){
    console.log("Disconect MQTT Broker!!!")
    this.client.disconnect()
  }
}
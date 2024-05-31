import {createSlice} from "@reduxjs/toolkit"

const init={ 
    temperature: 0,
    humidity: 0,
    uvIndex: 0,
}

const DataRealTime=createSlice({
    name:"DataRealTime",
    initialState:init,
    reducers:{
        updateTemperature(state,action){
           return {...state,temperature:action.payload}
        },
        updateHumidity(state,action){
            return {...state,humidity:action.payload}
        },
        updateUVIndex(state,action){
            return {...state,UVindex:action.payload}
        },       
        updateAll(state,action){
            return {state: action.payload}
        },
        resetDataRealTime(state){
            return init;
        }
    }
})

export const {actions,reducer} = DataRealTime
export const {updateTemperature, updateHumidity,updateLight,updateMoisture,updateLed}=actions
export default reducer
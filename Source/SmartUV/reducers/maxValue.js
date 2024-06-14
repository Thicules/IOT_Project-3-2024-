import {createSlice} from "@reduxjs/toolkit"
import { max, min } from "moment"

const init={ 
    maxToday: 0,
    maxNextday: 0,
}

const DataRealTime=createSlice({
    name:"MaxValue",
    initialState:init,
    reducers:{    
        updateAllMax(state,action){
            return action.payload
        },
        resetData(state){
            return init;
        }
    }
})

export const {actions,reducer} = DataRealTime
export const {updateAllMax,resetData}=actions
export default reducer
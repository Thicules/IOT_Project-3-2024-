import { configureStore} from "@reduxjs/toolkit"
import realDate from "../reducers/dataRealtime"
import maxValue from "../reducers/maxValue"

const rootReducer={
    realData: realDate,
    maxValue: maxValue
}

const store=configureStore({
    reducer:rootReducer
})

export default store
import { configureStore} from "@reduxjs/toolkit"

const rootReducer={
    infoUser: infoUserReducer,
    token: tokenReducer,
    garden:gardenReducer,
    plant:plantsReducer,
    dataMQTT:dataMQTT,
   
}

const store=configureStore({
    reducer:rootReducer
})

export default store
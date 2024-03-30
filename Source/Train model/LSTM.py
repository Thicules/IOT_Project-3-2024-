import keras
from Dataset import Load_data
from keras import layers
import tensorflow as tf

class LSTM_Custom(keras.Model):
    def __init__(self):
        super(LSTM_Custom, self).__init__()
        self.lstm1 = layers.LSTM(50, return_sequences=True)
        self.lstm2= layers.Bidirectional(layers.LSTM(50,return_sequences=True))
        self.lstm3 = layers.Bidirectional(layers.LSTM(50))

    def call(self, inputs):
        x = self.lstm1(inputs)
        x= self.lstm2(x)
        x=self.lstm3(x)
        return x

class Prediction(keras.Model):
    def __init__(self):
        super(Prediction, self).__init__()
        self.dense1 = layers.Dense(64)
        self.dropout = layers.Dropout(0.5)
        self.predict = layers.Dense(24)

    def call(self, inputs):
        x = self.dense1(inputs)
        x=self.dropout(x)
        x=self.predict(x)
        return x



def CreateModel():
    inputs = keras.Input(shape=(30,24, 3))
    x=layers.Normalization()(inputs)
    x=layers.Reshape((-1,3))(x)
    x=LSTM_Custom()(x)
    x=layers.BatchNormalization()(x)
    x=Prediction()(x)
    model = keras.Model(inputs=inputs, outputs=x)
    return model

# model=CreateModel()
# model.summary()
# model.load_weights('LSTM_weights.h5')
# data_train,data_val=Load_data()()
# model.compile(loss='mean_squared_error', optimizer=keras.optimizers.Adam(learning_rate=0.0001))
# model.fit(data_train, epochs=20,validation_data=data_val)
# model.save_weights('LSTM_weights.h5')
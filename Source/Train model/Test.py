import pandas as pd
import numpy as np
from keras.models import load_model

model=load_model('LSTM_weights.h5')

data=pd.read_csv('./Dataset/Train data.csv')
data=data.loc[:,['Tem','Hum','UV']]
x_test=data[:30*24].values.reshape(1,-1,24,3)
y_predict=model.predict(x_test)
print(y_predict)
import pandas
import keras
from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler(feature_range=(0, 1))
class Load_data:
    def __init__(self,batch_size=32):
        self.batch_size=batch_size
        self.raw_train_data= pandas.read_csv('/home/jupyter-iec_roadquality/Train_model/UV/Dataset/Train data.csv')
        self.train_data= self.raw_train_data.loc[:,['Tem','Hum',"UV"]]
        self.raw_val_data= pandas.read_csv('/home/jupyter-iec_roadquality/Train_model/UV/Dataset/Val data.csv')
        self.val_data= self.raw_val_data.loc[:,['Tem','Hum',"UV"]]

    def get_data(self,x,y):
        return keras.preprocessing.timeseries_dataset_from_array(
            scaler.fit_transform(x.reshape(-1,3)).reshape(-1,24,3),
            scaler.fit_transform(y.reshape(24,-1)).reshape(-1,24),
            sequence_length=24,
            batch_size=self.batch_size,
            shuffle=False,
        )
    
    def __call__(self):
        self.x_train=self.train_data[:-24].values
        self.y_train=self.train_data[576:].values[:,2]
        self.x_val=self.val_data[:-24].values
        self.y_val=self.val_data[576:].values[:,2]
        return self.get_data(self.x_train,self.y_train),self.get_data(self.x_val,self.y_val)
        
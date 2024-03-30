import pandas
import keras

class Load_data:
    def __init__(self,batch_size=32):
        self.batch_size=batch_size
        self.raw_train_data= pandas.read_csv('./Dataset/Train data.csv')
        self.train_data= self.raw_train_data.loc[:,['Tem','Hum',"UV"]]
        self.raw_val_data= pandas.read_csv('./Dataset/Val data.csv')
        self.val_data= self.raw_val_data.loc[:,['Tem','Hum',"UV"]]

    def get_data(self,x,y):
        return keras.preprocessing.timeseries_dataset_from_array(
            x,
            y,
            sequence_length=30,
            batch_size=self.batch_size,
            shuffle=False,
        )
    
    def __call__(self):
        self.x_train=self.train_data[:-24].values.reshape(-1,24,3)
        self.y_train=self.train_data[720:].values[:,2].reshape(-1,24)
        self.x_val=self.val_data[:-24].values.reshape(-1,24,3)
        self.y_val=self.val_data[720:].values[:,2].reshape(-1,24)
        return self.get_data(self.x_train,self.y_train),self.get_data(self.x_val,self.y_val)
        
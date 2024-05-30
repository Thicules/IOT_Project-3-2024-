import torch.nn as nn
import pandas
import torch
from torch.utils.data import Dataset, DataLoader
class TimeSeriesDataset(Dataset):
    def __init__(self, x, y, sequence_length):
        self.x = torch.tensor(x, dtype=torch.float32)
        self.y = torch.tensor(y, dtype=torch.float32)
        self.sequence_length = sequence_length
        
    def __len__(self):
        return len(self.x) - self.sequence_length + 1
    
    def __getitem__(self, index):
        x = self.x[index:index+self.sequence_length]
        y = self.y[index]
        return x, y
        
class ListData:
    def __init__(self,phase="Train"):
        self.raw_data= pandas.read_csv(f"/home/jupyter-iec_roadquality/Train_model/UV/Dataset/{phase} data.csv")
        self.data= self.raw_data.loc[:,['Tem','Hum',"UV"]]
    def __call__(self):
        x=self.data[:-24].values
        y=self.data[576:].values[:,2]
        x_tensor = torch.tensor(x.reshape(-1,24,3), dtype=torch.float32)
        y_tensor = torch.tensor(y.reshape(-1,24), dtype=torch.float32)
        scaler_x = torch.nn.functional.normalize(x_tensor)
        scaler_y = torch.nn.functional.normalize(y_tensor)
        return  scaler_x,scaler_y

def create_data(batch_size=32,sequence_length=24):
    x_train,y_train=ListData()()
    x_val,y_val=ListData(phase="Val")()
    train_dataset= TimeSeriesDataset(x_train, y_train, sequence_length)
    val_dataset= TimeSeriesDataset(x_val, y_val, sequence_length)
    train_dataloader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)
    val_dataloader = DataLoader(val_dataset, batch_size=batch_size, shuffle=False)
    dataloader_dict = {"Train":train_dataloader, "Val":val_dataloader}
    return dataloader_dict
    
    
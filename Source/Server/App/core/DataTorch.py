import numpy as np
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
        y = torch.cat((self.y[index],self.y[index+1]),dim=0)
        return x, y
        
class ListData:
    def __init__(self,phase="Train",data=None):
        processed_array =[[item['data']['UV'], item['data']['Tem'], item['data']['Hum']] for item in data]
        self.data= np.array(processed_array)
    def __call__(self):
        x=self.data[:-48].values
        y=self.data[576:].values[:,0]
        x_tensor = torch.tensor(x.reshape(-1,24,3), dtype=torch.float32)
        y_tensor = torch.tensor(y.reshape(-1,24), dtype=torch.float32)
        scaler_x = torch.nn.functional.normalize(x_tensor)
        scaler_y = torch.nn.functional.normalize(y_tensor)
        return  scaler_x,scaler_y

def create_data(batch_size=32,sequence_length=24,data=None):
    x_train,y_train=ListData(data=data)()
    x_val,y_val=ListData(phase="Val")()
    train_dataset= TimeSeriesDataset(x_train, y_train, sequence_length)
    val_dataset= TimeSeriesDataset(x_val, y_val, sequence_length)
    train_dataloader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)
    val_dataloader = DataLoader(val_dataset, batch_size=batch_size, shuffle=False)
    dataloader_dict = {"Train":train_dataloader, "Val":val_dataloader}
    return dataloader_dict
    
    
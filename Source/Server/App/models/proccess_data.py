import numpy as np
import torch
from torch.utils.data import Dataset, DataLoader

class ProcessData:
    def __init__(self, data):
        processed_array =[[item['data']['UV'], item['data']['Tem'], item['data']['Hum']] for item in data]
        self.processed_array = np.array(processed_array)

    def process_predict(self ):
        # Parse JSON data to a Python list
        input = torch.tensor(self.processed_array.reshape(-1,3), dtype=torch.float32)
        input= torch.nn.functional.normalize(input).reshape(-1,24,24,3)
        max_uv = np.max(self.processed_array[:, 0])
        return dict(input=input,max_uv=max_uv)
    
    
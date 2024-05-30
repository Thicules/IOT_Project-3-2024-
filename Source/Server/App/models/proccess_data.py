import json
import numpy as np
import torch
from torch.utils.data import Dataset, DataLoader

class ProcessData:
    @staticmethod
    def process_to_train(data_30day):
        # Parse JSON data to a Python list
        processed_array = [[item['data']['UV'], item['data']['Tem'], item['data']['Hum']] for item in data_30day]
        processed_array = np.array(processed_array)
        input = torch.tensor(processed_array.reshape(-1,24,3), dtype=torch.float32)
        input= torch.nn.functional.normalize(input).reshape(-1,24,24,3)
        max_uv = np.max(processed_array[:, 0])
        return dict(input=input,max_uv=max_uv)
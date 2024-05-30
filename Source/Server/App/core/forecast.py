from App.core import mobile_former
from torch import nn
import torch
import numpy as np

model=mobile_former.mobile_former_508m(img_size=24)
model.classifier.classifier=nn.Sequential(
    nn.Dropout(0.5),
    nn.ReLU(),
    nn.Linear(1920,1024),
    nn.ReLU(),
    nn.Linear(1024,24)
)
checkpoint = torch.load('App/core/mobileformer.pth', map_location=torch.device('cpu'))
model.load_state_dict(checkpoint)   

class Forecast:
    def __init__(self, data):
        self.data = data

    def get_forecast(self):
        model.eval()
        input_data = self.data['input']
        print(input_data.shape)
        y_preds=model(input_data.permute(0, 3, 1, 2))
        print(y_preds.shape)
        y_preds = y_preds.detach().numpy()
        y_preds = y_preds*self.data['max_uv']
        y_preds = np.round(y_preds)
        return y_preds.reshape(24).tolist()
    
    @staticmethod
    def reload_model():
        checkpoint = torch.load('App/core/mobileformer.pth')
        model.load_state_dict(checkpoint)

    @staticmethod   
    def reTrain():
        print("Retrain model")
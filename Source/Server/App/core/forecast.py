from App.core.SegRNN.SegRNN import Model
from App.core.DataTorch import create_data
import torch
import numpy as np
import argparse
from App.models import Sensor
from torch import nn, optim

# model=mobile_former.mobile_former_508m(img_size=24)
# model.classifier.classifier=nn.Sequential(
#     nn.Dropout(0.5),
#     nn.ReLU(),
#     nn.Linear(1920,1024),
#     nn.ReLU(),
#     nn.Linear(1024,24)
# )
# checkpoint = torch.load('App/core/mobileformer.pth', map_location=torch.device('cpu'))
# model.load_state_dict(checkpoint)   
config={
 "seq_len":576,
 "pred_len":48,
  "enc_in":3,
  "d_model":512,
  "dropout":0.5,
  "rnn_type":"gru",
  "dec_way":"pmf",
  "seg_len":24,
   "channel_id":False,
   "revin": True
}
config_obj = argparse.Namespace(**config)

model=Model(config_obj)
checkpoint = torch.load('App/core/regRNN.pth', map_location=torch.device('cpu'))
model.load_state_dict(checkpoint)   

class Forecast:
    def __init__(self, data):
        self.data = data

    def get_forecast(self):
        model.eval()
        input_data = self.data['input']
        y_preds=model(input_data.permute(0, 3, 1, 2))
        y_preds = y_preds.detach().numpy()
        y_preds = y_preds*self.data['max_uv']
        y_preds = np.round(y_preds)
        return y_preds.reshape(48).tolist()
    
    @staticmethod
    def reload_model():
        checkpoint = torch.load('App/core/regRNN.pth')
        model.load_state_dict(checkpoint)

    @staticmethod   
    def reTrain():
        sensor=Sensor(id="66308f81873ef1d334dd28dc")
        data = sensor.get_data_to_train()
        dataloader_dict = create_data(data=data)
        criterior = nn.L1Loss()
        optimizer = optim.Adam(model.parameters(), lr=0.000001)
        for epoch in range(10):
            with open('output.txt', 'a') as f:
                print("Epoch {}/{}".format(epoch,10),file=f)
            
            for phase in ["Train"]:
                model.train()
                epoch_loss = 0.0
                epoch_corrects = 0
                
                for inputs, labels in dataloader_dict[phase]:
                    optimizer.zero_grad()
                    with torch.set_grad_enabled(1):
                        outputs = model(inputs.permute(0, 3, 1, 2))
                        loss = criterior(outputs, labels)
                        preds=outputs
                        loss.backward()
                        optimizer.step()
                        epoch_loss += loss.item() * inputs.size(0) * inputs.size(1) * inputs.size(2)
                        epoch_corrects += torch.sum(torch.abs(preds - labels.data) < 1e-5)
                epoch_loss = epoch_loss / len(dataloader_dict[phase].dataset)
                epoch_accuracy = epoch_corrects.double() / len(dataloader_dict[phase].dataset)
                with open('output.txt', 'a') as f:
                    print("{} Loss: {:.4f} Acc: {:.4f}".format(phase, epoch_loss, epoch_accuracy), file=f)
            torch.save(model.state_dict(), 'App/core/regRNN.pth')
        Forecast.reload_model()

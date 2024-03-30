import keras

class CNN_Custom(keras.Model):
    def __init__(self):
        super(CNN_Custom, self).__init__()
        self.conv2 = keras.layers.Conv2D(32, kernel_size=(3, 3), activation='relu')
        self.conv2 = keras.layers.Conv2D(64, kernel_size=(3, 3), activation='relu')
        self.maxpool = keras.layers.MaxPooling2D(pool_size=(2, 2))
        self.flatten = keras.layers.Flatten()
        self.dense1 = keras.layers.Dense(128, activation='relu')
        self.dropout = keras.layers.Dropout(0.5)
        self.predict = keras.layers.Dense(24)

    def call(self, inputs):
        x = self.conv1(inputs)
        x = self.conv2(x)
        x = self.maxpool(x)
        x = self.flatten(x)
        x = self.dense1(x)
        x = self.dropout(x)
        x = self.predict(x)
        return x
    
def create_model():
    inputs = keras.Input(shape=(30,24, 3))
    x = keras.layers.Normalization()(inputs)
    x = CNN_Custom()(x)
    model = keras.Model(inputs=inputs, outputs=x)
    return model
import keras
import keras.layers as layers
from Dataset import Load_data

def Encoder(inputs, head_size=24, num_heads=30, ff_dim=8):
        x = layers.MultiHeadAttention(key_dim=head_size, num_heads=num_heads, dropout=0.5)(inputs, inputs)
        x = layers.Dropout(0.5)(x)
        x = layers.LayerNormalization(epsilon=1e-6)(x)
        res = layers.Add()([inputs, x])

        # Feed Forward Part
        x = layers.Conv1D(filters=ff_dim, kernel_size=1, activation="relu")(res)
        x = layers.Dropout(0.5)(x)
        x = layers.Conv1D(filters=inputs.shape[-1], kernel_size=1)(x)
        x = layers.LayerNormalization(epsilon=1e-6)(x)
        return layers.Add()([x, res])

def mlp(inputs,mlp_units=[512, 128],mlp_dropout=0.5):
        x=inputs
        for dim in mlp_units:
            x = layers.Dense(dim, activation="relu")(x)
            x = layers.Dropout(mlp_dropout)(x)
        return x
    
    
def create_model():
    inputs=keras.Input(shape=(30,24, 3))
    x=layers.Reshape((-1,3))(inputs)
    x=Encoder(x)
    x = layers.Flatten()(x)
    x=mlp(x)
    x=layers.Dense(24)(x)
    model = keras.models.Model(inputs=inputs, outputs=x)
    return model

model=create_model()
model.summary()
data_train,data_val=Load_data(batch_size=4)()
model.compile(loss='mean_squared_error', optimizer=keras.optimizers.Adam(learning_rate=0.0001))
model.fit(data_train, epochs=20,validation_data=data_val)
model.save_weights('LSTM_weights.h5')
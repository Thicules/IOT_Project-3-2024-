from Dataset import Load_data

train,val=Load_data(batch_size=4)()

for batch in val:
    print(batch[0][0][3])
    break
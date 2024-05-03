# openuv-1porlu2uxea7-io
# openuv-rliz82rluamkr03-io
# openuv-3i96anyrlubawyp7-io
# openuv-3i96anyrlubayx7e-io
# openuv-3i96anyrlubazy1f-io
# openuv-3i96anyrlubb0hy5-io
# openuv-3i96anyrlubb1b0c-io
import requests
from datetime import datetime,timedelta

key_array=['openuv-3i96anyrlubawyp7-io','openuv-3i96anyrlubayx7e-io','openuv-3i96anyrlubazy1f-io','openuv-3i96anyrlubb0hy5-io','openuv-3i96anyrlubb1b0c-io']


index=0
count=2
for i in range(12,30):
    print(f"2024-04-{str(i).zfill(2)}")
    for  j in range(6,17):
        if count==50:
            count=0
            index+=1
        key=key_array[index]
        settime=datetime.strptime(f"2024-04-{str(i).zfill(2)}T{str(j).zfill(2)}:00:00.000Z", "%Y-%m-%dT%H:%M:%S.%fZ")-timedelta(hours=7)
        res=requests.get(f"https://api.openuv.io/api/v1/uv?lat=10.88&lng=106.78&alt=100&dt={settime}",headers={'x-access-token':key})
        print(res.json()['result']['uv'])
        count+=1
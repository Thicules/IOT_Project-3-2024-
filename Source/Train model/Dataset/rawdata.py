# openuv-1porlu2uxea7-io
# openuv-rliz82rluamkr03-io
# openuv-3i96anyrlubawyp7-io
# openuv-3i96anyrlubayx7e-io
# openuv-3i96anyrlubazy1f-io
# openuv-3i96anyrlubb0hy5-io
# openuv-3i96anyrlubb1b0c-io
import requests

key_array=['openuv-1porlu2uxea7-io','openuv-rliz82rluamkr03-io','openuv-3i96anyrlubawyp7-io','openuv-3i96anyrlubayx7e-io','openuv-3i96anyrlubazy1f-io','openuv-3i96anyrlubb0hy5-io','openuv-3i96anyrlubb1b0c-io']


index=0
count=0
for i in range(1,30):
    print(i)
    for  j in range(0,13):
        if count==50:
            count=0
            index+=1
        key=key_array[index]
        res=requests.get(f"https://api.openuv.io/api/v1/uv?lat=10.88&lng=106.78&alt=100&dt=2024-03-{str(i).zfill(2)}T"+str(j).zfill(2)+":00:00.000Z",headers={'x-access-token':key})
        print(res.json()['result']['uv'])
        count+=1


# res=requests.get("https://www.uvindex.app/api/getUvTimeline?lat=10.883023&lng=106.783251")
# for d in range(2,5):
#     for i in range(0,24):
#         print(res.json()['timelineData'][d]['hours'][i]['humidity']*100)
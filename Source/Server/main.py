from App import app
from App import Mqtt_process
import threading
import uvicorn
import signal
import sys

mqtt_process = None
def run_mqtt_process():
    global mqtt_process
    mqtt_process = Mqtt_process()
    mqtt_process()

def signal_handler(sig, frame):
    print('Stopping...')
    if mqtt_process is not None:
        mqtt_process.stop()
    sys.exit(0)

if __name__ == "__main__":
     # Register the signal handler
    signal.signal(signal.SIGINT, signal_handler)
    # mqtt_thread = threading.Thread(target=run_mqtt_process)
    # mqtt_thread.start()
    uvicorn.run(app, host="0.0.0.0", port=8000)
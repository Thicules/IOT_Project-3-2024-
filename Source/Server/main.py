from App import app
from App.core import Forecast_model
import uvicorn
import threading
import schedule
import time


schedule.every(0.1).minutes.do(Forecast_model.reTrain)

def run_schedule():
    while True:
        # Run pending jobs
        schedule.run_pending()
        time.sleep(1)

if __name__ == "__main__":
    schedule_thread = threading.Thread(target=run_schedule,daemon=True)
    schedule_thread.start()
    uvicorn.run(app, host="0.0.0.0", port=8000)
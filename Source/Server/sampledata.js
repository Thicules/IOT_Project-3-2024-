const express = require('express');
const app = express();

app.get('/api/linechart', (req, res) => {
  const currentTime = new Date();
  const startHour = 5;
  const endHour = 17;
  const sampleData = [];

  for (let hour = startHour; hour <= endHour; hour++) {
    const dataPoint = {
      hour: hour,
      predictedUVindex: Math.floor(Math.random() * 10) + 3, // Random number between 5 and 25
      realUVindex: 5,
    };
    sampleData.push(dataPoint);
  }

  res.json(sampleData);
});

app.listen(8000, () => {
  console.log('API server is running on port 8000');
});
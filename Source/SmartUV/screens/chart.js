import React from 'react';
import { View } from 'react-native';
import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';

const data1 = [10, 6, 8, 10, 12, 11, 9, 7, 5, 4, 6, 8, 10, 12, 11, 9, 7, 5, 4, 6, 8, 10, 12, 11];


const Chart = ({ data, xLabels }) => {
  const contentInset = { top: 20, bottom: 20 };

  return (
    <View style={{ flexDirection: 'row', height: 300 }}>
      <YAxis
        data={data1}
        contentInset={contentInset}
        svg={{
          fill: 'grey',
          fontSize: 10,
        }}
        numberOfTicks={9}
        formatLabel={(value) => `${value}`}
      />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <LineChart
          style={{ flex: 1 }}
          data={data1}
          svg={{ stroke: 'blue' }}
          contentInset={contentInset}
        >
          <Grid />
        </LineChart>
        <XAxis
          style={{ marginHorizontal: -5, height: 25 }}
          data={data1}
          formatLabel={(value, index) => `${index}`}
          contentInset={{ left: 20, right: 20 }}
          svg={{ fontSize: 10, fill: 'black' }}
        />
        
      </View>
    </View>
  );
};

export default Chart;
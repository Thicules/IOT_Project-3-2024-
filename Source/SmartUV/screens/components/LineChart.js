import React, { useState, useEffect } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { LineChart } from "react-native-chart-kit";
import axios from "axios";
import { COLORS } from "../../assets";
state = {
  datasource: [],
  realTimeData: [],
  loading: true,
  error: false,
  };  
const Linedchart = () => {
  const [datasource, setDatasource] = useState([]);
  const [realTimeData, setRealTimeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedDataPoint, setSelectedDataPoint] = useState(null);

  const handleDataPointClick = (data, dataset) => {
    if (data && dataset && dataset.data.length > data.predictedUVindex) {
      const selectedValue = dataset.data[data.predictedUVindex];
      setSelectedDataPoint(selectedValue);
    }
  };

  const get_chart = () => {
    const apiUrl = "http://192.168.1.102:8000/api/linechart";
    axios
      .get(apiUrl)
      .then((response) => {
        setDatasource(response.data);
        setLoading(false);
        console.log("Data fetched successfully");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      });
  };

  const get_realTimeData = () => {
    const realTimeData = [];
    setRealTimeData(realTimeData);
  };

  useEffect(() => {
    get_chart();
    const interval = setInterval(get_realTimeData, 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (loading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else if (error) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Error fetching data</Text>
      </View>
    );
  } else if (datasource.length) {
    let data = datasource.concat(realTimeData);
    const currentTime = new Date().getHours();
    if (currentTime) {
      return (
        <View>
          <LineChart
            data={{
              labels: data.map((item) => item.hour),
              datasets: [
                {
                  data: data.map((item) => item.predictedUVindex),
                },
                {
                  data: data.map((item) => item.realUVindex),
                  color: (opacity = 0.8) => `rgba(68, 5, 214, ${opacity})`,
                },
              ],
            }}
            width={350}
            height={250}
            yAxisInterval={1}
            yAxisSuffix="   "
            chartConfig={{
              backgroundColor: COLORS.ORANGE,
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: { borderRadius: 20 },
              propsForDots: {
                r: "4",
                strokeWidth: "1",
                stroke: "#ffa726",
              },
            }}
            bezier
            onDataPointClick={handleDataPointClick}
            style={{ alignItems: 'center', alignSelf: 'center', borderRadius: 10 }}
          >
            {selectedDataPoint && (
              <Text
                style={{
                  position: "absolute",
                  left: selectedDataPoint.x,
                  top: selectedDataPoint.y - 20,
                  backgroundColor: "white",
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                {`Y: ${selectedDataPoint.value}`}
              </Text>
            )}
          </LineChart>
        </View>
      );
    } else {
      return <Text>No data found</Text>;
    }
  } else {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>No data found</Text>
      </View>
    );
  }
};

export default Linedchart;
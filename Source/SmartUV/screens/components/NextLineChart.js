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
const NextLinedchart = () => {
  const [datasource1, setDatasource1] = useState([]);
  const [datasource2, setDatasource2] = useState([]);
  const [realTimeData, setRealTimeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedDataPoint, setSelectedDataPoint] = useState(null);
  const [minUV, setMin] = useState(null); 
  const [maxUV, setMax] = useState(null); 

  const handleDataPointClick = (data, dataset) => {
    if (data && dataset && dataset.data.length > data.predictedUVindex) {
      const selectedValue = dataset.data[data.predictedUVindex];
      setSelectedDataPoint(selectedValue);
    }
  };

  const get_chart = async () => {
    const headers = {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTczMjU5NTEsInVzZXJuYW1lIjoiYWRtaW4ifQ.D0pgqEHf3NlgmTFJsRPWJeE7uU369p7-j2aaSiZ_R6I`
    };
  
    try {
      const response1 = await axios.get("http://20.127.187.112/api/get_data_up_to_now?id_sensor=66308f81873ef1d334dd28dc&period=1", { headers });
      setDatasource1(response1.data);
  
      const response2 = await axios.get("http://20.127.187.112/api/forecast?id_sensor=66308f81873ef1d334dd28dc", { headers });
      if (response2.data) {
        setDatasource2(response2.data);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(true);
      setLoading(false);
    }
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
  } else if (datasource1 || datasource2) {
    let data_raw1 = JSON.parse(datasource1.data);
    let data_raw2 = datasource2.nextday;

    const filteredData1 = data_raw1.filter((item) => {
      const hour = new Date(item.timestamp.$date).getUTCHours();
      return hour >= 5 && hour <= 19;
    });
    const uvDataReal = [];
    const labels = [];
    const uvDataPredict = data_raw2.slice(5,20);

    for (let hour = 5; hour <= 19; hour++) {
      const dataPoint1 = filteredData1.find((item) => {
        const itemHour = new Date(item.timestamp.$date).getUTCHours();
        return itemHour === hour;
      });
  
      if (dataPoint1) {
        uvDataReal.push(dataPoint1.data.UV);
      } else {
        uvDataReal.push('');
      }
      labels.push(hour.toString());
    }

      return (
        <View>
          <LineChart
            data={{
              labels: labels,
              datasets: [
                {
                  data: uvDataPredict,
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
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>No data found</Text>
      </View>
    );
  }
};

export default NextLinedchart;
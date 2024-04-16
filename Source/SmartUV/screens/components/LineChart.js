import React, { Component, useState, useEffect } from "react";
import {Text, View, ActivityIndicator } from "react-native";
import { LineChart } from "react-native-chart-kit";
import axios from "axios";
import { COLORS } from "../../assets";

class Linedchart extends Component {
  state = {
    datasource: [],
    loading: true,
    error: false,
  };

  LineChart_Dynamic = () => {
    if (this.state.loading) {
      return (
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
          <ActivityIndicator size="large" />
        </View>
      );
    } else if (this.state.error) {
      return (
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
          <Text>Error fetching data</Text>
        </View>
      );
    } else if (this.state.datasource.length) {
      return (
        <View>
          <LineChart
            data={{
              labels: this.state.datasource.map((item) => item.hour),
              datasets: [
                {
                  data: this.state.datasource.map((item) => item.UVindex),
                },
              ],
            }}
            width={350} // Dynamic width
            height={250}
            yAxisLabel=""
            yAxisSuffix=""
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: COLORS.ORANGE,
              backgroundGradientFrom: "#8482ff",
              backgroundGradientTo: "#d2abec",
              decimalPlaces: 2,
              color: (opacity = 100) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 100) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 10,
              },
              propsForDots: {
                r: "5",
                strokeWidth: "1",
                stroke: "#ffa726",
              },
            }}
            bezier
            style={{
              marginVertical: 10,
              borderRadius: 10,
            }}
          />
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

  get_chart = () => {
    const apiUrl = "http://192.168.2.35:8000/api/linechart";
    axios
      .get(apiUrl)
      .then((response) => {
        this.setState({ datasource: response.data, loading: false });
        console.log("Data fetched successfully");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.setState({ error: true, loading: false });
      });
  };

  componentDidMount = () => {
    this.get_chart();
  };

  render() {
    return <View>{this.LineChart_Dynamic()}</View>;
  }
}

export default Linedchart;
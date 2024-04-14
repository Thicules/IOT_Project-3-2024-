import {View, Text, Image, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import { styleHome } from './styleScreen/styleHome';
import { COLORS } from '../assets';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Chart from './chart';

const UVIndex = 6.5;

function convertUVIndexToPercentage(uvIndex) {
	if (uvIndex>=11) return 100
	else return parseInt(uvIndex*100/11)
}

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <ScrollView style={{ flex: 1, backgroundColor:  'white' }}>      
        <View style={styleHome.container}>
          <View style={styleHome.headerContainer}>            
            <Text style={styleHome.mainTitle}>TP Hồ Chí Minh</Text>
          </View> 
          <View style={styleHome.circularProgressbar}>
            <AnimatedCircularProgress
                size={250}
                width={15}
                backgroundColor="#BC7FCD"
                tintColor="#FFE5E5"
                fill={convertUVIndexToPercentage(UVIndex)}
                backgroundWidth={8}
                arcSweepAngle={240}
                tintColorSecondary={COLORS.ORANGE}
                rotation={240}
                lineCap="round"                
              >
                  {() => (
                <View style={styleHome.circularProgressbar}>
                    <Text style={styleHome.circularUVIndex}>{UVIndex}</Text>
                 </View>
                )}
            </AnimatedCircularProgress>            
          </View>
          <View style={styleHome.circularIndexText}>
            <Text style={styleHome.circularRightIndex}>Low</Text>
            <Text style={styleHome.cirrcularLeftIndex}>Extreme</Text>
          </View>
          <View style={styleHome.line} />

          {/* UV Index Text */}
          <View style={styleHome.UVIndexContainer}>
            <Text style={styleHome.UVTitle1}>UV Index Forecast</Text>
            <Text style={styleHome.UVTitle2}>Now</Text>
            <Text style={styleHome.UVIndex}>{UVIndex}</Text>
            <Text style={styleHome.UVTitle2}>Max</Text>
            <Text style={styleHome.UVIndex}>20</Text>
          </View>               
        </View>

        {/* Chart */}
        <View style={styleHome.chartContainer}>
          <Chart />
        </View>
          
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
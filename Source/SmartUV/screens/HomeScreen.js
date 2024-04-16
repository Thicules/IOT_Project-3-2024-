import {View, Text, Image, SafeAreaView, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import { styleHome } from './styleScreen/styleHome';
import { COLORS } from '../assets';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Linedchart from './components/LineChart';
import * as Location from 'expo-location'
import { LinearGradient } from 'expo-linear-gradient';

const UVIndex = 6.5;

function convertUVIndexToPercentage(uvIndex) {
	if (uvIndex>=11) return 100
	else return parseInt(uvIndex*100/11)
}

const HomeScreen = () => {
  // Lấy thời gian và vị trí của thiết bị di động
  const [currentTime, setCurrentTime] = useState("");
  const [city, setCityName] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
    const currentTime = new Date().toLocaleTimeString();
    setCurrentTime(currentTime);
    }, 1000);
    return () => clearInterval(interval);
    }, []);

    useEffect(() => {
      requestLocationPermission();
    }, []);

    const requestLocationPermission = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
  
        if (status === 'granted') {
          getLocation();
        } else {
          console.log('Permission denied');
        }
      } catch (error) {
        console.log('Error requesting location permission:', error);
      }
    };
  
    const getLocation = async () => {
      try {
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
  
        getCityFromCoordinates(latitude, longitude);
      } catch (error) {
        console.log('Error getting location:', error);
      }
    };
  
    const getCityFromCoordinates = async (latitude, longitude) => {
      try {
        const geocode = await Location.reverseGeocodeAsync({ latitude, longitude });
  
        if (geocode.length > 0) {
          const city = geocode[0].city;
          setCityName(city);
        } else {
          console.log('No results found');
        }
      } catch (error) {
        console.log('Error getting city from coordinates:', error);
      }
    };
  
  
    

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>      
        <LinearGradient colors={['#252c42', '#3a39c4']} style={styleHome.container}>
          <View style={styleHome.headerContainer}>
            {city ? (<Text style={styleHome.mainTitle}>{city}</Text>) : (<Text style={styleHome.mainTitle}>Loading...</Text>) }         
            <Text style={styleHome.subTitle}>{currentTime}</Text>
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
        </LinearGradient>

        {/* Chart */}
        <View style={styleHome.chartContainer}>
          <Linedchart/>
        </View>
  
          
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
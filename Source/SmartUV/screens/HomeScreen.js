import {View, Text, Image, SafeAreaView, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import { styleHome } from './styleScreen/styleHome';
import { COLORS } from '../assets';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Linedchart from './components/LineChart';
import * as Location from 'expo-location';
import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';
const API_KEY = '1611ec05c074eaf17e2075ba2af4a200';

//sensor datas
const UVIndex = 7.5;
const humidity = 75;
const temperature = 26;

function convertUVIndexToPercentage(uvIndex) {
	if (uvIndex>=11) return 100
	else return parseInt(uvIndex*100/11)
}

const HomeScreen = () => {
  // Lấy thời gian và vị trí của thiết bị di động
  const [currentTime, setCurrentTime] = useState("");
  const [city, setCityName] = useState(null);
  const [nextDays, setNextDays] = useState([]);

    //Hiển thị những ngày kế tiếp
  useEffect(() => {
  updateNextDays(); 
  const interval = setInterval(() => {
    updateNextDays();}, 1000); 
    return () => {
      clearInterval(interval); 
    };
  }, []);   

  const updateNextDays = () => {
    const currentDate = moment(); 
    const newNextDays = [];  
    for (let i = 1; i <= 4; i++) {
      const nextDay = currentDate.clone().add(i, 'days'); // Lấy ngày tiếp theo
      const dayOfWeek = nextDay.format('dddd'); // Lấy thứ của ngày tiếp theo
  
      newNextDays.push({
        date: nextDay,
        dayOfWeek: dayOfWeek });  }  
    setNextDays(newNextDays);} 

  useEffect(() => {
    const interval = setInterval(() => {
    const currentTime = new Date().toLocaleTimeString();
    setCurrentTime(currentTime);}, 1000);
    return () => clearInterval(interval); }, []);

  useEffect(() => {requestLocationPermission();}, []);

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
    // const getWeatherData = async (latitude, longitude) => {
    //   try {
    //     const response = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    //     const data = await response.json();
    //     setWeatherData(data);
    //   } catch (error) {
    //     console.log('Error getting weather data:', error);
    //   }
    // };


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
                tintColor={COLORS.maincolor}
                fill={convertUVIndexToPercentage(UVIndex)}
                backgroundWidth={8}
                arcSweepAngle={240}
                tintColorSecondary={COLORS.RED}
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
          <View style={styleHome.WeatherContainer}>
            <Text style={styleHome.WTTitle1}>Weather Conditions</Text>
            <Image style={styleHome.WTTitle2} source={require('../assets/temperature.png')}/>
            <Text style={styleHome.WTIndex}>{temperature}℃</Text>
            <Image style={styleHome.WTTitle2} source={require('../assets/humidity.png')} />
            <Text style={styleHome.WTIndex}>{humidity}%</Text>
          </View>               
        </LinearGradient>

        {/* Chart */}

        <View style={styleHome.chartContainer}>
          <Text style={styleHome.predictionMainTitle}>Today</Text> 
          <Linedchart/>
        </View>

        <View style={styleHome.line1}/>
        {/* Prediction */}
        <View style={styleHome.predictionFrame}>
        <Text style={styleHome.predictionMainTitle}>Next day</Text>  
        <View style={styleHome.predictionContainer}>      

          <View style={styleHome.predictionContentContainer}>
            <View style={styleHome.predictionTextContainer}>
              <Text style={styleHome.predictionSubTitle}>Day</Text>
              <Text style={styleHome.predictionText}>{nextDays[0]?.date.format('dddd')}</Text>
            </View>        
            <View style={styleHome.predictionTextContainer}>
              <Text style={styleHome.predictionSubTitle}>Min UV</Text>
              <Text style={styleHome.predictionText}>5</Text>
            </View>
            <View style={styleHome.predictionTextContainer}>
              <Text style={styleHome.predictionSubTitle}>Max UV</Text>
              <Text style={styleHome.predictionText}>12</Text>
            </View>          
          </View>
          
        </View>
        <View style={styleHome.chartContainer}>
          <Linedchart/>
        </View>
        </View>
  
          
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const dayAbbreviations = {
  Sunday: 'Sun',
  Monday: 'Mon',
  Tuesday: 'Tue',
  Wednesday: 'Wed',
  Thursday: 'Thu',
  Friday: 'Fri',
  Saturday: 'Sat',
};
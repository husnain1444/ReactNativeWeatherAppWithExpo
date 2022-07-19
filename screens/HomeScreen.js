import { StatusBar } from 'expo-status-bar';
import { useLayoutEffect, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { defaultColors } from '../utils/defaultColors';
import ItemView from '../components/ItemView'
import WeatherDisplay from '../components/WeatherDisplay';

export default function HomeScreen({navigation}) {

  const [isLoading,setLoading] = useState(true);
  const [data,setData] = useState([]);
  const [currentWeather,setCurrentWeather] = useState({});
  const [weatherLocation,setWeatherLocation] = useState('');
  const [tempType,setTempType] = useState('C');

  let weather = {
    icon: "",
    text: "",
    temp_c: "",
    temp_f: "",
    tempType: {tempType}
  }
  const getWeather = async () => {
    try {
      const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=1460961a491a471095664729222906&q=Lahore&days=3&aqi=no&alerts=no');
      const json = await response.json();
      // console.log("String",json);
      setWeatherLocation(json.location.name)
      setCurrentWeather(json.current);
      // console.log( "String", json.current);
      setData(json.forecast.forecastday);
      // console.log("String", json.forecast.forecastday);

      navigation.setOptions({ title: json.location.name});
    } catch(error) {
      console.error(error, "String")
      navigation.setOptions({ title: "Error",});
    } finally {
      setLoading(false)
    }
      // return fetch("https://api.weatherapi.com/v1/forecast.json?key=1460961a491a471095664729222906&q=Lahore&days=3&aqi=no&alerts=no")
      // .then((Response) => Response.json)
      // .then((json) => {
      //   return json.current
      // });
  }

  useEffect(() => {
    getWeather();
  },[]);

  function onTempTypePress() {
    if(tempType == "C") {
      setTempType("F");
    } else {
      setTempType("C");
    }
  }

  function onClickItem(weather) {
    navigation.navigate("Detail", {weather: weather.item, tempType: tempType})
    // console.log("Data:" , data)
  }

  // console.log("String", currentWeather.condition);
  // console.log("String", "https:" + currentWeather.condition.icon)

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style = {styles.currentInfo}>

        {/* {isLoading ? <ActivityIndicator /> : (
            <Text style = {styles.currentWeatherText} >{weatherLocation} </Text>
          )} */}

        {isLoading ? <ActivityIndicator /> : (
            <WeatherDisplay 
                weatherInfo = {weather = {icon: "https:" + currentWeather.condition.icon,
                                            text: currentWeather.condition.text,
                                            temp_c: currentWeather.temp_c,
                                            temp_f: currentWeather.temp_f,
                                            }}

                                tempType = {tempType} 
            />
        )}
        
        <Pressable style = {{alignItems: 'flex-end'}}>
            <Text style = {styles.buttonStyle} onPress= {onTempTypePress} >{tempType}</Text>
        </Pressable>

      </View>

      <View style = {styles.listInfo}>
      {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            renderItem = {(weather) => (
            <Pressable onPress = {() => onClickItem(weather)}>
                <ItemView 
                    weatherItem = {weather}
                    tempType = {tempType} 
                    />
            </Pressable>
            )}
            alwaysBounceVertical = {false}
          />
        )}
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultColors.appBg,
    alignItems: 'flex-start',
    padding: 10,
  },
  currentInfo: {
    flex: 1,
    width: '100%',
    borderBottomColor: '#cccc',
    borderBottomWidth: 2,
    paddingBottom: 30
    // backgroundColor: 'red',
    // flexDirection: 'column'
  },
  listInfo: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 20,    
    // backgroundColor: 'red'a
  },
  imageStyle: {
    width: 50,
    height: 50
  },
  currentWeatherText: {
    fontSize: 42,
    color: 'white',
  },
  buttonStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 32,
    color: '#fff112',
    backgroundColor: defaultColors.appBgLight,
    borderColor: '#cccc',
    borderWidth: 1,
    borderRadius: 4,
    textAlign: 'center',
  },
  textStyle: {
    color: 'white'
  }
});

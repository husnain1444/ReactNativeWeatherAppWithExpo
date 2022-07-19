import { StatusBar } from 'expo-status-bar';
import { useEffect, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { defaultColors } from '../utils/defaultColors';
import ItemView from '../components/ItemView'
import WeatherDisplay from '../components/WeatherDisplay';

import moment from 'moment';

export default function DetailScreen({route, navigation}) {

  const [weatherDetail,setWeatherDetail] = useState({});
  const [tempType,setTempType] = useState('C');

//   console.log("String", route.params.weather.day.avgtemp_c);

  useEffect(() => {
    // console.log("String", route.params.weather.date);
    navigation.setOptions({ title: moment(route.params.weather.date).format("dddd"),});
    setWeatherDetail(route.params.weather);
    setTempType(route.params.tempType);
  },[])

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <WeatherDisplay 
                weatherInfo = {{
                                            icon: "https:" + route.params.weather.day.condition.icon,
                                            text: route.params.weather.day.condition.text,
                                            temp_c: route.params.weather.day.avgtemp_c,
                                            temp_f: route.params.weather.day.avgtemp_f,
                                            }}

                                tempType = {tempType} 
            />

      {/* <View style = {styles.listInfo}>
      
      </View> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: defaultColors.appBg,
      alignItems: 'flex-start',
      padding: 20,
    },
    currentInfo: {
      flex: 1,
      alignItems: 'flex-start',
      width: '100%',
      paddingBottom: 50,
      borderBottomColor: '#cccc',
      borderBottomWidth: 2,
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
import {StyleSheet,View,Text, Image} from 'react-native'
import { defaultColors } from '../utils/defaultColors';

export default function WeatherDisplay(props) {
    // console.log("String", props.tempType)
    return(
        <View>

            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                    <Image 
                    style = {styles.imageStyle} 
                    source={{
                        uri: props.weatherInfo.icon
                    }}
                />
                <Text style = {styles.textStyle}> {props.weatherInfo.text} </Text>

            </View>

            <View style = {{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
                    <Text style = {styles.currentWeatherText} > 
                    {(props.tempType == "C") ? 
                        props.weatherInfo.temp_c + "°" + props.tempType : 
                        props.weatherInfo.temp_f + "°" + props.tempType}
                    </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
      currentWeatherText: {
        fontSize: 42,
        color: 'white',
      },
      textStyle: {
        color: 'white'
      },
      imageStyle: {
        width: 50,
        height: 50
      },
}) ;
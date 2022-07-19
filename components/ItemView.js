import {StyleSheet,View,Text, Image} from 'react-native'
import { defaultColors } from '../utils/defaultColors';

export default function ItemView(props) {
    // console.log("String", props.weatherItem.item.day.avgtemp_f)
    return(
        <View style = {styles.subContainer}>

            <Image 
              style = {styles.imageStyle} 
              source={{
                  uri: 'https:' + props.weatherItem.item.day.condition.icon
                }}
            />
            <View style = {{flexDirection: 'column'}}>
                <Text style={styles.textItem}>Temp:  
                    { (props.tempType == "C") ? 
                        props.weatherItem.item.day.avgtemp_c + "°" + props.tempType : 
                        props.weatherItem.item.day.avgtemp_f + "°" + props.tempType
                    } 
                </Text>
                <Text style={styles.textSubItem}>{"(" + props.weatherItem.item.day.condition.text + ")"}</Text>
            </View> 

            <View style = {{flex:1, flexDirection: 'column', alignItems: 'flex-end', marginRight: 10}}>
                <Text style={styles.textSubItem}>Min:  
                    { (props.tempType == "C") ? 
                        props.weatherItem.item.day.mintemp_c + "°" + props.tempType : 
                        props.weatherItem.item.day.mintemp_f + "°" + props.tempType
                    } 
                </Text>
                <Text style={styles.textSubItem}>Max:  
                    { (props.tempType == "C") ? 
                        props.weatherItem.item.day.maxtemp_c + "°" + props.tempType : 
                        props.weatherItem.item.day.maxtemp_f + "°" + props.tempType
                    } 
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    subContainer:{
        height: 80,
        borderColor: '#cccc',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: defaultColors.appBgLight,
        flexDirection: 'row',
        alignItems: 'center'
      },
    textItem: {
        marginLeft:10,
        // borderRadius:10,
        // backgroundColor: '#777777',
        color: 'white',
        fontSize: 20,
      },
      textSubItem: {
        marginLeft:10,
        // borderRadius:10,
        // backgroundColor: '#777777',
        color: 'white',
      },
      imageStyle: {
        width: 50,
        height: 50
      },
}) ;
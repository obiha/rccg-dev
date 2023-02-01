import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Image } from 'react-native';
import introImg from '../data/testimg/intro.jpg'
export default function HomeScreen() {
  return (

    <View style={{ flex:3, backgroundColor:'#FAF9F6'}}>
      <View style={{ margin: 0 }}>
        <Image source={introImg}
          style={{ width: '100%', height: 270 }} />
      </View>
        
         <ScrollView style={{ width: '100%', height:'100%',backgroundColor: 'red'}} contentContainerStyle={{alignItems:'center'}}>
     
          <View style={{ width: '95%', height: 160, marginTop: '5%', borderRadius: '9%', backgroundColor: '#FAF9F6',}}>

        <Text>
          EVENTS
        </Text>
     
          </View>

          <View style={{ width: '95%', height: '80%', marginTop: '3%', borderRadius: '9%', backgroundColor: ' #FAF9F6',}}>
          <Text>
          EVENTS
        </Text>
          </View>

          <View style={{ width: '95%', height: '80%', marginTop: '3%', borderRadius: '9%', backgroundColor: ' #FAF9F6',}}>
          <Text>
          EVENTS
        </Text>
     
     </View>

        </ScrollView>
       



      
   
    </View>

 


  );

  const styles = StyleSheet.create({
    heading: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 13,
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 8,
      paddingVertical: 45,
      paddingHorizontal: 25,
      width: '100%',
      marginVertical: 10,
    },
    shadowProp: {
      shadowColor: '#171717',
      // shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
  });
}

import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
// import logo from './assets/main-logo-1.png';
import { Audio } from 'expo-av';
import React from 'react';




export default function App() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    
    console.log('loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/downt.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
    });
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();}
      : undefined;
  }, [sound]);


  return (
    <View style={styles.container}>
      {/* <Image source={logo}style = {{width: 105, height: 105}}></Image> 
      <Text style={{color: '#ffffff'}}>Open up App.js to start working on your app!. Wow this is cool init</Text> */}
      <Button title="Play Sound" onPress={playSound} />
      {/* <StatusBar style="auto"/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

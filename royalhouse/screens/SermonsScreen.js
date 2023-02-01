import * as React from 'react';
import { Text, View } from 'react-native';

export default function SermonsScreen() {
        // const [sound, setSound] = React.useState();

        // async function playSound() {

        //         console.log('loading Sound');
        //         const { sound } = await Audio.Sound.createAsync(
        //                 require('./assets/downt.mp3')
        //         );
        //         setSound(sound);

        //         console.log('Playing Sound');
        //         await Audio.setAudioModeAsync({
        //                 playsInSilentModeIOS: true,
        //         });
        //         await sound.playAsync();
        // }

        // React.useEffect(() => {
        //         return sound
        //                 ? () => {
        //                         console.log('Unloading Sound');
        //                         sound.unloadAsync();
        //                 }
        //                 : undefined;
        // }, [sound]);


        return (
                // <View style={styles.container}>
                //         <View style={{ backgroundColor: "#FFFFFF", width: "100em", margin: '0' }}>
                //                 <Button title="Play Sound" onPress={playSound} />

                //         </View>
                //         <Text style={{ fontSize: "20px" }}>Hello this should work </Text>
                //         {/* <Image source={logo}style = {{width: 105, height: 105}}></Image>  */}
                //         {/* <Text style={{color: '#ffffff'}}>Open up App.js to start working on your app!. Wow this is cool init</Text> */}

                //         <StatusBar style="auto" />
                // </View>


                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Sermons Screen </Text>
    </View>
        )
}



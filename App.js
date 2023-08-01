import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Intro} from './components/Intro'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

export default function App() {
  EStyleSheet.build();

  // importa as fontes
  const [fontsLoaded] = useFonts({
    'Lexend-Bold': require('./assets/fonts/Lexend-Bold.ttf'),
    'Lexend-Light': require('./assets/fonts/Lexend-Light.ttf'),
    'Lexend-Regular': require('./assets/fonts/Lexend-Regular.ttf'),
    'Lexend-SemiBold': require('./assets/fonts/Lexend-SemiBold.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  // 'função' para ler as fontes
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Intro fonts={fontsLoaded}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

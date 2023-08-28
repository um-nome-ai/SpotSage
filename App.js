import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

// Pages
import Intro from './components/Intro';
import Estacionamento from './components/Estacionamento';
import Map from './components/Map';

const Stack = createNativeStackNavigator();

// Context
import Context, { Provider } from './context';


export default function App() {
  // importa as fontes
  const [fontsLoaded] = useFonts({
    Lexend: require('./assets/fonts/Lexend-Regular.ttf'),
    Roboto: require('./assets/fonts/Roboto-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }} initialRouteName="Tela Inicial">
          <Stack.Screen
            name="Tela Inicial"
            component={Intro}
          />
          <Stack.Screen
            name="Estacionamento"
            component={Estacionamento}
          />
          <Stack.Screen
            name="Map"
            component={Map}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}

import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Intro} from './components/Intro'
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import BourbonWalligIMG from './assets/images/imagem.png';
import IguatemiIMG from './assets/images/imagem3.png';
import ShoppingTotalIMG from './assets/images/imagem4.png';
import PraiaDeBelasIMG from './assets/images/imagem9.png';
import BourbonIpirangaIMG from './assets/images/ipiranga-02-1.png'
import BarraShoppingIMG from './assets/images/barra-shopping-sul.png'

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

  const shoppings = [{
    name: "Iguatemi Porto Alegre",
    address: "Av. João Wallig, 1800 - Passo d'Areia",
    CSC: "Porto Alegre - RS",
    image: IguatemiIMG
  }, {
    name: "Praia de Belas Shopping",
    address: "Av. Praia de Belas, 1181 - Praia de Belas",
    CSC: "Porto Alegre - RS",
    image: PraiaDeBelasIMG
  }, {
    name: "BarraShoppingSul",
    address: "Av. Diário de Notícias, 300 - Cristal",
    CSC: "Porto Alegre - RS",
    image: BarraShoppingIMG
  }, {
    name: "Bourbon Shopping Wallig",
    address: "Av. Assis Brasil, 2611 - Cristo Redentor",
    CSC: "Porto Alegre - RS",
    image: BourbonWalligIMG
  }, {
    name: "Shopping Total",
    address: "Av. Cristóvão Colombo, 545 - Independência",
    CSC: "Porto Alegre - RS",
    image: ShoppingTotalIMG
  }, {
    name: "Bourbon Shopping Ipiranga",
    address: "Av. Ipiranga, 5200 - Jardim Botânico",
    CSC: "Porto Alegre - RS",
    image: BourbonIpirangaIMG
  }, //{
  //  name: "POP Center - Centro Popular de Compras",
  //  address: "Av. Júlio de Castilhos, 235 - Centro Histórico",
  //  CSC: "Porto Alegre - RS",
  //  image: ""
  //},
]

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
      <Intro fonts={fontsLoaded} shoppings={shoppings}/>
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

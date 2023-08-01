import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, Button, ScrollView } from 'react-native';
import SearchBar from './SearchBar';
import theme from '../assets/theme';
import Recentes from './Recentes';
import LocaisProximos from './LocaisProximos'
import Estacionado from './Estacionado';

export default function Home({ navigation }) {

  return (
    <View style={styles.back}>
      <SearchBar />
      <ScrollView>
        <Recentes navigation={navigation}/>
        <LocaisProximos navigation={navigation}/>
      </ScrollView>
      <Estacionado/>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: theme.colors.background,
    display: 'flex'
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  header: {
    position: 'absolute',
    top: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10
  },
  button: {
    height: 100,
    borderRadius: 5,
  }
});
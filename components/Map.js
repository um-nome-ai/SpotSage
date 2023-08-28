import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import theme from '../assets/theme';

import Vaga from './Vaga'
import Context from '../context';

// {route: { params: { navigation, id, sector, sectorName, floorNumber} } }
export default function Map({ navigation, id, sector, sectorName, floorNumber }) {
  const { vagas, setVagas } = React.useContext(Context)
  const [ vagasPredio, setVagasPredio ] = React.useState((vagas.find(vaga => vaga.id === id && vaga.sector === sectorName)).floors.find(floor => floor.id === floorNumber).data)

  return (
    <View>
      {vagasPredio.map((vaga, index) => <Vaga key={index} sectorName={sectorName} vagasPredio={vagasPredio} index={index} address={{id, sector, floorNumber}} setVagas={setVagas} navigation={navigation}/>)}
      <Image style={styles.image} source={require('../assets/images/esta0.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 341,
    height: 282,
    borderRadius: 8
  }
});
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import theme from '../assets/theme';

import Andar from './Andar';
import Secao from './Secao';

export default function Estacionamento({ route: { params: { data } } }) {
  const [selecionado, setSelecionado] = React.useState(-1)
  const numPredios = data.sectors.length
  const numAndares = (selecionado === -1) ? 0 : data.sectors[selecionado].floors.length

  let tamBehind = (selecionado === 0) ? 
    { left: 10, width: 360 } : 
    ((selecionado === (numPredios-1)) ? 
      {left: 24, width: 360} : 
      {left: 24, width: 346}
    )
  ;

  tamBehind = {...tamBehind, height: (numAndares <= 1) ? 0 : (70*numAndares)}

  function seleciona(numeroPredio){
    if(selecionado === numeroPredio)
      setSelecionado(-1)
    else
      setSelecionado(numeroPredio)
  }
  return (
    <View style={styles.background}>
      <View style={styles.mainFlex}>
        {data.sectors.map((sector, index) => <Secao selecionado={selecionado} key={index} id={index} name={sector.name} seleciona={seleciona} vagas={sector.total}/>)}
      </View>
      {(selecionado === -1) ? <></> : 
        <View style={styles.andares}>
          {data.sectors[selecionado].floors.map((floor, index) => <Andar key={index} numAndares={data.sectors[selecionado].floors.length} andar={floor.number} vagas={floor.available} numPredios={numPredios} predio={selecionado}/>)}
          <View style={{...styles.behind, ...tamBehind}}/>
        </View>}
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: theme.colors.background,
    display: 'flex'
  },
  mainFlex: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 28,
    marginHorizontal: 20,
    justifyContent: 'center'
  },
  predio: {
    marginHorizontal: 5
  },
  text: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    width: 118,
    height: 118,
    backgroundColor: "#93F882",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  insideText: {
    fontFamily: 'Roboto',
    fontSize: 64,
    fontWeight: 'bold'
  },
  andares: {
    marginTop: 12,
    marginLeft: -1,
    display: 'flex',
    flexDirection: 'column',
    zIndex: 100
  },
  behind: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 360,
    zIndex: -1,
    backgroundColor: '#7519EB'
  },
  ponte: {
    position: 'absolute',
    bottom: -59,
    width: 118,
    height: 118,
    backgroundColor: '#7519EB',
    zIndex: -1
  }
});
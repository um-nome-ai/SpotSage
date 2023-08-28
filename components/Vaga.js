import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, ToastAndroid } from 'react-native';
import theme from '../assets/theme';
import Context from '../context';

export default function Vaga({ navigation, vagasPredio, index, address, setVagas, sectorName }) {
  const { locais, mudarVagaLocal, setEstacionado, setVaga, vagas } = React.useContext(Context)


  function vagaToType(vaga)
  {
    const borderColor = (vaga.ocupado)? 'rgba(100, 0, 0, 0.5)' : ((vaga.prioridade)  ? 'rgba(0, 0, 100, 0.5)' : 'rgba(0, 100, 0, 0.5)')
    const backgroundColor = (vaga.ocupado) ? '#CE0B0B' : ((vaga.prioridade) ? '#0B36CE' : '#1BCE0B')
    return {borderWidth: 1, borderColor: borderColor, backgroundColor: backgroundColor}
  }

  function ocupaVaga()
  {
    //locais[id].data.sectors[sector].floors[floorNumber].map

    if(vagasPredio[index].ocupado === true) {
      ToastAndroid.showWithGravity('Vaga já ocupada', ToastAndroid.SHORT, ToastAndroid.BOTTOM)
    }
    else {
      const localIndex = locais.findIndex(local => local.id === address.id)
      const vaga = {
        andar: address.floorNumber, 
        local: locais[localIndex].info.name, 
        predio: locais[localIndex].data.sectors[address.sector].name, 
        vaga: vagasPredio[index].vaga,
        idLocal:  locais.findIndex(local => local.id === address.id),
        idPredio: address.sector,
      }
      setEstacionado(true)
      mudarVagaLocal(vaga, false, address)
      setVaga(vaga)
      setVagas([...vagas].map(vagaPredio => {
        if((vagaPredio.id === address.id) && (vagaPredio.sector === sectorName))
        {
          return {
            ...vagaPredio,
            floors:
              [...vagaPredio.floors].map(floor => {
                return {
                  id: floor.id, 
                  data: floor.data.map(vaga => {
                    if((vaga.vaga === vagasPredio[index].vaga) && (floor.id === address.floorNumber)){
                      return {...vaga, ocupado: true}
                    } else {
                      return {...vaga}
                    }})
                }
              })
          }
        } else {
          return vagaPredio
        }
      }))
      navigation.navigate('Tela Inicial')
    }
  }

  return (
    <TouchableOpacity
      style={{...styles.button, ...vagasPredio[index].pos, ...(vagaToType(vagasPredio[index]))}} onPress={() => ocupaVaga()}/>
  )
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 50,
  }
});
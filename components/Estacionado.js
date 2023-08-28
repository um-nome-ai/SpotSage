import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import theme from '../assets/theme'

import Context from '../context';

const { width, height } = Dimensions.get('window')

export default function Estacionado() {
  const { vaga, setEstacionado, mudarVagaLocal } = React.useContext(Context)

  function sair() {
    setEstacionado(false)
    mudarVagaLocal(vaga, true)
  }

  return (
    <View style={styles.background}>
      <View style={styles.text}>
        <Text style={styles.title}>Seu carro está estacionado em:</Text>
        <Text style={styles.subtitle}>{vaga.local}</Text>
        <Text style={styles.subtitle}>Prédio: {vaga.predio} / Andar: {vaga.andar}</Text>
        <Text style={styles.subtitle}>Vaga: {vaga.vaga}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={sair}>
        <Text style={styles.buttonText}>SAIR</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: 110,
    backgroundColor: theme.colors.selectedViolet,
    top: height - 65,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    marginLeft: 8,
    marginTop: 4
  },
  title: {
    color: theme.colors.white,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 16
  },
  subtitle: {
    color: theme.colors.white,
    fontFamily: 'Roboto',
    fontSize: 15
  },
  button: {
    display: 'flex',
    width: 134,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: theme.colors.primaryButton,
    marginTop: 27,
    marginRight: 20
  },
  buttonText: {
    color: theme.colors.white,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 32,
    fontWeight: 'bold'
  }
});
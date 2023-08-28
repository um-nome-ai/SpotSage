import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import theme from '../assets/theme'

import Context from '../context';
//
export default function Local({ navigation, local, rec }) {
  const image = require('../data/imageList').default[local.info.image]
  const { recentes, setRecentes } = React.useContext(Context)

  function onPress() {
    if (!recentes.includes(local.id))
      setRecentes([local.id, ...recentes, ])

    navigation.navigate('Estacionamento', { navigation: navigation, id: local.id})
  }

  return (
    <TouchableOpacity style={styles.background} onPress={onPress}>
      <View style={{ ...styles.info, width: rec ? 200 : 228 }}>
        <Text style={styles.title}>{local.info.name}</Text>
        <Text style={styles.subtext}>{local.info.address}</Text>
      </View>
      <Image
        source={image}
        style={{ width: 135, height: 90 }}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90,
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    flexShrink: 0,
    marginHorizontal: 10,
    marginVertical: 5
  },
  info: {
    display: 'flex',
    marginLeft: 8,
    marginBottom: 12,
    flexDirection: 'column'
  },
  title: {
    height: 26,
    flexShrink: 0,
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.41
  },
  subtext: {
    height: 16,
    flexShrink: 0,
    color: theme.colors.textSecondary,
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'normal',
    letterSpacing: 0.41,
    flex: 1,
    flexWrap: 'wrap'
  }
});
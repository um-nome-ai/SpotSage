import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import theme from '../assets/theme'
import Local from './Local';

import Context from '../context';

export default function Recentes({ navigation }) {
  const [ toggle, setToggle ] = React.useState(false)
  const { recentes, setRecentes } = React.useContext(Context)
  const locais = require('../data/locais.json')
  const plus = require('../assets/images/plus.png')
  const minus = require('../assets/images/minus.png')

  function onPress()
  {
    setToggle(!toggle)
  }

  if (recentes[0] !== undefined)
    return (
      <ScrollView style={(toggle) ? {...styles.backgroud, maxHeight: '100%'} : {...styles.backgroud, maxHeight: 268}}>
        <View style={styles.header}>
          <Text style={styles.title}>Recentes</Text>
          <TouchableOpacity onPress={onPress}>
            <Image
              source={toggle ? minus : plus}
              style={{}}
            />
          </TouchableOpacity>
        </View>
        {(toggle) ?
        <View style={styles.cards}>
          {recentes.map((i,index) =>  <Local key={index} local={locais[i]} navigation={navigation} rec={true} />)}
        </View> :
        <View style={styles.cards}>
          {(recentes[0] !== undefined) ? <Local local={locais[recentes[0]]} navigation={navigation} rec={true} /> : <></>}
          {(recentes[1] !== undefined) ? <Local local={locais[recentes[1]]} navigation={navigation} rec={true} /> : <></>}
        </View>}
      </ScrollView>
    )
  else
    return (
      <View style={{marginBottom: 10}}/>
    )
}

const styles = StyleSheet.create({
  backgroud: {
    flexShrink: 0,
    borderRadius: 12,
    backgroundColor: '#8C33FF',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 19,
    marginBottom: 11
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 11,
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    color: theme.colors.white,
    fontFamily: 'Lexend',
    fontSize: 40,
    lineHeight: 41,
    fontWeight: 'bold'
  },
  cards: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 5
  }
});
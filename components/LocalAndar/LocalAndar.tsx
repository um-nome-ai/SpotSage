import {View, Text} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import Rectangle49 from '../../assets/vectors/Rectangle49.svg';
import theme from '../../theme';

export function LocalAndar() {
  return (
    <View style={styles.root}>
      <View style={styles.andares}>
        <View style={styles.rectangle49}/>
        <View style={styles.andar}>
          <View style={styles.fundo}/>
          <Text style={styles.$0}>
            0
          </Text>
          <Text style={styles.$3Andar}>
            3º Andar
          </Text>
        </View>
        <View style={styles.andar2}>
          <View style={styles.fundo2}/>
          <Text style={styles.$1}>
            1
          </Text>
          <Text style={styles.$2Andar}>
            2º Andar
          </Text>
        </View>
        <View style={styles.andar3}>
          <View style={styles.fundo3}/>
          <Text style={styles.$4}>
            4
          </Text>
          <Text style={styles.$1Andar}>
            1º Andar
          </Text>
        </View>
      </View>
      <View style={styles.cabecalho}>
        <View style={styles.frame31}>
          <Rectangle49/>
          <Text style={styles.predio}>
            Prédio 3
          </Text>
          <Text style={styles.$2}>
            2
          </Text>
        </View>
        <View style={styles.frame30}>
          <View style={styles.rectangle493}/>
          <Text style={styles.predio2}>
            Prédio 2
          </Text>
          <Text style={styles.$02}>
            0
          </Text>
        </View>
        <View style={styles.rectangle494}/>
        <View style={styles.frame29}>
          <Text style={styles.$5}>
            5
          </Text>
          <Text style={styles.predio3}>
            Prédio 1
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  root: {
    width: '414rem',
    height: '896rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: theme.colors.background,
  },
  rectangle49: {
    width: '360rem',
    height: '220rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '8rem',
    backgroundColor: '#7519EB',
  },
  fundo: {
    width: '374rem',
    height: '60rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '8rem',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  $0: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: '36rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 113.889% */',
    letterSpacing: '0.41rem',
  },
  $3Andar: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: '36rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 113.889% */',
    letterSpacing: '0.41rem',
  },
  andares: {
    width: '414rem',
    height: '709rem',
    flexShrink: 0,
  },
  andar: {
    width: '414rem',
    height: '80rem',
    flexShrink: 0,
  },
  fundo2: {
    width: '374rem',
    height: '60rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  $1: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: '36rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 113.889% */',
    letterSpacing: '0.41rem',
  },
  $2Andar: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: '36rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 113.889% */',
    letterSpacing: '0.41rem',
  },
  andar2: {
    width: '414rem',
    height: '80rem',
    flexShrink: 0,
  },
  fundo3: {
    width: '374rem',
    height: '60rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '8rem',
    borderBottomLeftRadius: '0rem',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  $4: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: '36rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 113.889% */',
    letterSpacing: '0.41rem',
  },
  $1Andar: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: '36rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 113.889% */',
    letterSpacing: '0.41rem',
  },
  andar3: {
    width: '414rem',
    height: '80rem',
    flexShrink: 0,
  },
  predio: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '20rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 205% */',
    letterSpacing: '0.41rem',
  },
  $2: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '64rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 64.063% */',
    letterSpacing: '0.41rem',
  },
  cabecalho: {
    width: '414rem',
    height: '187rem',
    flexShrink: 0,
  },
  frame31: {
    width: '118rem',
    height: '147rem',
    flexShrink: 0,
  },
  rectangle493: {
    width: '118rem',
    height: '118rem',
    flexShrink: 0,
    backgroundColor: '#F88282',
    borderRadius: '8rem',
  },
  predio2: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '20rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 205% */',
    letterSpacing: '0.41rem',
  },
  $02: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '64rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 64.063% */',
    letterSpacing: '0.41rem',
  },
  frame30: {
    width: '118rem',
    height: '147rem',
    flexShrink: 0,
  },
  rectangle494: {
    width: '118rem',
    height: '145rem',
    flexShrink: 0,
    borderTopLeftRadius: '8rem',
    borderTopRightRadius: '8rem',
    borderBottomRightRadius: '0rem',
    borderBottomLeftRadius: '0rem',
    backgroundColor: '#7519EB',
  },
  $5: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: '64rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 64.063% */',
    letterSpacing: '0.41rem',
  },
  predio3: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: '20rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '41rem /* 205% */',
    letterSpacing: '0.41rem',
  },
  frame29: {
    display: 'inline-flex',
    paddingTop: '0rem',
    paddingRight: '19rem',
    paddingBottom: '38rem',
    paddingLeft: '20rem',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32rem',
  },
});

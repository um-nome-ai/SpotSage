import {View, Text} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import Rectangle49 from '../../assets/vectors/Rectangle49.svg';
import theme from '../../theme';

export function Local() {
  return (
    <View style={styles.root}>
      <View style={styles.cabecalho}>
        <View style={styles.frame31}>
          <View style={styles.rectangle49}/>
          <Text style={styles.predio}>
            Prédio 3
          </Text>
          <Text style={styles.$2}>
            2
          </Text>
        </View>
        <View style={styles.frame30}>
          <Rectangle49/>
          <Text style={styles.predio2}>
            Prédio 2
          </Text>
          <Text style={styles.$0}>
            0
          </Text>
        </View>
        <View style={styles.frame29}>
          <View style={styles.rectangle493}/>
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
    paddingBottom: 0,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  rectangle49: {
    width: '118rem',
    height: '118rem',
    flexShrink: 0,
    backgroundColor: '#F8F482',
    borderRadius: '8rem',
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
    height: '202rem',
    paddingTop: '28rem',
    paddingBottom: '27rem',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '10rem',
    flexShrink: 0,
    flexDirection: 'row',
    paddingHorizontal: '20rem',
  },
  frame31: {
    width: '118rem',
    height: '147rem',
    flexShrink: 0,
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
  $0: {
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
  rectangle493: {
    width: '118rem',
    height: '118rem',
    flexShrink: 0,
    backgroundColor: '#93F882',
    borderRadius: '8rem',
  },
  $5: {
    color: '#000',
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
    width: '118rem',
    height: '147rem',
    flexShrink: 0,
  },
});

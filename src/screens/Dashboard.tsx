import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR, SECONDARY_COLOR, WHITE} from '../constants/colors';
import {ALPHABET_SCREEN} from '../constants/routes';
import {capitalLatter, numbers, smallLatter} from '../utils/common';

export const Dashboard = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ALPHABET_SCREEN, {data: capitalLatter()});
          //   setSelectedItem(item);
        }}
        style={[styles.item]}>
        <Text style={[styles.text, {color: WHITE}]}>{'A-Z'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ALPHABET_SCREEN, {data: smallLatter()});
        }}
        style={[styles.item]}>
        <Text style={[styles.text, {color: WHITE}]}>{'a-z'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ALPHABET_SCREEN, {data: numbers()});
        }}
        style={[styles.item]}>
        <Text style={[styles.text, {color: WHITE}]}>{'0-9'}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: SECONDARY_COLOR,
    flex: 1,
  },
  item: {
    // width: '45%',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    backgroundColor: PRIMARY_COLOR,
    height: 200,
    width: 200,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

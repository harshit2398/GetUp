import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TransparentBorderText = () => {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.text}>A</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    backgroundColor: 'yellow', // Set your desired background color
    padding: 5, // Adjust padding as needed
    borderRadius: 5, // Adjust border radius as needed
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default TransparentBorderText;

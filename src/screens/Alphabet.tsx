import React, {useState, useEffect, useRef} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {SketchCanvas} from '@terrylinla/react-native-sketch-canvas';
import Tts from 'react-native-tts';
import {PRIMARY_COLOR, SECONDARY_COLOR, WHITE} from '../constants/colors';
import TransparentBorderText from '../components/TransText';

export const Alphabet = ({route}: any) => {
  const {data} = route.params;

  const sketchRef = useRef();

  const [selectedItem, setSelectedItem] = useState(null);
  const [animation] = useState(new Animated.Value(0));
  useEffect(() => {
    if (selectedItem) {
      animation.setValue(0);
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();

      // @ts-ignore
      Tts.speak(selectedItem, {
        androidParams: {
          KEY_PARAM_PAN: -1,
          KEY_PARAM_VOLUME: 0.5,
          KEY_PARAM_STREAM: 'STREAM_MUSIC',
        },
      });
    } else {
      animation.setValue(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  const renderItem = ({item}: any) => {
    const isSelected = selectedItem === item;
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedItem(item);
        }}
        style={[
          styles.item,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor: isSelected ? PRIMARY_COLOR : 'transparent',
            borderColor: isSelected ? '#c5d9fc' : WHITE,
          },
        ]}>
        <Text
          style={[styles.text, {color: isSelected ? WHITE : PRIMARY_COLOR}]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  const interpolatedOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const interpolatedScale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.5],
  });

  const animatedStyle = {
    opacity: interpolatedOpacity,
    transform: [{scale: interpolatedScale}],
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
      <TransparentBorderText />

      <View style={styles.sketchContainer} key={selectedItem}>
        {selectedItem && (
          <SketchCanvas
            // @ts-ignore
            ref={sketchRef}
            style={styles.sketchCanvas}
            strokeColor={PRIMARY_COLOR}
            strokeWidth={40}
          />
        )}
      </View>
      {selectedItem && (
        <Animated.View style={[styles.selectedItemContainer, animatedStyle]}>
          <Text style={styles.selectedItem}>{selectedItem}</Text>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: SECONDARY_COLOR,
  },
  listContainer: {
    flex: 0.3,
  },
  sketchContainer: {
    flex: 0.7,
    backgroundColor: 'transparent',
    position: 'relative',
  },
  sketchCanvas: {
    flex: 1,
  },
  item: {
    width: '45%',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  separator: {
    height: 5,
    backgroundColor: 'transparent',
  },
  listContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  selectedItemContainer: {
    position: 'absolute',
    top: '10%',
    left: '60%',
    // borderColor: '#c5d9fc',
    zIndex: -1,
  },
  selectedItem: {
    fontSize: 200,
    fontWeight: 'bold',
    color: WHITE,
    backgroundColor: 'transparent',
  },
});

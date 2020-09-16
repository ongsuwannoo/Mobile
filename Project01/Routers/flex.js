import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => (
  <View style={styles.container}>
    <View style={styles.box1}>
      <Text style={styles.text}>ก</Text>
    </View>
    <View style={styles.box2}>
      <Text style={styles.text}>ข</Text>
    </View>
    <View style={styles.box3}>
      <Text style={styles.text}>ค</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box1: {
    position: 'absolute',
    top: 40,
    left: 40,
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  box2: {
    ...StyleSheet.absoluteFill,
    top: 120,
    left: 50,
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  },
  box3: {
    ...StyleSheet.absoluteFillObject,
    top: 120,
    left: 120,
    width: 100,
    height: 100,
    backgroundColor: 'green'
  },
  text: {
    color: '#FFF',
    fontSize: 80
  }
});

export default App;

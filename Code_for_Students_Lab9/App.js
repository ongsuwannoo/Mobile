import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MealsNavigator from './navigation/MealsNavigator'


export default function App() {
  return(
    <View style={styles.container}>
        <MealsNavigator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
  },
});

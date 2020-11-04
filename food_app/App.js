import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MealsNavigator from './navigation/MealsNavigator'
import { createStore, combineReducers } from 'redux'
import mealsReducer from './store/reducers/mealsReducer'
import { Provider } from 'react-redux'


const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer)

export default function App() {


  return(
    <View style={styles.container}>
      <Provider store={store}>
        <MealsNavigator />
      </Provider>
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

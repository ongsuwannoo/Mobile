import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
import { CATEGORIES} from "../data/dummy-data";
import MealList from "../components/MealList"
import { useSelector } from 'react-redux'; 

const CategoryMealsScreen = (props) => {
  // const renderMealItem = (itemData) => {
  //   return (
  //     <MealItem
  //       title={itemData.item.title}
  //       duration={itemData.item.duration}
  //       complexity={itemData.item.complexity}
  //       affordability={itemData.item.affordability}
  //       image={itemData.item.imageUrl}
  //       onSelectMeal={() => {
  //         props.navigation.navigate('MealDetail',{'MealId' : itemData.item.id})
  //       }}
  //     />
  //   );
  // };
  const catId = props.navigation.getParam('categoryId')
  const availableMeals = useSelector(state => state.meals.filteredMeals)
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  return (
    <View style={styles.screen}>
      <MealList listData={displayedMeals} navigation = {props.navigation}/>
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;

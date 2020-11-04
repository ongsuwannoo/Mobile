// import คอมโพเนนต์ที่จำเป็น
import {createStackNavigator} from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import FavoritesScreen from '../screens/FavoritesScreen'
import {createDrawerNavigator} from "react-navigation-drawer"

const MealsNavigator = createStackNavigator({
    // กำหนด RouteConfigs (Slide 14)
    Categories: CategoriesScreen,
    Favorites: FavoritesScreen
  },
  {
    // กำหนด defaultNavigationOptions (Slide 23-24)
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#4a148c", },
      headerTintColor: "white",
      },
  }
);

const FavNavigator = createStackNavigator(
  {
  Favorites : FavoritesScreen,
  }
  ,
  {
    defaultNavigationOptions:{
    headerStyle: { backgroundColor: "#4a148c" },
    headerTintColor: "white",
    },
  }
)


const MealsFavTabNavigator = createBottomTabNavigator(
  {
  Meal: {
    screen: MealsNavigator,
    navigationOptions:{
      tabBarIcon: () =>{
        return (<AntDesign name="info" size={24} color={'black'}/>)
      }
    }

  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions:{
      tabBarLabel: 'FavoritesScreen',
      tabBarIcon: () =>{
        return (<AntDesign name='book' size={24} color={'black'}/>)
      }
    }
  }
},{
  tabBarOptions: {
    activeTintColor: 'skyblue'
  }
}
)



const MainNavigator = createDrawerNavigator(
  {
    MealFav : MealsFavTabNavigator,
  })

export default createAppContainer(MainNavigator);

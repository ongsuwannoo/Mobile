import React, {useState} from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton"

const FiltersScreen = (props) => {
  const [isGlutenFree, setIsglutenFree] =  useState(false)
  const [isLactoseFree, setIslactoseFree] =  useState(false)
  const [isVegan, setIsVegan] =  useState(false)
  const [isVegetarian, setIsVegettarian] =  useState(false)

  const onTogleSwitch1 = () => setIsglutenFree(!isGlutenFree)
  const onTogleSwitch2 = () => setIslactoseFree(!isLactoseFree)
  const onTogleSwitch3 = () => setIsVegan(!isVegan)
  const onTogleSwitch4 = () => setIsVegettarian(!isVegetarian)

  return (
    <View style={styles.screen}>
      <Text style={{fontWeight: 'bold', textAlign: 'center'}}>Available Filters / Restrictions</Text>
      <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems:'stretch'}}>
        <Text style={{flex:1 ,marginRight: 80, textAlign:'center'}}>Gluten-free</Text>
        <View style={{flex:1, alignItems:'center'}}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isGlutenFree ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange = {onTogleSwitch1}
            value={isGlutenFree}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems:'stretch'}}>
        <Text style={{flex:1 ,marginRight: 80, textAlign:'center'}}>Lactose-free</Text>
        <View style={{flex:1, alignItems:'center'}}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isLactoseFree ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange = {onTogleSwitch2}
          value={isLactoseFree}
        />
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems:'stretch'}}>
        <Text style={{flex:1 ,marginRight: 80, textAlign:'center'}}> Vegan</Text>
        <View style={{flex:1, alignItems:'center'}}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isVegan ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange = {onTogleSwitch3}
          value={isVegan}
        />
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems:'stretch'}}>
        <Text style={{flex:1 ,marginRight: 80, textAlign:'center'}}>Vegetarian</Text>
        <View style={{flex:1, alignItems:'center'}}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isVegetarian ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange = {onTogleSwitch4}
          value={isVegetarian}
        />
        </View>
      </View>
    </View>
  );
};
FiltersScreen.navigationOptions  = (navigationData) =>{
    return {
      headerTitle: 'Filter Meals',
      headerLeft: () =>{
        return(
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>            
          <Item
              title="Menu"
              iconName="ios-list"
              onPress={() => {
              navigationData.navigation.toggleDrawer();
              }}
              />
          </HeaderButtons>
        )
      }
    }
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 20
  },
  title: {
    fontSize: 18,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});

export default FiltersScreen;

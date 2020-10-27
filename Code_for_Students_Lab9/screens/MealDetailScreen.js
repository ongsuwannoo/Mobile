import React from "react";
import { View, Text, Button, StyleSheet, ScrollView, Image} from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงอ็อบเจ๊คเมนูอาหารที่ผู้ใช้เลือกเอาไว้

  const MealId = props.navigation.getParam('MealId')
  const selectedMeal = MEALS.find((cat) => cat.id === MealId);

  console.log(selectedMeal)
  return (
    <View>
      <ScrollView>
        <View>
          <Image source={{uri: selectedMeal.imageUrl}}  style={{width: '100%', height: 400}}/>
        </View>
        <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center', marginTop: 20}}>
          <Text style={{textAlign:'center', marginRight: 20}}>{selectedMeal.duration} m</Text>
          <Text style={{textAlign:'center', marginRight: 20}}>{selectedMeal.complexity}</Text>
          <Text style={{textAlign:'center', marginRight: 20}}>{selectedMeal.affordability}</Text>
        </View>
        <View>
          <Text style={{textAlign:'center', fontWeight:'bold', marginTop:20}}>Ingredients</Text>
        </View>
        {/* <Text>{selectedMeal.title}</Text>
        <Text>{selectedMeal.steps}</Text> */}
        <View style={{textAlign:'center', fontWeight:'bold', marginTop:20, marginLeft: 20}}>
          {selectedMeal.ingredients.map((it, index) => (<Text>{it}</Text>))}
        </View>
        <View>
        <Text style={{textAlign:'center', fontWeight:'bold', marginTop:20}}>Step</Text>
        <View style={{textAlign:'center', fontWeight:'bold', marginTop:20, marginLeft: 20}}>
          {selectedMeal.steps.map((it, index) => (<Text>{it}</Text>))}
        </View>
        </View>
        <Button
          title="Go Back to Categories"
          onPress={() => {
            props.navigation.navigate('Categories')
          }}
        />
      </ScrollView>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const MealId = navigationData.navigation.getParam('MealId')
  const selectedMeal = MEALS.find((cat) => cat.id === MealId);
  return {
    headerTitle: selectedMeal.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;

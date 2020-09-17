import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
   const goToViewBoxes = () => {
      Actions.ViewBoxes()
   }, 
   goToBoldAndBeautiful = () => {
      Actions.BoldAndBeautiful()
   },
   goToTextInput = () => {
      Actions.TextInput()
   },
   goToScrollView = () => {
      Actions.ScrollView()
   },
   goToStyleSheet = () => {
      Actions.StyleSheet()
   },
   goToflex = () => {
      Actions.flex()
   },
   goTohairline = () => {
      Actions.hairline()
   }
   return (
      <View style={{marginLeft: 50 }}>
         <TouchableOpacity style={{ marginTop: 20}} onPress={goToViewBoxes}>
            <Text>Go to ViewBoxes</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{ marginTop: 20}} onPress={goToBoldAndBeautiful}>
            <Text>Go to BoldAndBeautiful</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{ marginTop: 20}} onPress={goToTextInput}>
            <Text>Go to TextInput</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{ marginTop: 20}} onPress={goToScrollView}>
            <Text>Go to ScrollView</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{ marginTop: 20}} onPress={goToStyleSheet}>
            <Text>Go to StyleSheet</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{ marginTop: 20}} onPress={goToflex}>
            <Text>Go to Flex</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{ marginTop: 20}} onPress={goTohairline}>
            <Text>Go to Hairline</Text>
         </TouchableOpacity>
      </View>
   )
}
export default Home
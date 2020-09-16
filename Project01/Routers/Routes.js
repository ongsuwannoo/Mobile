import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import ViewBoxes from './ViewBoxes'
import BoldAndBeautiful from './BoldAndBeautiful'
import TextInput from './TextInput'
import ScrollView from './ScrollView'
import StyleSheet from './StyleSheet'
import flex from './flex'
import hairline from "./hairline";

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home" initial = {true} />
         <Scene key = "ViewBoxes" component = {ViewBoxes} title = "ViewBoxes" />
         <Scene key = "BoldAndBeautiful" component = {BoldAndBeautiful} title = "BoldAndBeautiful" />
         <Scene key = "TextInput" component = {TextInput} title = "TextInput" />
         <Scene key = "ScrollView" component = {ScrollView} title = "ScrollView" />
         <Scene key = "StyleSheet" component = {StyleSheet} title = "StyleSheet" />
         <Scene key = "flex" component = {flex} title = "flex" />
         <Scene key = "hairline" component = {hairline} title = "hairline" />
      </Scene>
   </Router>
)
export default Routes
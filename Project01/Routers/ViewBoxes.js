import React from "react";
import { View, Text } from "react-native";

const ViewBoxesWithColorAndText = () => {
  return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          height: 5,
          padding: 40,
          borderColor: "red",
          borderWidth: 1
        }}
      >
        <View style={{ backgroundColor: "blue", flex: 0.3 }} />
        <View style={{ backgroundColor: "orange", flex: 0.5 }} />
        <Text style={{ backgroundColor: "green" }}>Hello World!</Text>
      </View>
  );
};

export default ViewBoxesWithColorAndText;

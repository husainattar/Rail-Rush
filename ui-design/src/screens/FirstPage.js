import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Image } from "react-native";

export default class FirstPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar animated={false} barStyle="dark-content" hidden={false} />
        <Text style={styles.text}>Rail Rush</Text>
        <Image
          source={require("../assets/images/image_CC5w.1.png")}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 1
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    fontFamily: "roboto-regular",
    marginTop: 198,
    alignSelf: "center"
  },
  image: {
    width: 240,
    height: 224,
    marginTop: 32,
    marginLeft: 60
  }
});

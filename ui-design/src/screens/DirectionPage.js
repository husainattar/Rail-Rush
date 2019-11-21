import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Image } from "react-native";
import MaterialButtonDark from "../components/MaterialButtonDark";
import MaterialButtonDark1 from "../components/MaterialButtonDark1";

export default class DirectionPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar animated={false} barStyle="dark-content" hidden={false} />
        <Text style={styles.text}>Select Direction</Text>
        <View style={styles.materialButtonDarkStackStack}>
          <View style={styles.materialButtonDarkStack}>
            <MaterialButtonDark style={styles.materialButtonDark} />
            <Image
              source={require("../assets/images/Capture.PNG")}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <MaterialButtonDark1 style={styles.materialButtonDark1} />
        </View>
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
    color: "#ffffff",
    fontSize: 40,
    fontFamily: "roboto-regular",
    marginTop: 53,
    marginLeft: 40
  },
  materialButtonDark: {
    top: 0,
    left: 24,
    width: 150,
    height: 50,
    position: "absolute"
  },
  image: {
    top: 50,
    left: 0,
    width: 200,
    height: 321,
    position: "absolute"
  },
  materialButtonDarkStack: {
    top: 0,
    left: 0,
    width: 200,
    height: 371,
    position: "absolute"
  },
  materialButtonDark1: {
    top: 371,
    left: 24,
    width: 150,
    height: 50,
    position: "absolute"
  },
  materialButtonDarkStackStack: {
    width: 200,
    height: 421,
    marginTop: 68,
    marginLeft: 80
  }
});

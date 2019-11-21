import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import MaterialButtonGrey1 from "../components/MaterialButtonGrey1";

export default class Untitled2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Text style={styles.text}>Lorem Ipsum</Text>
        <View style={styles.materialButtonGrey1Stack}>
          <MaterialButtonGrey1 style={styles.materialButtonGrey1} />
          <MaterialButtonGrey1 style={styles.materialButtonGrey12} />
          <MaterialButtonGrey1 style={styles.materialButtonGrey13} />
          <MaterialButtonGrey1 style={styles.materialButtonGrey14} />
          <MaterialButtonGrey1 style={styles.materialButtonGrey15} />
          <MaterialButtonGrey1 style={styles.materialButtonGrey16} />
          <MaterialButtonGrey1 style={styles.materialButtonGrey17} />
          <MaterialButtonGrey1 style={styles.materialButtonGrey18} />
          <MaterialButtonGrey1 style={styles.materialButtonGrey19} />
          <MaterialButtonGrey1 style={styles.materialButtonGrey110} />
          <MaterialButtonGrey1 style={styles.materialButtonGrey111} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: "#121212",
    fontSize: 8,
    fontFamily: "roboto-regular",
    marginTop: 66,
    marginLeft: 157
  },
  materialButtonGrey1: {
    top: 540,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey12: {
    top: 480,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey13: {
    top: 420,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey14: {
    top: 360,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey15: {
    top: 300,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey16: {
    top: 240,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey17: {
    top: 180,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey18: {
    top: 120,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey19: {
    top: 60,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey110: {
    top: 0,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey111: {
    top: 540,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey1Stack: {
    width: 360,
    height: 600,
    marginTop: 73
  }
});

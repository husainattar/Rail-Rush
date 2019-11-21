import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import CupertinoHeaderWithBackground3 from "../components/CupertinoHeaderWithBackground3";
import MaterialButtonGrey2 from "../components/MaterialButtonGrey2";

export default class Untitled1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <CupertinoHeaderWithBackground3
          style={styles.cupertinoHeaderWithBackground3}
        />
        <View style={styles.materialButtonGrey2StackStackStack}>
          <View style={styles.materialButtonGrey2StackStack}>
            <View style={styles.materialButtonGrey2Stack}>
              <MaterialButtonGrey2 style={styles.materialButtonGrey2} />
              <MaterialButtonGrey2 style={styles.materialButtonGrey26} />
            </View>
            <View style={styles.materialButtonGrey25Stack}>
              <MaterialButtonGrey2 style={styles.materialButtonGrey25} />
              <MaterialButtonGrey2 style={styles.materialButtonGrey27} />
            </View>
          </View>
          <View style={styles.materialButtonGrey22Stack}>
            <MaterialButtonGrey2 style={styles.materialButtonGrey22} />
            <MaterialButtonGrey2 style={styles.materialButtonGrey23} />
            <MaterialButtonGrey2 style={styles.materialButtonGrey24} />
            <MaterialButtonGrey2 style={styles.materialButtonGrey28} />
            <MaterialButtonGrey2 style={styles.materialButtonGrey29} />
            <MaterialButtonGrey2 style={styles.materialButtonGrey210} />
            <Text style={styles.text}>Station Name</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoHeaderWithBackground3: {
    width: 360,
    height: 44,
    marginTop: 22
  },
  materialButtonGrey2: {
    top: 60,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey26: {
    top: 0,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey2Stack: {
    top: 120,
    left: 0,
    width: 360,
    height: 120,
    position: "absolute"
  },
  materialButtonGrey25: {
    top: 60,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey27: {
    top: 0,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey25Stack: {
    top: 0,
    left: 0,
    width: 360,
    height: 120,
    position: "absolute"
  },
  materialButtonGrey2StackStack: {
    top: 415,
    left: 0,
    width: 360,
    height: 240,
    position: "absolute"
  },
  materialButtonGrey22: {
    top: 55,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute",
    opacity: 1
  },
  materialButtonGrey23: {
    top: 115,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey24: {
    top: 175,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey28: {
    top: 235,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey29: {
    top: 295,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey210: {
    top: 355,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  text: {
    top: 0,
    left: 80,
    width: 360,
    height: 74,
    color: "#121212",
    position: "absolute",
    fontSize: 30,
    fontFamily: "roboto-regular"
  },
  materialButtonGrey22Stack: {
    top: 0,
    left: 0,
    width: 440,
    height: 415,
    position: "absolute"
  },
  materialButtonGrey2StackStackStack: {
    width: 440,
    height: 655,
    marginTop: 19
  }
});

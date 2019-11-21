import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import MaterialButtonGrey2 from "../components/MaterialButtonGrey2";

export default class TrainSelection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <View style={styles.materialButtonGrey2Stack}>
          <MaterialButtonGrey2 style={styles.materialButtonGrey2} />
          <MaterialButtonGrey2 style={styles.materialButtonGrey23} />
          <MaterialButtonGrey2 style={styles.materialButtonGrey24} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialButtonGrey2: {
    top: 0,
    width: 360,
    height: 60,
    position: "absolute",
    left: 0
  },
  materialButtonGrey23: {
    top: 0,
    width: 360,
    height: 60,
    position: "absolute",
    left: 0
  },
  materialButtonGrey24: {
    top: 0,
    width: 360,
    height: 60,
    position: "absolute",
    left: 0
  },
  materialButtonGrey2Stack: {
    width: 360,
    height: 60,
    marginTop: 680
  }
});

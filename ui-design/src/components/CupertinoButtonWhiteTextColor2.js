import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default class CupertinoButtonWhiteTextColor2 extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.container, this.props.style]}>
        <Text style={styles.caption}>Button</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  caption: {
    color: "#fff",
    fontSize: 17
  }
});

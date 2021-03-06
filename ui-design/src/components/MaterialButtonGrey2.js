import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default class MaterialButtonGrey2 extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.container, this.props.style]}>
        <TextInput
          placeholder="Train Name"
          placeholderTextColor="rgba(7,0,0,1)"
          style={styles.textInput}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#999999",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  textInput: {
    width: 76,
    height: 28,
    color: "#000000",
    fontSize: 14,
    lineHeight: 16
  }
});

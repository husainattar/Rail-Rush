import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default class MaterialButtonGrey extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.container, this.props.style]}>
        <TextInput
          placeholder="Station Name"
          placeholderTextColor="rgba(10,0,0,1)"
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
    width: 100,
    height: 32,
    color: "#000000",
    fontSize: 16,
    fontFamily: "arial-regular"
  }
});

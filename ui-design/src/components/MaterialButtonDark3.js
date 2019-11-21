import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default class MaterialButtonDark3 extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.container, this.props.style]}>
        <TextInput
          placeholder="Borivali - Churchgate"
          placeholderTextColor="rgba(230, 230, 230,1)"
          style={styles.textInput}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(230, 230, 230,1)",
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
    width: 92,
    height: 32,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "#fff",
    opacity: 0,
    fontSize: 10,
    lineHeight: 14
  }
});

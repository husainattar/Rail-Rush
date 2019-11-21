import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default class MaterialButtonDark2 extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.container, this.props.style]}>
        <TextInput
          placeholder="Borivali -- Churchgate"
          maxLength={140}
          textBreakStrategy="highQuality"
          style={styles.textInput}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
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
    width: 36,
    height: 28,
    color: "#fff",
    fontSize: 14
  }
});

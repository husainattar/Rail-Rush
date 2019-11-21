import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

export default class CupertinoHeaderWithBackground2 extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.leftWrapper}>
          <TouchableOpacity style={styles.leftIconButton}>
            <IoniconsIcon name="ios-arrow-back" style={styles.leftIcon} />
            <Text style={styles.leftText}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.title}>
            Title
          </Text>
        </View>
        <View style={styles.rightWrapper}>
          <TouchableOpacity style={styles.button}>
            <IoniconsIcon name="ios-add" style={styles.rightIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1EC8FF",
    flexDirection: "row",
    paddingRight: 8,
    paddingLeft: 8
  },
  leftWrapper: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon: {
    color: "#FFFFFF",
    fontSize: 32
  },
  leftText: {
    color: "#FFFFFF",
    alignSelf: "center",
    paddingLeft: 5,
    fontSize: 17
  },
  textWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#000",
    fontSize: 17,
    lineHeight: 17
  },
  rightWrapper: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  button: {},
  rightIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 32
  }
});

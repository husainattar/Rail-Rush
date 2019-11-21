import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  TextInput
} from "react-native";
import CupertinoHeaderWithBackground from "../components/CupertinoHeaderWithBackground";
import MaterialButtonGrey from "../components/MaterialButtonGrey";
import CupertinoHeaderWithBackground1 from "../components/CupertinoHeaderWithBackground1";

export default class Untitled extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <View style={styles.scrollAreaStackStack}>
          <View style={styles.scrollAreaStack}>
            <View style={styles.scrollArea}>
              <ScrollView
                contentContainerStyle={styles.scrollArea_contentContainerStyle}
              >
                <CupertinoHeaderWithBackground
                  style={styles.cupertinoHeaderWithBackground}
                />
                <View style={styles.materialButtonGreyStack}>
                  <MaterialButtonGrey style={styles.materialButtonGrey} />
                  <MaterialButtonGrey style={styles.materialButtonGrey2} />
                  <MaterialButtonGrey style={styles.materialButtonGrey3} />
                  <MaterialButtonGrey style={styles.materialButtonGrey4} />
                  <MaterialButtonGrey style={styles.materialButtonGrey5} />
                  <MaterialButtonGrey style={styles.materialButtonGrey6} />
                  <MaterialButtonGrey style={styles.materialButtonGrey7} />
                  <MaterialButtonGrey style={styles.materialButtonGrey8} />
                  <MaterialButtonGrey style={styles.materialButtonGrey9} />
                  <MaterialButtonGrey style={styles.materialButtonGrey10} />
                </View>
              </ScrollView>
            </View>
            <TextInput
              placeholder="Borivali - Churchgate"
              placeholderTextColor="rgba(11,0,0,1)"
              style={styles.textInput}
            />
          </View>
          <CupertinoHeaderWithBackground1
            style={styles.cupertinoHeaderWithBackground1}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  scrollArea: {
    top: 0,
    left: 0,
    width: 360,
    height: 716,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    borderColor: "#000000",
    borderWidth: 1
  },
  scrollArea_contentContainerStyle: {
    width: 348,
    height: 716
  },
  cupertinoHeaderWithBackground: {
    width: 360,
    height: 44
  },
  materialButtonGrey: {
    top: 0,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey2: {
    top: 60,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey3: {
    top: 120,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey4: {
    top: 180,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey5: {
    top: 240,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey6: {
    top: 300,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey7: {
    top: 360,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey8: {
    top: 420,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey9: {
    top: 480,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGrey10: {
    top: 540,
    left: 0,
    width: 360,
    height: 60,
    position: "absolute"
  },
  materialButtonGreyStack: {
    width: 360,
    height: 600,
    marginTop: 72
  },
  textInput: {
    top: 42,
    left: 60,
    width: 360,
    height: 74,
    color: "rgba(13,1,1,1)",
    position: "absolute",
    fontSize: 25,
    fontFamily: "roboto-regular"
  },
  scrollAreaStack: {
    top: 2,
    left: 0,
    width: 420,
    height: 716,
    position: "absolute"
  },
  cupertinoHeaderWithBackground1: {
    top: 0,
    left: 409,
    width: 355,
    height: 44,
    position: "absolute"
  },
  scrollAreaStackStack: {
    width: 764,
    height: 718,
    marginTop: 22
  }
});

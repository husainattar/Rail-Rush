import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import DirectionPage from "./src/screens/DirectionPage";
import FirstPage from "./src/screens/FirstPage";
import SelectStation from "./src/screens/SelectStation";
import Selstation from "./src/screens/Selstation";
import TrainSelection from "./src/screens/TrainSelection";
import Untitled from "./src/screens/Untitled";
import Untitled1 from "./src/screens/Untitled1";
import Untitled2 from "./src/screens/Untitled2";

const DrawerNavigation = DrawerNavigator({
  DirectionPage: {
    screen: DirectionPage
  },
  FirstPage: {
    screen: FirstPage
  },
  SelectStation: {
    screen: SelectStation
  },
  Selstation: {
    screen: Selstation
  },
  TrainSelection: {
    screen: TrainSelection
  },
  Untitled: {
    screen: Untitled
  },
  Untitled1: {
    screen: Untitled1
  },
  Untitled2: {
    screen: Untitled2
  }
});

const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    DirectionPage: {
      screen: DirectionPage
    },
    FirstPage: {
      screen: FirstPage
    },
    SelectStation: {
      screen: SelectStation
    },
    Selstation: {
      screen: Selstation
    },
    TrainSelection: {
      screen: TrainSelection
    },
    Untitled: {
      screen: Untitled
    },
    Untitled1: {
      screen: Untitled1
    },
    Untitled2: {
      screen: Untitled2
    }
  },
  {
    headerMode: "none"
  }
);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "arial-regular": require("./src/assets/fonts/arial-regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ? <StackNavigation /> : <AppLoading />;
  }
}

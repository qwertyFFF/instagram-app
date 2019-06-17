import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  HeaderBackButton
} from "react-navigation";
import { Image } from "react-native";
import logo from "./assets/logo.png";
import Feed from "./pages/Feed";
import New from "./pages/New";

export default createAppContainer(
  createStackNavigator(
    {
      Feed,
      New
    },
    {
      defaultNavigationOptions: {
        headerTintColor: "#000",
        headerTitle: <Image style={{ marginHorizontal: 130 }} source={logo} />,
        HeaderBackTitle: null
      },
      mode: "modal"
    }
  )
);

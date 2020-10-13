import React from "react";
import { Platform, View, StatusBar } from "react-native";

export default function SaferAreaView({ children }) {
  if (Platform.OS == "ios") {
    return (<SaferAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      {children}
    </SaferAreaView>);
  }
  if (Platform.OS == "android") {
    return (<View style={{flex: 1, backgroundColor: 'black', paddingTop: StatusBar.currentHeight}}>
      {children}
    </View>);
  }
}

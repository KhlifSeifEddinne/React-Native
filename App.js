import React from "react";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import {
  StyleSheet,
  Text,
  Platform,
  Button,
  View,
  Alert,
  StatusBar,
  Image,
  SafeAreaView,
  BackHandler,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function App() {
  const { landscape } = useDeviceOrientation();
  console.log(useDimensions());
  console.log("App executed");
  const handlePress = () => console.log("Text clicked");
  const bow = () => alert("bow");
  let showIt = () => blurRadius(0);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => console.log("View tapped")}>
        <View
          style={{
            backgroundColor: "dodgerblue",
            width: "100%",
            height: landscape ? "100%" : "50%",
          }}
        ></View>
      </TouchableOpacity>
      <Text numberOfLines={1} onPress={handlePress}>
        It works
      </Text>
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.alert("Oups!", "Good! Click me button clicked.", [
            { text: "Yes", onPress: () => console.log("Yes Clicked") },
            { text: "No", onPress: () => console.log("No Clicked") },
          ])
        }
      />
      <TouchableHighlight onPress={() => console.log("image tapped")}>
        <Image
          source={require("./assets/pic.jpg")}
          style={{ width: 400, height: 200 }}
          blurRadius={0}
          fadeDuration={800}
        />
      </TouchableHighlight>
      <Button
        color="red"
        title="Save Me"
        onPress={() =>
          Alert.prompt("Congrats!", "Good! Save me button clicked.", (text) =>
            console.log(text)
          )
        }
      />
    </SafeAreaView>
  );
}
const ss = { backgroundColor: "blue" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "wh",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

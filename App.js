import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  BannerAd,
  TestIds,
  BannerAdSize,
} from "react-native-google-mobile-ads";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

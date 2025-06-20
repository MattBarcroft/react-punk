import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { XmasSoundBoardContainer } from "@/components/XmasSoundBoardContainer";
import { DaftPunkSoundBoardContainer } from "@/components/DaftPunkSoundBoardContainer";
import Slider from "@react-native-community/slider";
import { useMemo, useState } from "react";
import { SpeedContext } from "@/providers/SpeedProvider";

export default function HomeScreen() {
  const [mode, setMode] = useState("XMAS");

  const renderSoundboard = () => {
    if (mode === "XMAS") {
      return <XmasSoundBoardContainer />;
    }
    return <DaftPunkSoundBoardContainer />;
  };
  const loadHeaderImage = () => {
    if (mode === "XMAS") {
      return require("@/assets/images/snowflake.webp");
    }
    return require("@/assets/images/daftPunk.png");
  };
  const loadStyles = () => {
    if (mode === "XMAS") {
      return {
        dark: "#a1fff6",
        light: "#a1fff6",
      };
    }
    return {
      dark: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
      light: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
    };
  };

  const [speed, setSpeed] = useState(1);
  const renderSlider = () => {
    return (
      <View>
        <Text>{`Change Speed: ${speed}`}</Text>
        <Slider
          style={{ width: "90%", height: 40 }}
          minimumValue={0}
          maximumValue={3}
          minimumTrackTintColor="#000000"
          maximumTrackTintColor="#000000"
          onSlidingComplete={(val) => {
            console.log(val);
            setSpeed(val);
          }}
        />
      </View>
    );
  };
  const memoisedSpeedContext = useMemo(
    () => ({
      speed,

      setSpeed,
    }),
    [speed, setSpeed]
  );

  return (
    <SpeedContext.Provider value={memoisedSpeedContext}>
      <ParallaxScrollView
        headerBackgroundColor={loadStyles()}
        headerImage={
          <Image source={loadHeaderImage()} style={styles.reactLogo} />
        }
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">{`Welcome to React Punk`}</ThemedText>
          <HelloWave />
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          {renderSoundboard()}
        </ThemedView>
        <Pressable
          onPress={() => {
            if (mode === "XMAS") {
              setMode("DAFT_PUNK");
            } else {
              setMode("XMAS");
            }
          }}
        >
          {renderSlider()}
          <Text style={styles.changeMode}>{"Change Mode"}</Text>
        </Pressable>
      </ParallaxScrollView>
    </SpeedContext.Provider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 250,
    margin: "auto",
    position: "relative",
  },
  changeMode: {
    color: "blue",
    textAlign: "center",
  },
});

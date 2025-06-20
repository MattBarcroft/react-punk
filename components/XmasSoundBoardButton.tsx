import { Pressable, Text, type TextProps, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import { useContext, useEffect, useState } from "react";
import { SpeedContext } from "@/providers/SpeedProvider";

export type SoundBoardButtonProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  text?: string;
  soundFile: number;
};

export function XmasSoundBoardButton({
  style,
  lightColor,
  darkColor,
  type = "default",
  text,
  soundFile,
  ...rest
}: SoundBoardButtonProps) {
  const [noise, setNoise] = useState();
  const files = [
    require(`../assets/sounds/xmas/1.mp3`),
    require(`../assets/sounds/xmas/2.mp3`),
    require(`../assets/sounds/xmas/3.mp3`),
    require(`../assets/sounds/xmas/4.mp3`),
    require(`../assets/sounds/xmas/5.mp3`),
    require(`../assets/sounds/xmas/6.mp3`),
  ];
  const { speed } = useContext(SpeedContext);

  const press = async () => {
    const { sound } = await Audio.Sound.createAsync(files[soundFile]);
    sound.setRateAsync(speed, true);
    setNoise(sound as any);
    console.log("Playing Sound");
    await sound.playAsync();
  };

  useEffect(() => {
    return noise
      ? () => {
          console.log("Unloading Sound");
          (noise as any).unloadAsync();
        }
      : undefined;
  }, [noise]);

  return (
    <Pressable style={styles.default} onPress={() => press()}>
      <Text>{text ?? "Hi"}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  default: {
    backgroundColor: "#74d680",
    alignItems: "center",
    justifyContent: "center",

    margin: 10,
    height: 100,
    width: "25%",
  },
});

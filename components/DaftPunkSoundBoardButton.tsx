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

export function DaftPunkSoundBoardButton({
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
    require(`../assets/sounds/daftPunk/1.wav`),
    require(`../assets/sounds/daftPunk/2.wav`),
    require(`../assets/sounds/daftPunk/3.wav`),
    require(`../assets/sounds/daftPunk/4.wav`),
    require(`../assets/sounds/daftPunk/5.wav`),
    require(`../assets/sounds/daftPunk/6.wav`),
    require(`../assets/sounds/daftPunk/7.wav`),
    require(`../assets/sounds/daftPunk/8.wav`),
    require(`../assets/sounds/daftPunk/9.wav`),
    require(`../assets/sounds/daftPunk/10.wav`),
    require(`../assets/sounds/daftPunk/11.wav`),
    require(`../assets/sounds/daftPunk/12.wav`),
    require(`../assets/sounds/daftPunk/13.wav`),
    require(`../assets/sounds/daftPunk/14.wav`),
    require(`../assets/sounds/daftPunk/15.wav`),
    require(`../assets/sounds/daftPunk/16.wav`),
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
    backgroundColor: "#FF4433",
    alignItems: "center",
    justifyContent: "center",

    margin: 10,
    height: 60,
    width: "18%",
  },
});

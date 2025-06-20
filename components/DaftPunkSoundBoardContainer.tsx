import { type TextProps, StyleSheet, View } from "react-native";
import { DaftPunkSoundBoardButton } from "./DaftPunkSoundBoardButton";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function DaftPunkSoundBoardContainer({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  return (
    <View style={styles.default}>
      <DaftPunkSoundBoardButton text="Work it" soundFile={0} />
      <DaftPunkSoundBoardButton text="Make it" soundFile={1} />
      <DaftPunkSoundBoardButton text="Do it" soundFile={2} />
      <DaftPunkSoundBoardButton text="Makes us" soundFile={3} />
      <DaftPunkSoundBoardButton text="Harder" soundFile={4} />
      <DaftPunkSoundBoardButton text="Better" soundFile={5} />
      <DaftPunkSoundBoardButton text="Faster" soundFile={6} />
      <DaftPunkSoundBoardButton text="Stronger" soundFile={7} />
      <DaftPunkSoundBoardButton text="More than" soundFile={8} />
      <DaftPunkSoundBoardButton text="Hour" soundFile={9} />
      <DaftPunkSoundBoardButton text="Our" soundFile={10} />
      <DaftPunkSoundBoardButton text="Never" soundFile={11} />
      <DaftPunkSoundBoardButton text="Ever" soundFile={12} />
      <DaftPunkSoundBoardButton text="After" soundFile={13} />
      <DaftPunkSoundBoardButton text="Work is" soundFile={14} />
      <DaftPunkSoundBoardButton text="Over" soundFile={15} />
    </View>
  );
}

const styles = StyleSheet.create({
  default: {
    display: "flex",
    flexDirection: "row",
    padding: "2%",
    flexWrap: "wrap",
  },
});

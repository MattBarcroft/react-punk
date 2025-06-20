import { type TextProps, StyleSheet, View } from "react-native";
import { XmasSoundBoardButton } from "./XmasSoundBoardButton";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function XmasSoundBoardContainer({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  return (
    <View style={styles.default}>
      <XmasSoundBoardButton text="Merry Christmas" soundFile={0} />
      <XmasSoundBoardButton text="Last Christmas" soundFile={1} />
      <XmasSoundBoardButton text="Carnival" soundFile={2} />

      <XmasSoundBoardButton text="Ho Ho Ho" soundFile={3} />
      <XmasSoundBoardButton text="Elf" soundFile={4} />
      <XmasSoundBoardButton text="Ding Dong" soundFile={5} />
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

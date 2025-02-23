import { Colors } from "@/constants/Colors";
import { useThemeColors } from "@/hooks/useThemeColors";
import { StyleSheet, Text, TextProps } from "react-native";

const styles = StyleSheet.create({
  body1: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: 400,
  },
  body2: {
    fontSize: 16,
    lineHeight: 16,
  },
  body3: {
    fontSize: 10,
    lineHeight: 16,
  },
  headline: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 12,
    lineHeight: 12,
  },
  subtitle1: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "400",
  },
  subtitle2: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "bold",
  },
  subtitle3: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: "bold",
  },
});

type Props = TextProps & {
  variant: keyof typeof styles;
  color: keyof (typeof Colors)["light"];
};

export function ThemedText({ variant, color, style, ...rest }: Props) {
  const colors = useThemeColors();
  return (
    <Text
      style={[
        styles[variant ?? "body3"],
        { color: colors[color ?? "grayDark"] },
        style,
      ]}
      {...rest}
    />
  );
}

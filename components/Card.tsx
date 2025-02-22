import { Shadows } from "@/constants/Shadows";
import { useThemeColors } from "@/hooks/useThemeColors";
import { View, ViewProps, ViewStyle } from "react-native";

type Props = ViewProps;

export function Card({ style, ...rest }: Props) {
  const colors = useThemeColors();
  return <View style={[style, styles]} {...rest} />;
}

const styles = {
  borderRadius: 8,
  padding: 20,
  ...Shadows.dp2,
} satisfies ViewStyle;

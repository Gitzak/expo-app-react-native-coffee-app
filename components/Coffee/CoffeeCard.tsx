import { Image, StyleSheet, ViewStyle } from "react-native";
import { Card } from "../Card";
import { ThemedText } from "../ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";

type Props = {
  style: ViewStyle;
  id: number;
  name: string;
  image_url: string;
};

export function CoffeeCard({ style, id, name, image_url }: Props) {
  const colors = useThemeColors();
  return (
    <Card style={[style, styles.card, { backgroundColor: colors.grayWhite }]}>
      <ThemedText
        style={{ alignSelf: "flex-end" }}
        variant="caption"
        color="grayDark"
      >
        #{id.toString().padStart(3, "0")}
      </ThemedText>
      <Image source={{ uri: image_url }} width={190} height={190} />
      <ThemedText
        style={{ alignSelf: "flex-start" }}
        variant="subtitle1"
        color="grayDark"
      >
        {name}
      </ThemedText>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
  },
});

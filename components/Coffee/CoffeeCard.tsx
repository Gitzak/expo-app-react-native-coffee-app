import { Image, Pressable, StyleSheet, ViewStyle, View } from "react-native";
import { Card } from "../Card";
import { ThemedText } from "../ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Link } from "expo-router";

type Props = {
  style: ViewStyle;
  id: number;
  name: string;
  image_url: string;
};

export function CoffeeCard({ style, id, name, image_url }: Props) {
  const colors = useThemeColors();
  return (
    <Link href={{ pathname: "/coffee/[id]", params: { id: id } }} asChild>
      <Pressable
        android_ripple={{ color: colors.tint, foreground: true }}
        style={style}
      >
        <Card style={[styles.card, { backgroundColor: colors.grayWhite }]}>
          <View style={styles.flexContainer}>
            <ThemedText
              style={{ alignSelf: "flex-end" }}
              variant="caption"
              color="grayDark"
            >
              #{id.toString().padStart(3, "0")}
            </ThemedText>
            <Image source={{ uri: image_url }} width={190} height={190} />
            <ThemedText
              style={styles.name}
              variant="subtitle1"
              color="grayDark"
            >
              {name}
            </ThemedText>
          </View>
        </Card>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    flexShrink: 1,
    textAlign: "center",
  },
});

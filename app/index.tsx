import { Card } from "@/components/Card";
import { CoffeeCard } from "@/components/Coffee/CoffeeCard";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  const colors = useThemeColors();

  const data = Array.from({ length: 24 }, (_, k) => ({
    id: k + 1,
    name: "Coffee Name",
  }));

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.grayDark }]}
    >
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/cafe.webp")}
          style={styles.image}
        />
        <ThemedText variant="headline" color="tint">
          Coffee Shop
        </ThemedText>
      </View>

      <Card style={[styles.body, { backgroundColor: colors.tint }]}>
        <FlatList
          data={data}
          numColumns={2}
          contentContainerStyle={[styles.gridGap, styles.list]}
          columnWrapperStyle={styles.gridGap}
          renderItem={({ item }) => (
            <CoffeeCard id={item.id} name={item.name} style={{ flex: 1 / 2 }} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    marginVertical: 15,
    marginHorizontal: 15,
  },
  body: {
    flex: 1,
    paddingTop: 25,
  },
  gridGap: {
    gap: 20,
  },
  list: {
    padding: 5,
  },
});

import { Card } from "@/components/Card";
import { CoffeeCard } from "@/components/Coffee/CoffeeCard";
import { ThemedText } from "@/components/ThemedText";
import { useFetchQuery } from "@/hooks/useFetchQuery";
import { useThemeColors } from "@/hooks/useThemeColors";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  const colors = useThemeColors();

  const { data, isFetching } = useFetchQuery("?limit=12");
  const coffeeList = data ?? [];

  // const { data, isFetching, fetchNextPage } = useInfinitFetchQuery("?limit=6");
  // const coffeeList = data?.pages.flatMap((page) => page) ?? [];

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
          data={coffeeList}
          numColumns={2}
          contentContainerStyle={[styles.gridGap, styles.list]}
          columnWrapperStyle={styles.gridGap}
          ListFooterComponent={
            isFetching ? (
              <ActivityIndicator color={colors.grayWhite} size={"large"} />
            ) : null
          }
          // onEndReached={() => fetchNextPage()}
          renderItem={({ item }) => (
            <CoffeeCard
              id={item.id}
              name={item.name}
              image_url={item.image_url}
              style={{ flex: 1 / 2 }}
            />
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

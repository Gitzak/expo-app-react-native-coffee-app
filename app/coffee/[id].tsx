import { useLocalSearchParams, useRouter } from "expo-router";
import { useThemeColors } from "@/hooks/useThemeColors";
import { useFetchQuery } from "@/hooks/useFetchQuery";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Card } from "@/components/Card";
import { Ionicons } from "@expo/vector-icons";

export default function Coffee() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const colors = useThemeColors();

  // Fetch coffee details using useFetchQuery
  const { data, isFetching } = useFetchQuery(`/${id}`);

  if (isFetching) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.grayDark }]}
      >
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={colors.tint} />
        </View>
      </SafeAreaView>
    );
  }

  if (!data || data.length === 0) {
    return (
      <SafeAreaView
        style={[styles.container, { backgroundColor: colors.grayDark }]}
      >
        <ThemedText variant="headline" color="grayWhite">
          Coffee not found!
        </ThemedText>
      </SafeAreaView>
    );
  }

  const coffee = data[0];

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.grayWhite }]}
    >
      <View style={[styles.header, { backgroundColor: colors.tint }]}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color={colors.grayDark} />
        </TouchableOpacity>
        <ThemedText variant="headline" color="grayDark">
          {coffee.name}
        </ThemedText>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.card, { backgroundColor: colors.grayWhite }]}>
          <Image source={{ uri: coffee.image_url }} style={styles.image} />

          <ThemedText
            style={{ marginBottom: 10 }}
            variant="headline"
            color="tint"
          >
            {coffee.name}
          </ThemedText>
          <ThemedText variant="body1" color="grayDark">
            {coffee.description}
          </ThemedText>

          <View style={styles.infoContainer}>
            <ThemedText variant="subtitle1" color="grayDark">
              🌍 Region: {coffee.region}
            </ThemedText>
            <ThemedText variant="subtitle1" color="grayDark">
              📦 Weight: {coffee.weight}g
            </ThemedText>
            <ThemedText variant="subtitle1" color="grayDark">
              🔥 Roast Level: {coffee.roast_level}/5
            </ThemedText>
            <ThemedText variant="subtitle1" color="grayDark">
              💰 Price: ${coffee.price}
            </ThemedText>
          </View>

          <View style={styles.listContainer}>
            <ThemedText
              style={{ marginVertical: 10 }}
              variant="subtitle1"
              color="grayDark"
            >
              Grind Options:
            </ThemedText>
            {coffee.grind_option.map((option, index) => (
              <ThemedText
                style={{ marginVertical: 5 }}
                key={index}
                variant="body2"
                color="grayDark"
              >
                • {option}
              </ThemedText>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  backButton: {
    marginEnd: 8,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  card: {
    flex: 1,
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 10,
    marginBottom: 10,
  },
  infoContainer: {
    marginTop: 15,
    gap: 20,
  },
  listContainer: {
    marginTop: 10,
  },
});

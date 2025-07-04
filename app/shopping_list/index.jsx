import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';

export default function ShoppingListScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Shopping List Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

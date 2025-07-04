import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl">Home Screen</Text>

      <TouchableOpacity
        onPress = {() => router.push('/store')}>
          <Text className="text-2xl font-bold text-blue-600">Open Store</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress = {() => router.push('/shopping_list')}>
          <Text>Open Shopping List</Text>
      </TouchableOpacity>

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

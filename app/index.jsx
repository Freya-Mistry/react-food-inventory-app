import { StatusBar, Text, View } from "react-native";
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl">Home Screen</Text>
      <StatusBar style="auto" />
      <Link href="/store-page" style={{color: 'blue'}}>Go to Stores</Link>
    </View>
  );
}
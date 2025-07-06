import { ScrollView, StatusBar, Text, View } from "react-native";
import { Link } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="#ffffff h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full justify-center items-center h-full px-4">
          <Text className="text-3xl">Stocked</Text>
          <StatusBar style="auto" />
          <Link href="/stores" style={{color: 'blue'}}>Go to Stores</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
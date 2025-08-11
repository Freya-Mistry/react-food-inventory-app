import { StatusBar } from "expo-status-bar";
import { router } from 'expo-router';
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import 'react-native-url-polyfill/auto'

import { CustomButton } from "../components";

export default function App() {
  return (
    <SafeAreaView className="#ffffff h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Text className="text-3xl">Stocked</Text>
          <StatusBar style="auto" />
          <CustomButton 
            title="Continue with Email"
            handlePress={() => {router.push('/sign-in')}}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#ffffff' style='dark'/>
    </SafeAreaView>
  );
}
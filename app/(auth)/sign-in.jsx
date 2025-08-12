import { Link, router } from 'expo-router'
import { useState } from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomButton, FormField } from "../../components"
import { getCurrentUser, signIn } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'

const SignIn = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();
  const [form, setform] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
      if(!form.email || !form.password) {
        Alert.alert('Error', 'Please fill in all the fields')
      }
  
      setIsSubmitting(true);
      
      try{
        await signIn(form.email, form.password)
        const result = await getCurrentUser();
        setUser(result);
        setIsLoggedIn(true);
        
        Alert.alert("Success", "User signed in successfully");
        router.replace('/stores');
      } catch(error) {
        Alert.alert('Error', error.message)
      } finally {
        setIsSubmitting(false)
      }
    }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">

          <Text className="text-3xl text-semibold mt-10 font-semibold">Log in to Stocked</Text>

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setform({...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setform({...form, password: e})}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-blue font-regular">
              Don't have an account?
            </Text>
            <Link href="/sign-up" className='text-lg font-semibold text-black'>Sign Up</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
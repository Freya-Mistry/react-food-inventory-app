import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomButton, FormField } from "../../components"
import { Link } from 'expo-router'
import { createUser } from '../../lib/appwrite'

const SignUp = () => {
  const [form, setform] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if(!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields')
    }

    setIsSubmitting(true);
    
    try{
      const result = await createUser(form.email, form.password, form.username)

      // set to global state later on

      router.replace('/home')
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

          <Text className="text-3xl text-semibold mt-10 font-semibold">Sign up to Stocked</Text>

          <FormField 
            title="Username"
            value={form.username}
            handleChangeText={(e) => setform({...form, username: e})}
            otherStyles="mt-10"
          />

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
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-blue font-regular">
              Have an account already?
            </Text>
            <Link href="/sign-in" className='text-lg font-semibold text-black'>Sign In</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
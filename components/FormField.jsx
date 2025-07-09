import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-secondary font-medium">{title}</Text>

            <View className="border-2 border-[#4580F5] w-full h-16 px-4 bg-white rounded-2xl focus:border-blue items-center">
                <TextInput 
                    className="flex-1 font-semibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#C3C3C3"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                />

                {title === 'Password' && (
                    <TouchableOpacity onPress={() =>
                        setShowPassword(!showPassword)}>

                        </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField;
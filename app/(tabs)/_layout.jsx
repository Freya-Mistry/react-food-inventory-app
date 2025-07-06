import { Tabs } from 'expo-router';
import { Image, View } from 'react-native';

import { icons } from "../../constants";

const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#4580F5",
          tabBarInactiveTintColor: "#C3C3C3",
          tabBarStyle: {
            borderTopWidth: 1,
            height: 75,
          }
        }}
      >
        <Tabs.Screen 
          name="stores"
          options = {{
            title: 'Stores',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.StoreIcon}
                color={color}
                name="StoreIcon"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name="shopping-list"
          options = {{
            title: 'Shopping List',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.ListIcon}
                color={color}
                name="ListIcon"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name="profile"
          options = {{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.ProfileIcon}
                color={color}
                name="Profile-Icon"
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout
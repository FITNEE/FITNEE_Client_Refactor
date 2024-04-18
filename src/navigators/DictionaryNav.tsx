import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@/pages/home/Home'
import Dictionary from '@/pages/dictionary/Dictionary'
import Search from '@/pages/dictionary/Search'
import Info from '@/pages/dictionary/Info'

const Stack = createStackNavigator()

export default function DictionaryNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShown: false,
      }}
    >
      <Stack.Screen name="DictionaryMain" component={Dictionary} />
      <Stack.Screen name="DictionarySearch" component={Search} />
      <Stack.Screen name="DictionaryInfo" component={Info} />
    </Stack.Navigator>
  )
}

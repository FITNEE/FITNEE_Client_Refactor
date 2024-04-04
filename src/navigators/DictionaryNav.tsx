import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@/pages/Home/Home'
import Dictionary from '@/pages/Dictionary/Dictionary'

const Stack = createStackNavigator()

export default function DictionaryNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DictionaryMain" component={Dictionary} />
    </Stack.Navigator>
  )
}

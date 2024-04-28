import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Dictionary from '@/pages/dictionary/Dictionary'

const Stack = createStackNavigator()

export default function DictionaryNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DictionaryMain" component={Dictionary} />
    </Stack.Navigator>
  )
}

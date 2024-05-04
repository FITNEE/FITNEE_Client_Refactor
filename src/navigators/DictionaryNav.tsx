import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Main from '@/pages/dictionary/Dictionary'
import Search from '@/pages/dictionary/Search'
import Info from '@/pages/dictionary/Info'

export type DictionaryNavParams = {
  DictionaryMain: undefined
  DictionarySearch: undefined
  DictionaryInfo: undefined
}

const Stack = createStackNavigator<DictionaryNavParams>()

export default function DictionaryNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShown: false,
      }}
    >
      <Stack.Screen name="DictionaryMain" component={Main} />
      <Stack.Screen name="DictionarySearch" component={Search} />
      <Stack.Screen name="DictionaryInfo" component={Info} />
    </Stack.Navigator>
  )
}

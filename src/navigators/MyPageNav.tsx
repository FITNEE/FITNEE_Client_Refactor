import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@/pages/Home/Home'
import MyPage from '@/pages/MyPage/MyPage'

const Stack = createStackNavigator()

export default function MyPageNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyPageMain" component={MyPage} />
    </Stack.Navigator>
  )
}

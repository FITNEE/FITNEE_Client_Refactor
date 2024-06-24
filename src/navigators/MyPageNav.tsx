import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@/pages/home/Home'
import MyPage from '@/pages/myPage/MyPage'

const Stack = createStackNavigator()

export default function MyPageNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyPageMain" component={MyPage} />
    </Stack.Navigator>
  )
}

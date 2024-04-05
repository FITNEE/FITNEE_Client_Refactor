import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@/pages/home/Home'
import MyRoutine from '@/pages/myRoutine/MyRoutine'

const Stack = createStackNavigator()

export default function MyRoutineNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyRoutineMain" component={MyRoutine} />
    </Stack.Navigator>
  )
}

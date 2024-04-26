import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@/pages/Home/Home'
import MyRoutine from '@/pages/MyRoutine/MyRoutine'

const Stack = createStackNavigator()

export default function MyRoutineNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyRoutineMain" component={MyRoutine} />
    </Stack.Navigator>
  )
}

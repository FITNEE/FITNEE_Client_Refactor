import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@/pages/Home/Home'
import Exercise from '@/pages/Exercise/Exercise'

const Stack = createStackNavigator()

export default function ExerciseNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ExerciseMain" component={Exercise} />
    </Stack.Navigator>
  )
}

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CreateRoutine_1 from '@/pages/CreateRoutine/CreateRoutine'
import HomeNav from './HomeNav'

const Stack = createStackNavigator()

export default function CreateRoutineNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 16,
        },
        animationEnabled: false,
      }}
    >
      <Stack.Screen
        name="CreateRoutine_1"
        options={{
          headerShown: false,
        }}
        component={CreateRoutine_1}
      />
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={HomeNav}
      />
    </Stack.Navigator>
  )
}

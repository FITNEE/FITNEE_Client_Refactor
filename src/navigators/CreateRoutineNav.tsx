import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CreateRoutine from '@/pages/CreateRoutine/CreateRoutine'
import HomeNav from './HomeNav'
import Result from '@/pages/CreateRoutine/Result'

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
        name="CreateRoutine"
        options={{
          headerShown: false,
        }}
        component={CreateRoutine}
      />
      <Stack.Screen
        name="Result"
        options={{
          headerShown: false,
        }}
        component={Result}
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

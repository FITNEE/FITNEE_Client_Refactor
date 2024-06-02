import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CreateRoutine from '@/pages/createRoutine/CreateRoutine'
import HomeNav from './HomeNav'
import Loading from '@/pages/createRoutine/Loading'
import Result from '@/pages/createRoutine/Result'
import Error from '@/pages/createRoutine/Error'

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
        gestureEnabled: false,
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
        name="Loading"
        options={{
          headerShown: false,
        }}
        component={Loading}
      />
      <Stack.Screen
        name="Result"
        options={{
          headerShown: false,
        }}
        component={Result}
      />
      <Stack.Screen
        name="Error"
        options={{
          headerShown: false,
        }}
        component={Error}
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

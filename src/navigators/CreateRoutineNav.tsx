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
        headerShown: false,
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
      <Stack.Screen name="CreateRoutine" component={CreateRoutine} />
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="Error" component={Error} />
      <Stack.Screen name="Home" component={HomeNav} />
    </Stack.Navigator>
  )
}

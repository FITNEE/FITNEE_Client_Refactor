import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import InputEmail from '@/pages/onBoarding/InputEmail'

export type OnBoardingNavParams = {
  OnBoardingInputEmail: undefined
}

const Stack = createStackNavigator<OnBoardingNavParams>()

export default function OnBoardingNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShown: false,
      }}
    >
      <Stack.Screen name="OnBoardingInputEmail" component={InputEmail} />
    </Stack.Navigator>
  )
}

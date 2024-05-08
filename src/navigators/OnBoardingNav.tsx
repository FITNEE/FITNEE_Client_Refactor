import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import InputEmail from '@/pages/onBoarding/InputEmail'
import InputPassword from '@/pages/onBoarding/InputPassword'

export type OnBoardingNavParams = {
  OnBoardingInputEmail: undefined
  OnBoardingInputPassword: { createAccount: boolean }
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
      <Stack.Screen name="OnBoardingInputPassword" component={InputPassword} />
    </Stack.Navigator>
  )
}

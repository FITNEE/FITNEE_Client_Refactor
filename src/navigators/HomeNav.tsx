import CreateRoutineNav from './CreateRoutineNav'
import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@/pages/home/Home'
import { isTabVisibleAtom } from '@/states/GlobalStates'
import { useAtom } from 'jotai'

const Stack = createStackNavigator()

export default function HomeNav() {
  const [, setIsTabVisible] = useAtom(isTabVisibleAtom)

  useEffect(() => {
    setIsTabVisible(true)
  }, [setIsTabVisible])

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreateRoutine" component={CreateRoutineNav} />
    </Stack.Navigator>
  )
}

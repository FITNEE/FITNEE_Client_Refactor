import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@/pages/Home/Home'
import { isTabVisibleAtom } from '@/states/GlobalStates'
import { useAtom } from 'jotai'

const Stack = createStackNavigator()

export default function HomeNav() {
  const [, setIsTabVisible] = useAtom(isTabVisibleAtom)

  useEffect(() => {
    setIsTabVisible(true)
  }, [setIsTabVisible])

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

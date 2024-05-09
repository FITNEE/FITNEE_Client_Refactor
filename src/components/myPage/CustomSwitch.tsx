import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text, View, TouchableOpacity, Animated, Easing } from 'react-native'
import { colors } from '@/libs/Colors'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { useAtom } from 'jotai'

const CustomSwitch = () => {
  const [isDark, setIsDark] = useAtom(isDarkModeAtom)

  const [animatedValue] = useState(new Animated.Value(isDark ? 0 : 28))

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isDark ? 28 : 0,
      duration: 150,
      easing: Easing.linear,
      delay: 0,
      useNativeDriver: true,
    }).start()
  }, [isDark, animatedValue])

  const updatedSwitchData = async () => {
    setIsDark(!isDark)
    const darkMode = !isDark
    await AsyncStorage.removeItem('darkMode')
    if (darkMode) {
      await AsyncStorage.setItem('darkMode', JSON.stringify(true))
    } else {
      await AsyncStorage.setItem('darkMode', JSON.stringify(false))
    }
  }

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => updatedSwitchData()}>
      <View
        style={{
          height: 36,
          width: 64,
          backgroundColor: isDark ? colors.main1 : colors.grey2,
          borderRadius: 1000,
          flexDirection: 'row',
          padding: 4,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => updatedSwitchData()}
          style={{
            backgroundColor: isDark ? colors.grey9 : colors.white,
            width: 28,
            height: 28,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            transform: [
              {
                translateX: animatedValue,
              },
            ],
          }}
        >
          <Text
            style={{
              color: isDark ? colors.white : colors.black,
              fontSize: 11,
              fontFamily: 'SemiBold',
              lineHeight: 16.5,
            }}
          >
            {isDark ? 'ON' : 'OFF'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
export default CustomSwitch

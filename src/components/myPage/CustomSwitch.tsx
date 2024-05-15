import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Text, View, TouchableOpacity, Animated, Easing } from 'react-native'
import { colors } from '@/libs/Colors'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { useAtom } from 'jotai'
import styled from 'styled-components/native'

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
    <SwitchWrapper onPress={() => updatedSwitchData()}>
      <SwitchRegion isDark={isDark}>
        <ButtonWrapper animatedValue={animatedValue} onPress={() => updatedSwitchData()}>
          <ButtonText>{isDark ? 'ON' : 'OFF'}</ButtonText>
        </ButtonWrapper>
      </SwitchRegion>
    </SwitchWrapper>
  )
}
export default CustomSwitch

const SwitchWrapper = styled.TouchableOpacity`
  opacity: 0.5;
`
const SwitchRegion = styled.View`
  width: 64px;
  height: 36px;
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.main1 : colors.grey2)};
  border-radius: 1000px;
  flex-direction: row;
  padding: 4px;
`
const ButtonWrapper = styled.TouchableOpacity`
  opacity: 0.5;
  background-color: ${colors.grey9};
  width: 28px;
  height: 28px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  transform: translateX(${(props: { animatedValue: Animated.Value }) => props.animatedValue});
`
const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 11px;
  font-family: SemiBold;
  line-height: 16.5px;
`

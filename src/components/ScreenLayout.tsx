import styled from 'styled-components/native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useAtom } from 'jotai'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { colors } from '@/libs/Colors'

interface ScreenLayoutProps {
  children: React.ReactNode
  lightBack?: string
  darkBack?: string
}

/**
 * ScreenLayout 은 화면에 SafeAreaView & StatusBar을 설정하기 위해 개발된 컴포넌트입니다
 * @props children - 화면에 넣을 ReactNode
 * @example
 * <ScreenLayout>
 *  <View>
 *    <Text>hello</Text>
 *  </View>
 * </ScreenLayout>
 */

export default function ScreenLayout({
  children,
  lightBack = colors.white,
  darkBack = colors.black,
}: ScreenLayoutProps) {
  const [isDark] = useAtom(isDarkModeAtom)

  return (
    <ScreenContainer style={{ backgroundColor: isDark ? darkBack : lightBack }}>
      <StatusBar backgroundColor={isDark ? colors.black : colors.white} />
      {children}
    </ScreenContainer>
  )
}

const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
`

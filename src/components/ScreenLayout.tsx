import styled from 'styled-components/native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useAtom } from 'jotai'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { colors } from '@/libs/Colors'

interface ScreenLayoutProps {
  children: React.ReactNode
}

export default function ScreenLayout({ children }: ScreenLayoutProps) {
  const [isDark] = useAtom(isDarkModeAtom)

  return (
    <ScreenContainer>
      <StatusBar backgroundColor={isDark ? colors.black : colors.white} />
      {children}
    </ScreenContainer>
  )
}

export const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
`

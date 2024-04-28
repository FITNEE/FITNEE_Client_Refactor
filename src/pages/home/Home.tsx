import ScreenLayout from '@/components/home/ScreenLayout'
import Logo from '@/assets/images/SVGs/icon/Logo.svg'
import { useAtom, useSetAtom } from 'jotai'
import { isDarkModeAtom, isTabVisibleAtom } from '@/states/GlobalStates'
import { colors } from '@/libs/Colors'
import styled from 'styled-components/native'
import { useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import Routine from './Routine'
import EmptyRoutine from './EmptyRoutine'

export default function Home() {
  const isFocus = useIsFocused()
  const setTabVisible = useSetAtom(isTabVisibleAtom)
  useEffect(() => {
    isFocus && setTabVisible(true)
  }, [isFocus])
  const [isDark] = useAtom(isDarkModeAtom)
  return (
    <ScreenLayout>
      <LogoWrapper>
        <Logo width={88} height={28} color={isDark ? colors.white : colors.black} />
      </LogoWrapper>
      {false ? <Routine /> : <EmptyRoutine />}
    </ScreenLayout>
  )
}

const LogoWrapper = styled.View`
  padding: 10px 24px;
`

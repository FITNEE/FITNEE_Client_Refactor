import ProgressBar from '@/components/CreateRoutine/ProgressBar'
import { isDarkModeAtom, isTabVisibleAtom } from '@/states/GlobalStates'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useAtom, useSetAtom } from 'jotai'
import { useEffect, useState } from 'react'
import ScreenLayout from '@/components/home/ScreenLayout'
import LeftArrow from '@/assets/images/SVGs/icon/LeftArrow.svg'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import { NavigationProps } from '../home/EmptyRoutine'
import CreateRoutine1 from '@/components/CreateRoutine/CreateRoutine1'
import CreateRoutine2 from '@/components/CreateRoutine/CreateRoutine2'
import CreateRoutine3 from '@/components/CreateRoutine/CreateRoutine3'
import CreateRoutine4 from '@/components/CreateRoutine/CreateRoutine4'

export interface ActiveProps {
  isDark: boolean
  isActive: boolean
}

export default function CreateRoutine_1() {
  const isFocus = useIsFocused()
  const [isDark] = useAtom(isDarkModeAtom)
  const setTabVisible = useSetAtom(isTabVisibleAtom)
  const navigation = useNavigation<NavigationProps>()
  const [progress, setProgress] = useState(20)
  const handleButtonClick = () => {
    if (progress < 100) {
      setProgress(progress + 20)
    }
  }
  const handleButtonBack = () => {
    if (progress === 20) {
      navigation.goBack()
    } else if (progress > 20) {
      setProgress(progress - 20)
    }
  }
  useEffect(() => {
    isFocus && setTabVisible(false)
  }, [isFocus])
  return (
    <ScreenLayout>
      <Header>
        <BackButton onPress={handleButtonBack}>
          <LeftArrow width={24} height={24} color={isDark ? colors.white : colors.black} />
        </BackButton>
        <Title>루틴 생성</Title>
      </Header>
      <ProgressBar progress={progress} />
      <Content>
        {progress === 20 && <CreateRoutine1 next={handleButtonClick} />}
        {progress === 40 && <CreateRoutine2 next={handleButtonClick} />}
        {progress === 60 && <CreateRoutine3 next={handleButtonClick} />}
        {progress >= 80 && <CreateRoutine4 next={handleButtonClick} />}
      </Content>
    </ScreenLayout>
  )
}
const Header = styled.View<{ isDark: boolean }>`
  flex-direction: row;
  width: 100%;
  height: 56px;
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.black : colors.grey1)};
  align-items: center;
  justify-content: center;
  padding: 10px;
`
const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 5%;
`
const Title = styled.Text<{ isDark: boolean }>`
  font-family: 'SemiBold';
  font-size: 17px;
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
`
const Content = styled.View`
  padding: 0 24px;
`

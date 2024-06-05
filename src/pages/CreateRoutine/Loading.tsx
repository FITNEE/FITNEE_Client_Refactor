import { Animated } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import { useAtom } from 'jotai'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '@/pages/home/EmptyRoutine'
import ScreenLayout from '@/components/home/ScreenLayout'
import LeftArrow from '@/assets/images/SVGs/icon/LeftArrow.svg'
import { useEffect, useState } from 'react'

export default function Loading() {
  const [isDark] = useAtom(isDarkModeAtom)
  const navigation = useNavigation<NavigationProps>()
  const handleButtonBack = () => navigation.goBack()
  const goToResult = () => navigation.navigate('Result')
  const [opacity] = useState(new Animated.Value(0))
  const LoadingTexts = [
    '트레이닝 루틴을 생성 중입니다',
    '루틴 생성에는 1-2분 정도가 소요됩니다',
    '생성 도중 화면을 나가면 오류가 생길 수 있습니다',
  ]
  const [loadingTextIndex, setLoadingTextIndex] = useState(0)
  const [loadingText, setLoadingText] = useState(LoadingTexts[0])
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ).start()
    setTimeout(goToResult, 2000)

    const interval = setInterval(() => {
      setLoadingTextIndex(prevIndex => (prevIndex + 1) % LoadingTexts.length)
    }, 8000)

    return () => {
      clearInterval(interval) // 컴포넌트가 언마운트될 때 인터벌 정리
    }
  }, [])
  useEffect(() => {
    setLoadingText(LoadingTexts[loadingTextIndex])
  }, [loadingTextIndex])

  return (
    <ScreenLayout>
      <LoadingContainer isDark={isDark}>
        <LoadingImage isDark={isDark} source={require('@/assets/images/GIFs/creatingRoutine.gif')} />
        <Animated.Text style={{ opacity, color: isDark ? colors.white : colors.black }}>{loadingText}</Animated.Text>
      </LoadingContainer>
    </ScreenLayout>
  )
}
const LoadingContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.black : colors.grey1)};
`

const LoadingImage = styled.Image`
  width: 306px;
  height: 306px;
  border-radius: 153px;
  margin-bottom: 24px;
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey9 : colors.white)};
`

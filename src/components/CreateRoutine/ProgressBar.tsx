import { colors } from '@/libs/Colors'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { useAtom } from 'jotai'
import { useEffect, useRef, useState } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '@/pages/home/EmptyRoutine'

interface ProgressProps {
  progress: number
}

export default function ProgressBar({ progress }: ProgressProps) {
  const [isDark] = useAtom(isDarkModeAtom)
  //   const [progress, setProgress] = useState(0);
  const navigation = useNavigation<NavigationProps>()
  const animatedWidth = useRef(new Animated.Value(0)).current
  const goToResult = () => navigation.navigate('Result')
  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start()
    if (progress === 100) {
      setTimeout(goToResult, 470)
    }
  }, [progress])
  //   const handleButtonClick = () => {
  //     if (progress < 100) {
  //       setProgress(progress + 25);
  //     }
  //   };
  //   const handleButtonBack = () => {
  //     if (progress > 0) {
  //       setProgress(progress - 25);
  //     }
  //   };
  return (
    <Container>
      <Progress_Bar>
        <ProgressBarFill
          style={{
            width: animatedWidth.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
          }}
        />
      </Progress_Bar>
      {/* <Text>ProgressBar {progress}%</Text>
      <Button title="progress" onPress={handleButtonClick} />
      <Button title="backProgress" onPress={handleButtonBack} /> */}
    </Container>
  )
}
const Container = styled.View`
  padding: 0 24px;
  height: 16px;
  justify-content: center;
  align-items: center;
`
const Progress_Bar = styled.View<{ isDark: boolean }>`
  width: 100%;
  height: 8px;
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey9 : colors.grey2)};
  border-radius: 10px;
  overflow: hidden;
`
const ProgressBarFill = styled(Animated.View)<{ isDark: boolean }>`
  height: 100%;
  border-radius: 10px;
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey8 : colors.grey4)};
`
const Button = styled.Button``

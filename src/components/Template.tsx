import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import { useAtom } from 'jotai'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '@/pages/home/EmptyRoutine'
import { ActiveProps } from '@/pages/CreateRoutine/CreateRoutine'

/** 파일을 빨리 만들기 위한 템플릿 파일 입니다
 * 스타일드 컴포넌트
 * 컬러
 * 다크모드
 * 내비게이션
 * 활성상태
 * **/

export default function Template() {
  const [isDark] = useAtom(isDarkModeAtom)
  const navigation = useNavigation<NavigationProps>()
  return (
    <View>
      <Text>Template</Text>
    </View>
  )
}
const Template1 = styled.View<{ isDark: boolean }>`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
`

const Template2 = styled.View<ActiveProps>`
  color: ${(props: ActiveProps) => (props.isActive ? colors.main1 : props.isDark ? colors.white : colors.black)};
`

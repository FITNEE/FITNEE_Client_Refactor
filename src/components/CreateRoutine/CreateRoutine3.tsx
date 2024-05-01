import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import { useAtom } from 'jotai'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { ActiveProps } from '@/pages/CreateRoutine/CreateRoutine_1'
import { NextProps } from './CreateRoutine1'

export default function CreateRoutine3({ next }: NextProps) {
  const [isDark] = useAtom(isDarkModeAtom)
  return (
    <View>
      <Text>CreateRoutine3</Text>
    </View>
  )
}
const Template1 = styled.View<{ isDark: boolean }>`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
`

const Template2 = styled.View<ActiveProps>`
  color: ${(props: ActiveProps) => (props.isActive ? colors.main1 : props.isDark ? colors.white : colors.black)};
`

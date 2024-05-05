import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import { useAtom } from 'jotai'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '@/pages/home/EmptyRoutine'
import { ActiveProps } from '@/pages/CreateRoutine/CreateRoutine'
import { ScreenWidth } from '@/pages/home/Routine'
import DayRoutine from './DayRoutine'

export default function RoutineResult() {
  const [isDark] = useAtom(isDarkModeAtom)
  const navigation = useNavigation<NavigationProps>()
  return (
    <ItemConteiner
      style={{
        borderColor: isDark ? `${colors.grey8}` : `${colors.grey3}`,
      }}
    >
      <RoutineTitleContainer isDark={isDark}>
        <RoutineTitle isDark={isDark}>전신 근력 및 기초 체력</RoutineTitle>
      </RoutineTitleContainer>
      <DayRoutine />
    </ItemConteiner>
  )
}
const RoutineTitleContainer = styled.View`
  position: absolute;
  width: 160px;
  height: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.grey7};
  border-radius: 100px;
  top: -15px;
  left: ${ScreenWidth * 0.43 - 80}px;
  z-index: 1;
`
const RoutineTitle = styled.Text`
  font-size: 13px;
  font-family: 'Regular';
  color: ${colors.white};
`
const ItemConteiner = styled.View`
  /* width: 107%; */
  /* height: 408px; */
  max-height: 408px;
  border: 1px;
  border-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey8 : colors.grey3)};
  border-radius: 20px;
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey9 : colors.white)};
  margin-top: 41px;
  padding: 22px 0px 5px 0px;
  align-items: center;
`

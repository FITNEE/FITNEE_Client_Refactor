import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'

interface ExerciseProps {
  exercise_name: string
  children: Element
  isDark: boolean
}

export default function ExerciseCard({ exercise_name, children, isDark }: ExerciseProps) {
  return (
    <Container isDark={isDark}>
      <ExerciseName isDark={isDark}>{exercise_name}</ExerciseName>
      {children}
    </Container>
  )
}

const ExerciseName = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
  text-align: center;
  font-size: 20px;
  font-family: Pretendard-SemiBold;
  line-height: 32px;
  width: 327px;
  margin: 16px 24px 32px 24px;
`

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-right: 24px;
  padding-left: 24px;
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey9 : colors.grey2)};
`

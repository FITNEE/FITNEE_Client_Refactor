import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import Check_disabled from '../../assets/SVGs/Check_Disabled.svg'

interface BlurProps {
  set: number
  num: number
  kg: number
  isDark: boolean
  run: boolean
}

export default function BlurSet({ set, kg, num, isDark, run }: BlurProps) {
  return (
    <Container isDark={isDark}>
      <Box1>
        <CurrentText isDark={isDark}>{set}</CurrentText>
        <CurrentUnit isDark={isDark}>세트</CurrentUnit>
      </Box1>

      <Box2>
        {kg !== null ? (
          <>
            <CurrentText isDark={isDark}>{run ? null : kg}</CurrentText>
            <CurrentUnit isDark={isDark}>{run ? null : 'kg'}</CurrentUnit>
          </>
        ) : run ? null : (
          <CurrentText2 isDark={isDark}>빈 봉</CurrentText2>
        )}
      </Box2>

      <Box3>
        <CurrentText isDark={isDark}>{run ? num * 100 : num}</CurrentText>
        <CurrentUnit isDark={isDark}>{run ? 'm' : '회'}</CurrentUnit>
      </Box3>

      <Check_disabled width={24} height={24} />
    </Container>
  )
}

const Box1 = styled.View`
  width: 130px;
  flex-direction: row;
  align-items: baseline;
  height: 25px;
`
const Box2 = styled.View`
  width: 80px;
  flex-direction: row;
  align-items: baseline;
  height: 25px;
`

const Box3 = styled.View`
  width: 49px;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-end;
  height: 25px;
  right: 14px;
`
const Container = styled.View`
  width: 327px;
  height: 56px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  background: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey8 : colors.grey1)};
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 24px;
`

const CurrentText = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : '#858687')};
  font-size: 20px;
  font-family: Pretendard-SemiBold;
`

const CurrentUnit = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : '#858687')};
  font-size: 15px;
  font-family: Pretendard-SemiBold;
`

const CurrentText2 = styled.Text`
  font-size: 15px;
  font-family: Pretendard-SemiBold;
  line-height: 25px;
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey4 : '#858687')};
`

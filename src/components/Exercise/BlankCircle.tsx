import { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'

interface BlankProps {
  num: number
  unit: string
  title: string
  isDark: boolean
  bubbleOn: boolean
  bubbleText?: string
}

export default function BlankCircle({ num, unit, title, bubbleOn, bubbleText, isDark }: BlankProps) {
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    if (bubbleOn === false) setShouldRender(false)
    // 일정 시간(예: 5초) 후에 렌더링 여부를 false로 변경
    const timer = setTimeout(() => {
      setShouldRender(false)
    }, 5000)

    // 컴포넌트가 언마운트되면 타이머 클리어
    return () => clearTimeout(timer)
  }, []) // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행

  return (
    <CircleBox>
      {shouldRender ? (
        <Bubble2 isDark={isDark}>
          <BubbleText2 isDark={isDark}>{bubbleText}kg</BubbleText2>
          <BubbleArrow2 isDark={isDark} />
        </Bubble2>
      ) : null}
      <RoutineCircle isDark={isDark}>
        <CircleLine>
          <CircleText isDark={isDark}>{num}</CircleText>
          <CircleUnit isDark={isDark}>{unit}</CircleUnit>
        </CircleLine>
      </RoutineCircle>
      <UnderCircle isDark={isDark}>{title}</UnderCircle>
    </CircleBox>
  )
}

const CircleBox = styled.View`
  justify-content: center;
  align-items: center;
`

const CircleLine = styled.View`
  flex-direction: row;
  line-height: 32px;
  align-items: baseline;
`
const RoutineCircle = styled.View`
  width: 80px;
  height: 80px;
  background: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey8 : colors.grey1)};
  border-radius: 120px;
  justify-content: center;
  align-items: center;
`

const UnderCircle = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
  text-align: center;
  font-size: 10px;
  font-family: Pretendard-Regular;
  line-height: 15px;
  margin-bottom: 31px;
  margin-top: 8px;
`

const CircleText = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
  font-size: 20px;
  font-family: Pretendard-SemiBold;
`

const CircleUnit = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
  font-size: 10px;
  font-family: Pretendard-SemiBold;
`

const Bubble2 = styled.View`
  position: absolute;
  background: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
  width: 60px;
  height: 32px;
  padding: 0px;
  border-radius: 12px;
  z-index: 1;
  align-items: center;
  bottom: 124px;
`

const BubbleArrow2 = styled.View`
  position: relative;
  border-style: solid;
  border-width: 12px 8px 0px;
  border-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)} transparent;
  width: 0;
  z-index: 1;
  top: 16px;
`

const BubbleText2 = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.black : colors.white)};
  font-size: 11px;
  font-family: Pretendard-Bold;
  top: 10px;
`

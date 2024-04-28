import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import PercentageCircle from 'react-native-progress-circle'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'

interface ProgressProps {
  num: number
  unit: string
  title: string
  isDark: boolean
}

export default function ProgressCircle({ num, unit, title, isDark }: ProgressProps) {
  const percentage = (num / 60) * 100

  return (
    <CircleBox>
      <PercentageCircle
        percent={percentage}
        radius={40}
        borderWidth={2}
        color={colors.main1}
        shadowColor={isDark ? colors.grey8 : colors.grey1}
        bgColor={isDark ? colors.grey9 : colors.white}
      >
        <CircleLine>
          <CircleText isDark={isDark}>{num}</CircleText>
          <CircleUnit isDark={isDark}>{unit}</CircleUnit>
        </CircleLine>
      </PercentageCircle>
      <UnderCircle isDark={isDark}>{title}</UnderCircle>
    </CircleBox>
  )
}

const CircleLine = styled.View`
  flex-direction: row;
  line-height: 32px;
  align-items: baseline;
`

const CircleBox = styled.View`
  justify-content: center;
  align-items: center;
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

const UnderCircle = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
  text-align: center;
  font-size: 10px;
  font-family: Pretendard-Regular;
  line-height: 15px;
  margin-bottom: 31px;
  margin-top: 8px;
`

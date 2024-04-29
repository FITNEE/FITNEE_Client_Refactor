import { View } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import { useAtom } from 'jotai'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { ActiveProps } from '@/pages/CreateRoutine/CreateRoutine_1'
import { NextProps } from './CreateRoutine1'
import { useState } from 'react'
import WheelPicker from './WheelPicker'

export default function CreateRoutine2({ next }: NextProps) {
  const [isDark] = useAtom(isDarkModeAtom)
  const [select, SetSelect] = useState(false)
  return (
    <View>
      <Content>
        <TitleContainer>
          <Title isDark={isDark}>나의 예상 스쿼트 1RM은?</Title>
          <SubTitle isDark={isDark}>{`회원님의 답변을 바탕으로
정확한 트레이닝 중량을 추천해 드릴게요.`}</SubTitle>
        </TitleContainer>
        <WheelPicker />
      </Content>
      <NextButton isDark={isDark} isActive={select} onPress={next} disabled={!select}>
        <ButtonText isDark={isDark} isActive={select}>
          다음
        </ButtonText>
      </NextButton>
    </View>
  )
}
const TitleContainer = styled.View`
  margin-bottom: 34.3%;
`
const Title = styled.Text<{ isDark: boolean }>`
  font-size: 24px;
  font-family: 'SemiBold';
  line-height: 33.6px;
  margin-top: 52px;
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
`
const SubTitle = styled.Text<{ isDark: boolean }>`
  font-size: 13px;
  margin-top: 8px;
  line-height: 19.5px;
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
`
const Content = styled.View`
  height: 87.4%;
`
const NextButton = styled.TouchableOpacity<ActiveProps>`
  height: 52px;
  align-items: center;
  justify-content: center;
  background-color: ${(props: ActiveProps) =>
    props.isActive ? colors.main1 : props.isDark ? colors.grey7 : colors.grey3};
  border-radius: 12px;
`
const ButtonText = styled.Text<ActiveProps>`
  font-size: 17px;
  font-family: 'SemiBold';
  color: ${(props: ActiveProps) =>
    props.isActive ? (props.isDark ? colors.black : colors.white) : props.isDark ? colors.white : colors.black};
`

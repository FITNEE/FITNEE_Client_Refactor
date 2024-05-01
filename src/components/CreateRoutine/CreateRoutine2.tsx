import { View } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import { useAtom } from 'jotai'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { ActiveProps } from '@/pages/CreateRoutine/CreateRoutine_1'
import { NextProps } from './CreateRoutine1'
import { useState } from 'react'
import WheelPicker from './WheelPicker'
import { Ionicons } from '@expo/vector-icons'

export default function CreateRoutine2({ next }: NextProps) {
  const [isDark] = useAtom(isDarkModeAtom)
  const [select, SetSelect] = useState(false)
  const [dontKnow, setDontKnow] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const handleDontKnow = () => {
    setDontKnow(!dontKnow)
  }
  const handleBubble = () => {
    setShouldRender(!shouldRender)
  }
  return (
    <View>
      <Content>
        <TitleContainer>
          <TitleWrapper>
            <Title isDark={isDark}>나의 예상 스쿼트 1RM은?</Title>
            <Icon onPress={handleBubble}>
              <Ionicons name="help-circle" size={24} color={'#595F72'}></Ionicons>
            </Icon>
          </TitleWrapper>
          {shouldRender ? (
            <Bubble isDark={isDark}>
              <BubbleText isDark={isDark}>{`정확한 동작으로 한 번 들어 올릴 
수 있는 무게를 의미해요.`}</BubbleText>
              <BubbleArrow isDark={isDark} />
            </Bubble>
          ) : null}
          <SubTitle isDark={isDark}>{`회원님의 답변을 바탕으로
정확한 트레이닝 중량을 추천해 드릴게요.`}</SubTitle>
        </TitleContainer>
        <WheelPickerWrapper>
          <WheelPicker />
          <DontKnowButton isDark={isDark} isActive={dontKnow} onPress={handleDontKnow}>
            <DontKnowText isDark={isDark} isActive={dontKnow}>
              잘 모르겠어요
            </DontKnowText>
          </DontKnowButton>
        </WheelPickerWrapper>
      </Content>
      <NextButton isDark={isDark} isActive={select} onPress={next}>
        <ButtonText isDark={isDark} isActive={select}>
          다음
        </ButtonText>
      </NextButton>
    </View>
  )
}
const TitleContainer = styled.View`
  margin-bottom: 26.7%;
`
const Title = styled.Text<{ isDark: boolean }>`
  font-size: 24px;
  font-family: 'SemiBold';
  line-height: 33.6px;
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
const NextButton = styled.TouchableOpacity`
  height: 52px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.main1};
  border-radius: 12px;
`
const ButtonText = styled.Text<{ isDark: boolean }>`
  font-size: 17px;
  font-family: 'SemiBold';
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.black : colors.white)};
`
const WheelPickerWrapper = styled.View`
  align-items: center;
`
const DontKnowButton = styled.TouchableOpacity<ActiveProps>`
  width: 99px;
  height: 40px;
  margin-top: 22px;
  background-color: ${(props: ActiveProps) =>
    props.isActive ? colors.main1 : props.isDark ? colors.grey7 : colors.grey3};
  margin-bottom: 104px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`
const DontKnowText = styled.Text<ActiveProps>`
  font-size: 13px;
  font-weight: 600;
  color: ${(props: ActiveProps) => (props.isDark ? colors.white : props.isActive ? colors.white : colors.black)};
`
const Icon = styled.TouchableOpacity``
const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 52px;
`
const Bubble = styled.View<{ isDark: boolean }>`
  position: absolute;
  width: 164px;
  height: 53px;
  padding: 0px;
  background: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.grey9)};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  top: 85px;
  left: 165px;
  z-index: 1;
`

const BubbleArrow = styled.View<{ isDark: boolean }>`
  position: absolute;
  border-style: solid;
  border-width: 0 8px 10px;
  border-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.grey9)} transparent;
  /* display: block; */
  width: 0;
  z-index: 1;
  top: -10px;
  left: 16px;
`
const BubbleText = styled.Text<{ isDark: boolean }>`
  font-size: 11px;
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.black : colors.white)};
`

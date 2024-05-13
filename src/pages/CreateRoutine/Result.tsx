import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import { useAtom } from 'jotai'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '@/pages/home/EmptyRoutine'
import { ActiveProps } from '@/pages/CreateRoutine/CreateRoutine'
import ScreenLayout from '@/components/home/ScreenLayout'
import RoutineResult from '@/components/CreateRoutine/RoutineResult'

export default function Result() {
  const [isDark] = useAtom(isDarkModeAtom)
  const navigation = useNavigation<NavigationProps>()
  return (
    <ScreenLayout>
      <Content>
        <TitleContainer>
          <Title isDark={isDark}>루틴이 생성되었어요!</Title>
          <SubTitle isDark={isDark}>
            {`회원님의 답변을 기반으로 최적의 플랜을 만들었어요.
         가장 마음에 드는 플랜을 선택해주세요.`}
          </SubTitle>
        </TitleContainer>
        <RoutineResult />
      </Content>
      <NextButton isDark={isDark} onPress={() => navigation.navigate('Error')}>
        <ButtonText isDark={isDark}>이 루틴으로 결정</ButtonText>
      </NextButton>
    </ScreenLayout>
  )
}
const Content = styled.View`
  height: 87.4%;
  padding: 0 24px;
`
const TitleContainer = styled.View`
  align-items: center;
  margin-top: 25.5%;
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
const NextButton = styled.TouchableOpacity`
  height: 52px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.main1};
  border-radius: 12px;
  margin: 0 24px;
`
const ButtonText = styled.Text`
  font-size: 17px;
  font-family: 'SemiBold';
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.black : colors.white)};
`

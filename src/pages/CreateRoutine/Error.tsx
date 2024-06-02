import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import { useAtom } from 'jotai'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '@/pages/home/EmptyRoutine'
import { ActiveProps } from '@/pages/createRoutine/CreateRoutine'
import ScreenLayout from '@/components/home/ScreenLayout'

export default function Error() {
  const [isDark] = useAtom(isDarkModeAtom)
  const navigation = useNavigation<NavigationProps>()
  return (
    <ScreenLayout>
      <ErrorContainer>
        <Image isDark={isDark} source={require('@/assets/images/PNGs/RoutineFail.png')} />
        <Title isDark={isDark}>앗 !</Title>
        <SubTitle isDark={isDark}>
          {`일시적인 오류로 인해 루틴을 루틴을 생성하지 못했어요.\n잠시후 다시 시도해주세요.`}
        </SubTitle>
        <Retry>
          <RetryText>다시 시도</RetryText>
        </Retry>
        <Home
          onPress={() => navigation.navigate('Home')}
          style={{
            borderColor: `${colors.main1}`,
          }}
        >
          <HomeText style={{ color: isDark ? colors.main3 : colors.main1 }}>홈으로 돌아가기</HomeText>
        </Home>
      </ErrorContainer>
    </ScreenLayout>
  )
}
const ErrorContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`

const Image = styled.Image`
  width: 125px;
  height: 125px;
  margin-bottom: 8px;
`
const Title = styled.Text`
  font-size: 20px;
  font-family: 'SemiBold';
  line-height: 32px;
  margin-bottom: 8px;
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
`
const SubTitle = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
  line-height: 19.5px;
  font-family: 'Regular';
  font-size: 13px;
  text-align: center;
`
const Retry = styled.TouchableOpacity`
  width: 343px;
  height: 52px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.main1};
  border-radius: 12px;
  margin-bottom: 8px;
  margin-top: 40px;
`
const RetryText = styled.Text`
  color: ${colors.white};
  font-size: 17px;
  font-family: 'SemiBold';
`
const Home = styled.TouchableOpacity`
  width: 343px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border: 1px;
  border-radius: 12px;
  border-color: ${colors.main1};
`
const HomeText = styled.Text`
  font-size: 17px;
  font-family: 'SemiBold';
`

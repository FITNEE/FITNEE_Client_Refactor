import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import { useAtom } from 'jotai'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '@/pages/home/EmptyRoutine'
import { ActiveProps } from '@/pages/CreateRoutine/CreateRoutine'
import ScreenLayout from '@/components/home/ScreenLayout'
import LeftArrow from '@/assets/images/SVGs/icon/LeftArrow.svg'

export default function Result() {
  const [isDark] = useAtom(isDarkModeAtom)
  const navigation = useNavigation<NavigationProps>()
  const handleButtonBack = () => navigation.goBack()
  return (
    <ScreenLayout>
      <Header>
        <BackButton onPress={handleButtonBack}>
          <LeftArrow width={24} height={24} color={isDark ? colors.white : colors.black} />
        </BackButton>
        <Title>Result</Title>
      </Header>
    </ScreenLayout>
  )
}
const Header = styled.View<{ isDark: boolean }>`
  flex-direction: row;
  width: 100%;
  height: 56px;
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.black : colors.grey1)};
  align-items: center;
  justify-content: center;
  padding: 10px;
`
const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 5%;
`
const Title = styled.Text<{ isDark: boolean }>`
  font-family: 'SemiBold';
  font-size: 17px;
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
`

const Template1 = styled.View<{ isDark: boolean }>`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
`

const Template2 = styled.View<ActiveProps>`
  color: ${(props: ActiveProps) => (props.isActive ? colors.main1 : props.isDark ? colors.white : colors.black)};
`

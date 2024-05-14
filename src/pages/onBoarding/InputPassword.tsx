import TextButton from '@/components/TextButton'
import Input from '@/components/onBoarding/Input'
import KeyboardAvoidLayout from '@/components/onBoarding/KeyboardAvoidLayout'
import Title from '@/components/onBoarding/Title'
import { colors } from '@/libs/Colors'
import { OnBoardingNavParams } from '@/navigators/OnBoardingNav'
import { passwordAtom } from '@/states/OnBoardingStates'
import { StackScreenProps } from '@react-navigation/stack'
import { useAtom } from 'jotai'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import BackIcon from '@/assets/images/SVGs/icon/LeftArrow.svg'

type InputPasswordProps = StackScreenProps<OnBoardingNavParams, 'OnBoardingInputPassword'>

export default function InputPassword({ navigation, route }: InputPasswordProps) {
  const isCreateAccount = route.params.isCreateAccount

  const [password, setPassword] = useAtom(passwordAtom)
  const [isError, setIsError] = useState<boolean>(false)
  const [errorText, setErrorText] = useState<string>('')

  const onPressCompleteBtn = () => {
    if (isCreateAccount) {
    } else {
      setIsLoggedIn(true)
    }
  }

  const onPressPrevBtn = () => navigation.goBack()

  return (
    <KeyboardAvoidLayout background={colors.grey1}>
      <Container>
        <PrevBtnContainer>
          <TouchableOpacity onPress={onPressPrevBtn}>
            <BackIcon width={24} height={24} color={colors.black} />
          </TouchableOpacity>
        </PrevBtnContainer>
        <TopContainer>
          <Title
            title={isCreateAccount ? '환영해요! 계정을 생성할게요.' : '다시 만나 반가워요!'}
            subTitle="비밀번호를 입력해주세요."
          />
          <Input
            placeholder="password"
            value={password}
            setValue={setPassword}
            isError={isError}
            errorText={errorText}
            isPassword={true}
            onPressEnter={onPressCompleteBtn}
          />
        </TopContainer>
        <TextButton
          text={isCreateAccount ? '계정 생성' : '로그인'}
          disabled={password.length === 0}
          onPress={onPressCompleteBtn}
        />
      </Container>
    </KeyboardAvoidLayout>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: ${colors.grey1};
  padding: 35% 24px 24px 24px;
  justify-content: space-between;
  position: relative;
`
const PrevBtnContainer = styled.View`
  padding: 12px 24px;
  position: absolute;
`
const TopContainer = styled.View`
  width: 100%;
  gap: 50px;
`

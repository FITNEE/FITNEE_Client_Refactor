import ScreenLayout from '@/components/ScreenLayout'
import TextButton from '@/components/TextButton'
import Input from '@/components/onBoarding/Input'
import KeyboardAvoidLayout from '@/components/onBoarding/KeyboardAvoidLayout'
import Title from '@/components/onBoarding/Title'
import { colors } from '@/libs/Colors'
import { OnBoardingNavParams } from '@/navigators/OnBoardingNav'
import { emailAtom } from '@/states/OnBoardingStates'
import { StackScreenProps } from '@react-navigation/stack'
import { useAtom } from 'jotai'
import { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'

type InputEmailProps = StackScreenProps<OnBoardingNavParams, 'OnBoardingInputEmail'>

export default function InputEmail({ navigation }: InputEmailProps) {
  const [email, setEmail] = useAtom(emailAtom)
  const [isError, setIsError] = useState<boolean>(false)
  const [errorText, setErrorText] = useState<string>('')

  const onPressCompleteBtn = () => {
    if (checkEmailValidity()) {
      setIsError(false)
      navigation.navigate('OnBoardingInputPassword', { isCreateAccount: true })
    } else {
      setIsError(true)
      setErrorText('올바르지 않은 이메일 형식이에요.')
    }
  }

  const checkEmailValidity = () => {
    const regex = new RegExp(
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
    )
    if (regex.test(email)) return true
    return false
  }

  return (
    <KeyboardAvoidLayout background={colors.grey1}>
      <Container>
        <TopContainer>
          <Title title="이메일을 입력해주세요." subTitle="로그인 또는 회원가입에 필요합니다." />
          <Input
            placeholder="email@fitnee.com"
            value={email}
            setValue={setEmail}
            isError={isError}
            errorText={errorText}
            isPassword={false}
            onPressEnter={onPressCompleteBtn}
          />
        </TopContainer>
        <TextButton text="확인" disabled={email.length === 0} onPress={onPressCompleteBtn} />
      </Container>
    </KeyboardAvoidLayout>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: ${colors.grey1};
  padding: 35% 24px 24px 24px;
  justify-content: space-between;
`
const TopContainer = styled.View`
  width: 100%;
  gap: 50px;
`

import TextButton from '@/components/TextButton'
import Input from '@/components/onBoarding/Input'
import KeyboardAvoidLayout from '@/components/onBoarding/KeyboardAvoidLayout'
import Title from '@/components/onBoarding/Title'
import { colors } from '@/libs/Colors'
import { OnBoardingNavParams } from '@/navigators/OnBoardingNav'
import { passwordAtom } from '@/states/OnBoardingStates'
import { StackScreenProps } from '@react-navigation/stack'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import BackIcon from '@/assets/images/SVGs/icon/LeftArrow.svg'
import { isLoggedInAtom } from '@/states/GlobalStates'

type InputPasswordProps = StackScreenProps<OnBoardingNavParams, 'OnBoardingInputPassword'>

export default function InputPassword({ navigation, route }: InputPasswordProps) {
  const isCreateAccount = route.params.isCreateAccount

  const [password, setPassword] = useAtom(passwordAtom)
  const [isError, setIsError] = useState<boolean>(false)
  const [errorText, setErrorText] = useState<string>('')
  const [inputPassword, setInputPassword] = useState<string>('')
  const [, setIsLoggedIn] = useAtom(isLoggedInAtom)

  const onPressCompleteBtn = () => {
    // 1. 계정 생성
    if (isCreateAccount) {
      // 1-1. 비밀번호 처음 입력
      if (inputPassword.length === 0) {
        //1-1-1. 비밀번호 유효성 검증 통과
        if (checkPasswordValidity()) {
          setIsError(false)
          const pw = password
          setInputPassword(pw)
          setPassword('')
        }
        // 1-1-2. 비밀번호 유효성 검증 실패
        else {
          setIsError(true)
          setErrorText('비밀번호 형식이 올바르지 않습니다.')
        }
      }
      // 1-2. 비밀번호 재입력
      else {
        // 1-2-1. 비밀번호 일치
        if (inputPassword == password) console.log('계정생성')
        //1-2-2. 비밀번호 불일치
        else {
          setIsError(true)
          setErrorText('비밀번호가 일치하지 않습니다.')
        }
      }
    } else {
      setIsLoggedIn(true)
    }
  }

  const onPressPrevBtn = () => navigation.goBack()

  useEffect(() => {
    setInputPassword('')
  }, [])

  useEffect(() => {
    password.length === 0 && setIsError(false)
  }, [password])

  const checkPasswordValidity = () => {
    const regexp = new RegExp('^(?=.*[a-zA-Z0-9]).{8,20}$')
    if (regexp.test(password)) return true
    return false
  }

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
            subTitle={inputPassword.length === 0 ? '비밀번호를 입력해주세요.' : '비밀번호를 한 번 더 입력해주세요.'}
          />
          <Input
            placeholder={inputPassword.length === 0 ? '영문 대소문자, 숫자 혼합 8-20자 이내' : '비밀번호 재입력'}
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

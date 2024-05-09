import React, { useRef, useState } from 'react'
import { Keyboard, TextInput, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import { useAtom } from 'jotai'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { Button } from '@/components/myPage/TextButton'
import ScreenLayout from '@/components/ScreenLayout'

export default function EditPW({ navigation }: any) {
  const [isDark] = useAtom(isDarkModeAtom)

  const [rewrittenPW, setRewrittenPW] = useState('')
  const [newPW, setNewPW] = useState('')
  const [rewrittenNewPW, setRewrittenNewPW] = useState('')
  const [errorPW, setErrorPW] = useState(false)
  const [errorNewPW, setErrorNewPW] = useState(false)
  const [messageErrorPW, setMessageErrorPW] = useState('')
  const [checking, setChecking] = useState(false)
  const [click, setClick] = useState(false)
  const [visibleErrorNewPW, setVisibleErrorNewPW] = useState(false)

  const firstInputRef = useRef<TextInput>(null)
  const secondInputRef = useRef<TextInput>(null)
  const thirdInputRef = useRef<TextInput>(null)

  const check = async (userPW: string) => {
    try {
      const checkResult = {
        isSuccess: false,
        code: 707,
        message: '입력한 userPw와 기존 userPw가 동일하지 않습니다.',
      }
      return checkResult
    } catch (error) {
      console.error('Failed to fetch data:', error)
    }
  }

  const checkPW = () => {
    check(rewrittenPW).then(checkResult => {
      if (checkResult) {
        setErrorPW(!checkResult.isSuccess)
        checkResult.isSuccess && setChecking(true)
        checkResult.isSuccess && secondInputRef.current?.focus()
      }
    })
  }

  const checkNewPW = () => {
    check(newPW).then(checkResult => {
      setClick(true)
      if (checkResult) {
        setErrorNewPW(checkResult.isSuccess)
        if (checkResult.code === 706) {
          setMessageErrorPW('기존 비밀번호와 동일합니다.')
          setErrorNewPW(true)
        } else if (newPW.length < 4) {
          setMessageErrorPW('비밀번호는 4글자 이상이어야 합니다.')
          setErrorNewPW(true)
        } else {
          setMessageErrorPW('사용 가능한 비밀번호입니다.')
          setErrorNewPW(false)
          setVisibleErrorNewPW(true)
          thirdInputRef.current?.focus()
        }
      }
    })
  }

  const updateUserPW = async (newPW: string) => {
    try {
      const updateResult = {
        isSuccess: true,
        code: 1000,
        message: '성공',
      }
      return updateResult
    } catch (error) {
      console.error('Failed to fetch data:', error)
    }
  }

  const handlePress = () => {
    updateUserPW(newPW).then(updateResult => {
      if (updateResult) {
        updateResult.code === 1000 &&
          navigation.navigate('UserInfo', {
            showToast: true,
            toastMessage: '비밀번호가 변경되었습니다.',
          })
      }
    })
  }

  return (
    <ScreenLayout>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss()
        }}
      >
        <Container isDark={isDark}>
          <InputContainer>
            <InputRed1 error={errorPW}>
              <Input
                isDark={isDark}
                placeholderTextColor={isDark ? colors.grey8 : colors.grey6}
                placeholder="기존 비밀번호 확인"
                style={{
                  fontFamily: 'Regular',
                  color: checking ? (isDark ? colors.grey7 : colors.grey2) : isDark ? colors.white : colors.black,
                }}
                autoFocus
                ref={firstInputRef}
                secureTextEntry={true}
                returnKeyType="done"
                blurOnSubmit={false}
                onChangeText={(text: string) => setRewrittenPW(text)}
              />
            </InputRed1>
            <StatusText error={errorPW}>{errorPW ? '비밀번호가 일치하지 않습니다' : ''}</StatusText>
            <InputRed2 error={errorNewPW} prevCheck={checking} contents={newPW} on={click}>
              <Input
                isDark={isDark}
                placeholderTextColor={isDark ? colors.grey8 : colors.grey6}
                placeholder="새 비밀번호"
                style={{
                  fontFamily: 'Regular',
                }}
                ref={secondInputRef}
                secureTextEntry={true}
                returnKeyType="done"
                blurOnSubmit={false}
                onChangeText={(text: string) => setNewPW(text)}
              />
            </InputRed2>
            <StatusText error={errorNewPW}>{messageErrorPW}</StatusText>
            <InputRed2
              error={rewrittenNewPW != newPW}
              prevCheck={visibleErrorNewPW}
              contents={rewrittenNewPW}
              on={click}
            >
              <Input
                isDark={isDark}
                placeholderTextColor={isDark ? colors.grey8 : colors.grey6}
                onSubmitEditing={() => {
                  rewrittenNewPW == newPW && handlePress()
                }}
                placeholder="새 비밀번호 확인"
                style={{
                  fontFamily: 'Regular',
                }}
                ref={thirdInputRef}
                secureTextEntry={true}
                returnKeyType="done"
                blurOnSubmit={false}
                onChangeText={(text: string) => setRewrittenNewPW(text)}
              />
            </InputRed2>
            <StatusText error={rewrittenNewPW != newPW}>
              {visibleErrorNewPW
                ? rewrittenNewPW == newPW
                  ? '비밀번호가 일치합니다.'
                  : '비밀번호가 일치하지 않습니다'
                : ''}
            </StatusText>
          </InputContainer>
          {!checking ? (
            <Button onPress={() => checkPW()} enabled={rewrittenPW != ''} text={'확인'} />
          ) : visibleErrorNewPW ? (
            <Button
              enabled={visibleErrorNewPW && !errorNewPW && rewrittenNewPW == newPW}
              onPress={() => handlePress()}
              text={'새 비밀번호 저장'}
            />
          ) : (
            <Button onPress={() => checkNewPW()} enabled={newPW != ''} text={'확인'} />
          )}
        </Container>
      </TouchableWithoutFeedback>
    </ScreenLayout>
  )
}

const Container = styled.View`
  height: 100%;
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey9 : colors.white)};
  padding: 32px 24px 0px 24px;
`
const Input = styled.TextInput`
  padding: 15px 16px;
  border-radius: 10px;
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.black : colors.grey1)};
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
  width: 100%;
  height: 48px;
`
const InputRed1 = styled.View`
  width: 100%;
  border-radius: 10px;
  border: 1px;
  border-color: ${(props: { error: boolean }) => (props.error ? colors.red : 'transparent')};
`
const InputRed2 = styled.View`
  width: 100%;
  border-radius: 10px;
  border: 1px;
  border-color: ${(props: { error: boolean; prevCheck: boolean; contents: string; on: boolean }) =>
    props.prevCheck && props.contents != '' && props.on ? (props.error ? colors.red : colors.green) : 'transparent'};
`
const StatusText = styled.Text`
  margin-left: 16px;
  margin-top: 3px;
  font-size: 11px;
  font-style: normal;
  font-family: Regular;
  line-height: 16.5px;
  width: 100%;
  margin-bottom: 8px;
  margin-right: 8px;
  font-weight: 300;
  color: ${(props: { error: boolean }) => (props.error ? colors.red : colors.green)};
`
const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 60px;
`

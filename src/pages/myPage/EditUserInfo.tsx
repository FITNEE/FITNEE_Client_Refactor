import React, { useEffect, useState } from 'react'
import { Keyboard, Text, TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import { TouchableOpacity } from 'react-native'
import Left from '../../assets/images/SVGs/icon/Left.svg'
import { Alert } from 'react-native'
import ProfileMan from '../../assets/images/SVGs/icon/ProfileMan.svg'
import ProfileWoman from '../../assets/images/SVGs/icon/ProfileWoman.svg'
import { useAtom } from 'jotai'
import { isDarkModeAtom } from '@/states/GlobalStates'
import ScreenLayout from '@/components/ScreenLayout'
import { StackScreenProps } from '@react-navigation/stack'
import { MyPageNavParams } from '@/navigators/MyPageNav'

type EditUserInfoProps = StackScreenProps<MyPageNavParams, 'EditUserInfo'>
interface UserInfoData {
  birthYear: number
  userId: string
  userNickname: string
  gender: number
}

export default function EditUserInfo({ navigation }: EditUserInfoProps) {
  const [isDark] = useAtom(isDarkModeAtom)

  const [check, setCheck] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(true)
  const [userInfo, setUserInfo] = useState<UserInfoData>({
    birthYear: 0,
    userId: '',
    userNickname: '',
    gender: 0,
  })

  const getUserInfoData = async () => {
    try {
      const result = {
        isSuccess: true,
        code: 1000,
        message: '성공',
        result: [
          {
            userNickname: 'GYM종꾹',
            birthYear: 1998,
            userId: 'rlj@naver.com',
            gender: 1,
          },
        ],
      }
      return result.result[0]
    } catch (error) {
      console.error('Failed to fetch data:', error)
    }
  }

  useEffect(() => {
    getUserInfoData().then(result => {
      if (result) {
        setUserInfo(result)
      }
    })
  }, [])

  const getUserName = userInfo.userNickname
  const getGender = userInfo.gender

  const [newNickname, setNewNickname] = useState<string>(getUserName)
  const [checkNick, setCheckNick] = useState<string>('')

  const checkOnlyOneNickName = async (newNickname: string) => {
    try {
      const checkResult = {
        isSuccess: true,
        code: 1000,
        message: '성공',
        result: false,
      }
      return checkResult
    } catch (error) {
      console.error('Failed to fetch data:', error)
    }
  }
  const updateUserInfo = async (newNickname: string) => {
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

  const change = () => {
    checkOnlyOneNickName(newNickname).then(checkResult => {
      if (newNickname == '') {
        alert('변경할 닉네임을 입력해주세요')
      } else {
        setCheck(true)
        setCheckNick(newNickname)
        if (checkResult) {
          checkResult.result || newNickname.length < 2 ? setError(true) : (setError(false), Keyboard.dismiss())
          checkResult.result || newNickname.length < 2 ? setEnabled(false) : setEnabled(true)
        }
      }
    })
  }

  const [enabled, setEnabled] = useState<boolean>(false)

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            Alert.alert('변경 사항을 폐기하시겠습니까?', '', [
              {
                text: '계속 편집하기',
                style: 'cancel',
              },
              {
                text: '변경사항 폐기',
                style: 'destructive',
                onPress: () => navigation.goBack(),
              },
            ])
          }}
        >
          <Left style={{ marginLeft: 24 }} width={24} height={24} color={isDark ? colors.white : colors.black} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          disabled={!enabled}
          onPress={() => {
            !error && updateUserInfo(newNickname)
            navigation.navigate('UserInfo', {
              showToast: true,
              toastMessage: '닉네임이 변경되었습니다.',
            })
          }}
          style={{ marginRight: 24 }}
        >
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'SemiBold',
              color: enabled ? colors.main1 : isDark ? colors.grey7 : colors.grey2,
            }}
          >
            저장
          </Text>
        </TouchableOpacity>
      ),
    })
  }, [error, newNickname, enabled])

  return (
    <ScreenLayout>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss()
        }}
      >
        <Container isDark={isDark}>
          <Profile>
            {getGender == 1 ? (
              <ProfileMan width={88} height={88} color={isDark ? colors.grey7 : colors.grey2} />
            ) : (
              <ProfileWoman width={88} height={88} color={isDark ? colors.grey7 : colors.grey2} />
            )}
          </Profile>
          <InputContainer>
            <InputRed
              isDark={isDark}
              error={error}
              check={check}
              style={{
                borderColor: check ? (error ? colors.red : colors.green) : isDark ? colors.black : colors.grey2,
              }}
            >
              <InputBlock
                editable
                autoFocus
                onChangeText={(text: string) => setNewNickname(text)}
                placeholder={getUserName}
                placeholderTextColor={isDark ? colors.grey8 : colors.grey6}
                isDark={isDark}
              />
            </InputRed>
            <CheckButton enabled onPress={change} isDark={isDark}>
              <CheckButtonText isDark={isDark}>중복 확인</CheckButtonText>
            </CheckButton>
          </InputContainer>
          <StatusText error={error} check={check} isDark={isDark}>
            {check
              ? error
                ? checkNick.length < 2
                  ? '닉네임은 2글자 이상이어야 합니다.'
                  : '이미 존재하는 닉네임입니다.'
                : '사용 가능한 닉네임입니다.'
              : ''}
          </StatusText>
        </Container>
      </TouchableWithoutFeedback>
    </ScreenLayout>
  )
}

const Container = styled.View`
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey9 : colors.white)};
  height: 100%;
  padding: 0px 24px;
  align-items: center;
`
const Profile = styled.View`
  align-items: center;
  margin-top: 35px;
  margin-bottom: 32px;
`
const InputRed = styled.View`
  width: 240px;
  height: 48px;
  border-radius: 8px;
  margin-bottom: 3px;
  border: 1px;
`
const InputBlock = styled.TextInput`
  width: 238px;
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.black : colors.grey1)};
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
  padding: 0px 16px;
  height: 46px;
  border-radius: 8px;
  font-size: 16px;
  font-style: normal;
  font-family: 'Regular';
`
const StatusText = styled.Text`
  margin-left: 40px;
  font-size: 11px;
  font-style: normal;
  font-family: 'Regular';
  line-height: 16.5px;
  width: 100%;
  margin-bottom: 20px;
  margin-right: 8px;
  font-weight: 300;
  color: ${(props: { isDark: boolean; check: boolean; error: boolean }) =>
    props.check ? (props.error ? colors.red : colors.green) : props.isDark ? colors.grey8 : colors.grey2};
`
const CheckButton = styled.TouchableOpacity`
  width: 79px;
  height: 48px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.main1};
  margin-left: 8px;
`
const CheckButtonText = styled.Text`
  font-size: 15px;
  font-style: normal;
  font-family: 'SemiBold';
  line-height: 22.5px;
  color: ${colors.main1};
`
const InputContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
`

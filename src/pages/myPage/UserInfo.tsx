import React, { useEffect, useState } from 'react'
import { Alert, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import { CommonActions, useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Right from '../../assets/images/SVGs/icon/Right.svg'
import Toast from 'react-native-toast-message'
import ProfileMan from '../../assets/images/SVGs/icon/ProfileMan.svg'
import ProfileWoman from '../../assets/images/SVGs/icon/ProfileWoman.svg'
import { isDarkModeAtom, isLoggedInAtom } from '@/states/GlobalStates'
import { useAtom } from 'jotai'
import ScreenLayout from '@/components/ScreenLayout'

interface UserInfoData {
  birthYear: number
  userId: string
  userNickname: string
  gender: number
}

type UserInfoProps = {
  route: any
  navigation: any
}

const ScreenWidth = Dimensions.get('screen').width

export default function UserInfo({ route, navigation }: UserInfoProps) {
  const isFocused = useIsFocused()
  const [isDark] = useAtom(isDarkModeAtom)

  useEffect(() => {
    if (route.params?.showToast) {
      Toast.show({
        type: 'customToast',
        text1: route.params.toastMessage,
        visibilityTime: 2000,
        position: 'bottom',
        props: { isDark: isDark },
      })
    }
  }, [route.params])

  const [userInfo, setUserInfo] = useState<UserInfoData | undefined>({
    birthYear: 0,
    userId: '',
    userNickname: '',
    gender: 0,
  })

  const deleteUserInfo = async () => {
    try {
      console.log('회원 탈퇴')
    } catch (error) {
      console.error('Failed to fetch data:', error)
    }
  }

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
  const [loggedIn, setLoggedIn] = useAtom(isLoggedInAtom)
  const Logout = () => {
    AsyncStorage.clear()
    setLoggedIn(false)
  }

  useEffect(() => {
    isFocused &&
      getUserInfoData().then(result => {
        setUserInfo(result)
      })
  }, [isFocused])

  const getUserName = userInfo?.userNickname
  const getBirthYear = userInfo?.birthYear.toString()
  const getUserId = userInfo?.userId
  const getGender = userInfo?.gender

  return (
    <ScreenLayout>
      <Container isDark={isDark}>
        <Profile>
          {getGender == 1 ? (
            <ProfileMan width={88} height={88} color={isDark ? colors.grey7 : colors.grey2} />
          ) : (
            <ProfileWoman width={88} height={88} color={isDark ? colors.grey7 : colors.grey2} />
          )}
        </Profile>
        <NickBlock onPress={() => navigation.navigate('EditUserInfo')}>
          <BlockTitle isDark={isDark}>닉네임</BlockTitle>
          <NickContent>
            <NickText isDark={isDark}>{getUserName}</NickText>
            <Right style={{ marginLeft: 8 }} width={20} height={20} color={colors.grey7} />
          </NickContent>
        </NickBlock>
        <Block>
          <BlockTitle isDark={isDark}>출생년도</BlockTitle>
          <BlockContent isDark={isDark}>{getBirthYear}</BlockContent>
        </Block>
        <Block>
          <BlockTitle isDark={isDark}>이메일 주소</BlockTitle>
          <BlockContent isDark={isDark}>{getUserId}</BlockContent>
        </Block>
        <Bar isDark={isDark} />
        <MiniBlock>
          <Click>
            <ClickText
              isDark={isDark}
              onPress={() => {
                navigation.navigate('EditPW')
              }}
            >
              비밀번호 수정
            </ClickText>
          </Click>
        </MiniBlock>
        <MiniBlock>
          <Click>
            <ClickText
              isDark={isDark}
              onPress={() => {
                Alert.alert(
                  '회원 탈퇴하시겠습니까?',
                  '서비스를 탈퇴하시면 피트니 계정을 비롯하여 모든 이용기록이 삭제되며, 삭제된 정보는 복원할 수 없습니다.',
                  [
                    {
                      text: '탈퇴하기',
                      style: 'destructive',
                      onPress: () => {
                        deleteUserInfo()
                        Logout()
                        navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'Setting' }] }))
                      },
                    },
                    {
                      text: '취소',
                      style: 'default',
                    },
                  ],
                )
              }}
            >
              회원 탈퇴하기
            </ClickText>
          </Click>
        </MiniBlock>
        <MiniBlock>
          <Click>
            <ClickText2 onPress={() => navigation.navigate('InAppPurchase')}>피트니 응원하기</ClickText2>
          </Click>
        </MiniBlock>
      </Container>
    </ScreenLayout>
  )
}

const Profile = styled.View`
  align-items: center;
  margin-top: 35px;
  margin-bottom: 32px;
`
const Block = styled.View`
  flex-direction: row;
  padding: 15px 24px;
`
const NickBlock = styled.TouchableOpacity`
  flex-direction: row;
  padding: 15px 24px;
`
const NickContent = styled.View`
  width: ${ScreenWidth - 148}px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`
const MiniBlock = styled.View`
  height: 48px;
  justify-content: center;
`
const Click = styled.View`
  margin-right: 24px;
  align-items: flex-end;
`
const Container = styled.View`
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey9 : colors.white)};
  height: 100%;
`
const BlockTitle = styled.Text`
  width: 100px;
  font-size: 17px;
  font-style: normal;
  font-family: 'Regular';
  line-height: 25.5px;
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.black)};
`
const BlockContent = styled.Text`
  width: ${ScreenWidth - 148}px;
  text-align: right;
  font-size: 17px;
  font-style: normal;
  font-family: 'Regular';
  line-height: 25.5px;
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey3 : colors.grey7)};
`
const ClickText = styled.Text`
  width: 80px;
  text-align: right;
  font-size: 13px;
  font-style: normal;
  font-family: 'Regular';
  line-height: 19.5px;
  text-decoration-line: underline;
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.grey7)};
`
const ClickText2 = styled.Text`
  width: 90px;
  text-align: right;
  font-size: 13px;
  font-style: normal;
  font-family: 'SemiBold';
  line-height: 19.5px;
  text-decoration-line: underline;
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.white : colors.main1)};
`
const NickText = styled.Text`
  text-align: right;
  font-size: 17px;
  font-style: normal;
  font-family: 'Regular';
  line-height: 25.5px;
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.grey3 : colors.grey7)};
`
const Bar = styled.View`
  height: 16px;
  background-color: ${(props: { isDark: boolean }) => (props.isDark ? colors.black : colors.grey1)};
`

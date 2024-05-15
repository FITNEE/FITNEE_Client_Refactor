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
import { isLoggedInAtom } from '@/states/GlobalStates'
import { useAtom } from 'jotai'
import ScreenLayout from '@/components/ScreenLayout'
import { screenWidth } from '@/libs/Dimensions'
import { StackScreenProps } from '@react-navigation/stack'
import { MyPageNavParams } from '@/navigators/MyPageNav'

type UserInfoProps = StackScreenProps<MyPageNavParams, 'UserInfo'>

interface UserInfoData {
  birthYear: number
  userId: string
  userNickname: string
  gender: number
}

export default function UserInfo({ route, navigation }: UserInfoProps) {
  const isFocused = useIsFocused()

  useEffect(() => {
    if (route.params?.showToast) {
      Toast.show({
        type: 'customToast',
        text1: route.params.toastMessage,
        visibilityTime: 2000,
        position: 'bottom',
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
      <Container>
        <Profile>
          {getGender == 1 ? (
            <ProfileMan width={88} height={88} color={colors.grey2} />
          ) : (
            <ProfileWoman width={88} height={88} color={colors.grey2} />
          )}
        </Profile>
        <NickBlock onPress={() => navigation.navigate('EditUserInfo')}>
          <BlockTitle>닉네임</BlockTitle>
          <NickContent>
            <NickText>{getUserName}</NickText>
            <Right style={{ marginLeft: 8 }} width={20} height={20} color={colors.grey7} />
          </NickContent>
        </NickBlock>
        <Block>
          <BlockTitle>출생년도</BlockTitle>
          <BlockContent>{getBirthYear}</BlockContent>
        </Block>
        <Block>
          <BlockTitle>이메일 주소</BlockTitle>
          <BlockContent>{getUserId}</BlockContent>
        </Block>
        <Bar />
        <MiniBlock>
          <Click>
            <ClickText
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
        {/* <MiniBlock>
          <Click>
            <ClickText2 onPress={() => navigation.navigate('InAppPurchase')}>피트니 응원하기</ClickText2>
          </Click>
        </MiniBlock> */}
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
  width: ${screenWidth - 148}px;
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
  background-color: ${colors.white};
  height: 100%;
`
const BlockTitle = styled.Text`
  width: 100px;
  font-size: 17px;
  font-style: normal;
  font-family: 'Regular';
  line-height: 25.5px;
  color: ${colors.black};
`
const BlockContent = styled.Text`
  width: ${screenWidth - 148}px;
  text-align: right;
  font-size: 17px;
  font-style: normal;
  font-family: 'Regular';
  line-height: 25.5px;
  color: ${colors.grey7};
`
const ClickText = styled.Text`
  width: 80px;
  text-align: right;
  font-size: 13px;
  font-style: normal;
  font-family: 'Regular';
  line-height: 19.5px;
  text-decoration-line: underline;
  color: ${colors.grey7};
`
const ClickText2 = styled.Text`
  width: 90px;
  text-align: right;
  font-size: 13px;
  font-style: normal;
  font-family: 'SemiBold';
  line-height: 19.5px;
  text-decoration-line: underline;
  color: ${colors.main1};
`
const NickText = styled.Text`
  text-align: right;
  font-size: 17px;
  font-style: normal;
  font-family: 'Regular';
  line-height: 25.5px;
  color: ${colors.grey7};
`
const Bar = styled.View`
  height: 16px;
  background-color: ${colors.grey1};
`

import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import { CommonActions, StackActions, useIsFocused } from '@react-navigation/native'
import Right from '../../assets/images/SVGs/icon/Right.svg'
import { Alert } from 'react-native'
import CustomSwitch from '../../components/myPage/CustomSwitch'
import ProfileMan from '../../assets/images/SVGs/icon/ProfileMan.svg'
import ProfileWoman from '../../assets/images/SVGs/icon/ProfileWoman.svg'
import { useAtom } from 'jotai'
import { isLoggedInAtom, isTabVisibleAtom } from '@/states/GlobalStates'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ScreenLayout from '@/components/ScreenLayout'
import { StackScreenProps } from '@react-navigation/stack'
import { MyPageNavParams } from '@/navigators/MyPageNav'

type SettingProps = StackScreenProps<MyPageNavParams, 'Setting'>

interface UserInfoData {
  birthYear: number
  userId: string
  userNickname: string
  gender: number
}

export default function Setting({ navigation }: SettingProps) {
  const isFocused = useIsFocused()
  const [loggedIn, setLoggedIn] = useAtom(isLoggedInAtom)
  const [isTabVisible, setIsTabVisible] = useAtom(isTabVisibleAtom)

  useEffect(() => {
    isFocused && setIsTabVisible(false)
  }, [isFocused, isTabVisible])

  const Logout = () => {
    AsyncStorage.clear()
    setLoggedIn(false)
  }
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
    isFocused &&
      getUserInfoData().then(result => {
        if (result) {
          setUserInfo(result)
        }
      })
  }, [isFocused])

  const getUserName = userInfo.userNickname
  const getGender = userInfo.gender

  return (
    <ScreenLayout>
      <Container>
        <Profile
          onPress={() => {
            navigation.navigate('UserInfo', { showToast: false, toastMessage: '' })
          }}
        >
          <ProfileInfo>
            {getGender == 1 ? (
              <ProfileMan style={{ marginRight: 8 }} width={40} height={40} color={colors.grey2} />
            ) : (
              <ProfileWoman style={{ marginRight: 8 }} width={40} height={40} color={colors.grey2} />
            )}
            <ProfileContents>
              <Name>{getUserName}</Name>
            </ProfileContents>
          </ProfileInfo>
          <Right width={20} height={20} color={colors.grey7} />
        </Profile>
        <ModeView>
          <BlockText>다크화면 모드</BlockText>
          <BlockContent>
            <CustomSwitch />
          </BlockContent>
        </ModeView>
        <Bar />
        <PremiumBlock>
          <PremiumBack source={require('../../assets/images/PNGs/MyPageBanner.png')}>
            <ComingBox>
              <ComingText>Coming Soon</ComingText>
            </ComingBox>
            <PremiumText>프리미엄 플랜으로 건강한 몸을 더 쉽게 만들어보세요</PremiumText>
          </PremiumBack>
        </PremiumBlock>
        <Block
          onPress={() => {
            Alert.alert('루틴을 다시 생성할까요?', '현재 이용 중인 루틴은 삭제되며\n다시 불러올 수 없습니다.', [
              {
                text: '취소',
                style: 'default',
              },
              {
                text: '다시 생성하기',
                style: 'default',
                isPreferred: true,
                onPress: () => navigation.dispatch(StackActions.replace('CreateRoutineNav')),
              },
            ])
          }}
        >
          <BlockText>루틴 재설정</BlockText>
        </Block>
        <Block onPress={() => navigation.navigate('PrivacyPolicy')}>
          <BlockText>개인정보 처리방침</BlockText>
        </Block>
        <Block onPress={() => navigation.navigate('TermsOfService')}>
          <BlockText>서비스 이용약관</BlockText>
        </Block>
        <Block
          onPress={() => {
            Logout()
            navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'Setting' }] }))
          }}
        >
          <BlockText>로그아웃</BlockText>
        </Block>
      </Container>
    </ScreenLayout>
  )
}

const Profile = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 35px;
  padding-left: 24px;
  margin-bottom: 22px;
  padding-right: 30px;
  justify-content: space-between;
`
const ProfileInfo = styled.View`
  flex-direction: row;
`
const ProfileImage = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #ddd;
  margin-right: 8px;
`
const ProfileContents = styled.View`
  justify-content: center;
`
const ModeView = styled.View`
  padding: 15px 24px;
  flex-direction: row;
  align-items: center;
`
const BlockContent = styled.View`
  margin-left: auto;
  margin-right: 0;
`
const Container = styled.View`
  background-color: ${colors.l_background};
  height: 100%;
`
const Bar = styled.View`
  height: 16px;
  background-color: ${colors.grey1};
`
const Name = styled.Text`
  font-size: 17px;
  font-style: normal;
  font-family: 'SemiBold';
  line-height: 25.5px;
  color: ${colors.black};
`
const Block = styled.TouchableOpacity`
  padding: 19px 24px;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.l_background};
`
const BlockText = styled.Text`
  font-size: 17px;
  font-style: normal;
  font-family: 'Regular';
  line-height: 25.5px;
  color: ${colors.black};
`

const PremiumBlock = styled.View`
  padding: 16px 24px;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
`
const PremiumBack = styled.ImageBackground`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  padding: 16px 0px 16px 0px;
`
const ComingBox = styled.View`
  width: 105px;
  height: 32px;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 1px solid ${colors.main1};
  margin-bottom: 8px;
`
const ComingText = styled.Text`
  text-align: center;
  font-family: 'SemiBold';
  font-size: 13px;
  font-style: normal;
  color: ${colors.main1};
`
const PremiumText = styled.Text`
  font-family: 'SemiBold';
  font-size: 13px;
  font-style: normal;
  color: ${colors.white};
`

import React from 'react'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import MyPage from '../pages/myPage/MyPage'
import Setting from '../pages/myPage/Setting'
import UserInfo from '../pages/myPage/UserInfo'
import EditUserInfo from '../pages/myPage/EditUserInfo'
import { TouchableOpacity } from 'react-native'
import EditPW from '@/pages/myPage/EditPW'
import SettingIcon from '../assets/images/SVGs/icon/Setting.svg'
import Left from '../assets/images/SVGs/icon/Left.svg'
import { colors } from '@/libs/Colors'
import TermsOfService from '@/pages/myPage/TermsOfService'
import PrivacyPolicy from '@/pages/myPage/PrivacyPolicy'

export type MyPageNavParams = {
  MyPage: undefined
  Setting: undefined
  UserInfo: { showToast: boolean; toastMessage: string }
  EditUserInfo: undefined
  EditPW: undefined
  PrivacyPolicy: undefined
  TermsOfService: undefined
}

const Stack = createStackNavigator<MyPageNavParams>()

export default function MyPageNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'SemiBold',
          fontSize: 17,
          lineHeight: 25.5,
        },
        headerStyle: { backgroundColor: colors.white },
        headerTintColor: colors.black,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={({ navigation }: { navigation: StackNavigationProp<MyPageNavParams, 'MyPage'> }) => ({
          headerTitle: '',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
              <SettingIcon style={{ marginRight: 24 }} width={24} height={24} color={colors.black} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={({ navigation }: { navigation: StackNavigationProp<MyPageNavParams, 'Setting'> }) => ({
          headerTitle: '앱 설정',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Left style={{ marginLeft: 24 }} width={24} height={24} color={colors.black} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="UserInfo"
        component={UserInfo}
        options={({ navigation }: { navigation: StackNavigationProp<MyPageNavParams, 'UserInfo'> }) => ({
          headerTitle: '계정 정보',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Left style={{ marginLeft: 24 }} width={24} height={24} color={colors.black} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="EditUserInfo"
        component={EditUserInfo}
        options={({ navigation }: { navigation: StackNavigationProp<MyPageNavParams, 'EditUserInfo'> }) => ({
          animationEnabled: false,
          headerTitle: '닉네임 변경',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Left style={{ marginLeft: 24 }} width={24} height={24} color={colors.black} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="EditPW"
        component={EditPW}
        options={({ navigation }: { navigation: StackNavigationProp<MyPageNavParams, 'EditPW'> }) => ({
          headerTitle: '비밀번호 수정',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Left style={{ marginLeft: 24 }} width={24} height={24} color={colors.black} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={({ navigation }: { navigation: StackNavigationProp<MyPageNavParams, 'PrivacyPolicy'> }) => ({
          headerTitle: '개인정보 처리방침',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Left style={{ marginLeft: 24 }} width={24} height={24} color={colors.black} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="TermsOfService"
        component={TermsOfService}
        options={({ navigation }: { navigation: StackNavigationProp<MyPageNavParams, 'TermsOfService'> }) => ({
          headerTitle: '서비스 이용약관',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Left style={{ marginLeft: 24 }} width={24} height={24} color={colors.black} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  )
}

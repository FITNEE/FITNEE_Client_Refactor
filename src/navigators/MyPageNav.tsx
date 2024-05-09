import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MyPage from "@/pages/MyPage/MyPage"
import Setting from '@/pages/myPage/Setting'
import UserInfo from '@/pages/myPage/UserInfo'
import EditUserInfo from '@/pages/myPage/EditUserInfo'
import { TouchableOpacity } from 'react-native'
import EditPW from '@/pages/myPage/EditPW'
import SettingIcon from '../assets/images/SVGs/icon/Setting.svg'
import Left from '../assets/images/SVGs/icon/Left.svg'
import { colors } from '@/libs/Colors'
import MyRoutineNav from './MyRoutine'
import TermsOfService from '@/pages/myPage/TermsOfService'
import PrivacyPolicy from '@/pages/myPage/PrivacyPolicy'
import { useAtom } from 'jotai'
import { isDarkModeAtom } from '@/states/GlobalStates'

const Stack = createStackNavigator();

export default function MyPageNav() {
  const [isDark] = useAtom(isDarkModeAtom)

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'SemiBold',
          fontSize: 17,
          lineHeight: 25.5,
        },
        headerStyle: { backgroundColor: isDark ? colors.grey9 : colors.white },
        headerTintColor: isDark ? colors.white : colors.black,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={({ navigation }) => ({
          headerTitle: '',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
              <SettingIcon
                style={{ marginRight: 24 }}
                width={24}
                height={24}
                color={isDark ? colors.white : colors.black}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={({ navigation }) => ({
          headerTitle: '앱 설정',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Left style={{ marginLeft: 24 }} width={24} height={24} color={isDark ? colors.white : colors.black} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="UserInfo"
        component={UserInfo}
        options={({ navigation }) => ({
          headerTitle: '계정 정보',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Left style={{ marginLeft: 24 }} width={24} height={24} color={isDark ? colors.white : colors.black} />
            </TouchableOpacity>
          ),
          headerRight: false,
        })}
      />
      <Stack.Screen
        name="EditUserInfo"
        component={EditUserInfo}
        options={({ navigation }) => ({
          animationEnabled: false,
          headerTitle: '닉네임 변경',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Left style={{ marginLeft: 24 }} width={24} height={24} color={isDark ? colors.white : colors.black} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="EditPW"
        component={EditPW}
        options={({ navigation }) => ({
          headerTitle: '비밀번호 수정',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Left style={{ marginLeft: 24 }} width={24} height={24} color={isDark ? colors.white : colors.black} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={({ navigation }) => ({
          headerTitle: '개인정보 처리방침',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Left style={{ marginLeft: 24 }} width={24} height={24} color={isDark ? colors.white : colors.black} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="TermsOfService"
        component={TermsOfService}
        options={({ navigation }) => ({
          headerTitle: '서비스 이용약관',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Left style={{ marginLeft: 24 }} width={24} height={24} color={isDark ? colors.white : colors.black} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="MyRoutineNav"
        component={MyRoutineNav}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

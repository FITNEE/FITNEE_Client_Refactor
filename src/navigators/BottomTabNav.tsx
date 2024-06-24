import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeNav from './HomeNav'
import MyRoutineNav from './MyRoutine'
import ExerciseNav from './ExerciseNav'
import DictionaryNav from './DictionaryNav'
import MyPageNav from './MyPageNav'
import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'
import ExerciseTabIcon from '@/assets/images/SVGs/bottomTab/Tab_Exercise.svg'
import HomeTabIcon from '@/assets/images/SVGs/bottomTab/Tab_Home.svg'
import MyPageTabIcon from '@/assets/images/SVGs/bottomTab/Tab_MyPage.svg'
import MyRoutineTabIcon from '@/assets/images/SVGs/bottomTab/Tab_MyRoutine.svg'
import DictionaryTabIcon from '@/assets/images/SVGs/bottomTab/Tab_Dictionary.svg'
import { useAtom } from 'jotai'
import { isDarkModeAtom, isTabVisibleAtom } from '@/states/GlobalStates'
import { Platform } from 'react-native'

const Tabs = createBottomTabNavigator()

export default function BottomTabNav() {
  const [isDark] = useAtom(isDarkModeAtom)
  const [isTabVisible] = useAtom(isTabVisibleAtom)

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: Platform.OS === 'android' ? true : false,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          display: isTabVisible ? 'flex' : 'none',
          height: 88,
          backgroundColor: isDark ? colors.grey9 : colors.white,
          borderTopColor: colors.grey2,
          shadowOpacity: 0.1,
          shadowOffset: {
            width: 0,
            height: 1,
          },
        },
        tabBarActiveTintColor: colors.main1,
      }}
    >
      <Tabs.Screen
        name="HomeNav"
        component={HomeNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabWrapper>
              <HomeTabIcon color={focused ? colors.main1 : colors.grey5} width={24} height={24} />
              <TabText style={{ color: focused ? colors.main1 : colors.grey7 }}>홈</TabText>
            </TabWrapper>
          ),
        }}
      />
      <Tabs.Screen
        name="MyRoutineNav"
        component={MyRoutineNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabWrapper>
              <MyRoutineTabIcon color={focused ? colors.main1 : colors.grey5} width={24} height={24} />
              <TabText style={{ color: focused ? colors.main1 : colors.grey7 }}>마이루틴</TabText>
            </TabWrapper>
          ),
        }}
      />
      <Tabs.Screen
        name="ExerciseNav"
        component={ExerciseNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabWrapper>
              <ExerciseTabIcon color={focused ? colors.main1 : colors.grey5} width={24} height={24} />
              <TabText style={{ color: focused ? colors.main1 : colors.grey7 }}>운동하기</TabText>
            </TabWrapper>
          ),
        }}
      />
      <Tabs.Screen
        name="DictionaryNav"
        component={DictionaryNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabWrapper>
              <DictionaryTabIcon color={focused ? colors.main1 : colors.grey5} width={24} height={24} />
              <TabText style={{ color: focused ? colors.main1 : colors.grey7 }}>운동사전</TabText>
            </TabWrapper>
          ),
        }}
      />
      <Tabs.Screen
        name="MyPageNav"
        component={MyPageNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabWrapper>
              <MyPageTabIcon color={focused ? colors.main1 : colors.grey5} width={24} height={24} />
              <TabText style={{ color: focused ? colors.main1 : colors.grey7 }}>MY</TabText>
            </TabWrapper>
          ),
        }}
      />
    </Tabs.Navigator>
  )
}

const TabWrapper = styled.View`
  display: flex;
  gap: 4px;
  align-items: center;
  padding-top: 10px;
`
const TabText = styled.Text`
  font-family: 'Medium';
  font-size: 10px;
`

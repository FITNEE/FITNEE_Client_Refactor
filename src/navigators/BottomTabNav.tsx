import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeNav from './HomeNav'
import MyRoutineNav from './MyRoutine'
import ExerciseNav from './ExerciseNav'
import DictionaryNav from './DictionaryNav'
import MyPageNav from './MyPageNav'

const Tabs = createBottomTabNavigator()

export default function BottomTabNav() {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="HomeNav" component={HomeNav} />
      <Tabs.Screen name="MyRoutineNav" component={MyRoutineNav} />
      <Tabs.Screen name="ExerciseNav" component={ExerciseNav} />
      <Tabs.Screen name="DictionaryNav" component={DictionaryNav} />
      <Tabs.Screen name="MyPageNav" component={MyPageNav} />
    </Tabs.Navigator>
  )
}

import { createStackNavigator } from '@react-navigation/stack'
import Home from '@/pages/Home/Home'
import ExerciseMain from '@/pages/Exercise/ExerciseMain'
import StartExercise from '@/pages/Exercise/StartExercise'

const Stack = createStackNavigator()

export default function ExerciseNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShown: false,
      }}
    >
      <Stack.Screen name="StartExercise" component={StartExercise} />
      <Stack.Screen name="ExerciseMain" component={ExerciseMain} />
    </Stack.Navigator>
  )
}

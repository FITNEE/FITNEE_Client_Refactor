import { createStackNavigator } from '@react-navigation/stack'
import Home from '@/pages/home/Home'
import ExerciseMain from '@/pages/Exercise/ExerciseMain'
import StartExercise from '@/pages/Exercise/StartExercise'
import ExerciseCourse from '@/pages/Exercise/ExerciseCourse'

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
      <Stack.Screen name="ExerciseCourse" component={ExerciseCourse} />
    </Stack.Navigator>
  )
}

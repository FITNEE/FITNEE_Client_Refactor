import { createStackNavigator } from '@react-navigation/stack'
import Home from '@/pages/Home/Home'
import Exercise from '@/pages/Exercise/StartExercise'
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
      <Stack.Screen name="ExerciseMain" component={StartExercise} />
    </Stack.Navigator>
  )
}

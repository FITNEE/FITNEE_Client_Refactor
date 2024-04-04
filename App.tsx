import { NavigationContainer } from '@react-navigation/native'
import BottomTabNav from '@/navigators/BottomTabNav'

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNav />
    </NavigationContainer>
  )
}

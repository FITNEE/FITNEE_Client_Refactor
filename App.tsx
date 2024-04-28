import { NavigationContainer } from '@react-navigation/native'
import BottomTabNav from '@/navigators/BottomTabNav'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { View } from 'react-native'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Thin: require('./src/assets/fonts/Pretendard-Thin.otf'), // 100
    ExtraLight: require('./src/assets/fonts/Pretendard-ExtraLight.otf'), //200
    Light: require('./src/assets/fonts/Pretendard-Light.otf'), // 300
    Regular: require('./src/assets/fonts/Pretendard-Regular.otf'), // 400
    Medium: require('./src/assets/fonts/Pretendard-Medium.otf'), // 500
    SemiBold: require('./src/assets/fonts/Pretendard-SemiBold.otf'), // 600
    Bold: require('./src/assets/fonts/Pretendard-Bold.otf'), // 700
    ExtraBold: require('./src/assets/fonts/Pretendard-ExtraBold.otf'), //800
    Black: require('./src/assets/fonts/Pretendard-Black.otf'), // 900
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <BottomTabNav />
      </NavigationContainer>
    </View>
  )
}

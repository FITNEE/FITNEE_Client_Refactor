import { colors } from '@/libs/Colors'
import { Keyboard, Pressable, KeyboardAvoidingView } from 'react-native'
import styled from 'styled-components/native'

interface KeyboardAvoidLayoutProps {
  children: React.ReactNode
  background: string
}

export default function KeyboardAvoidLayout({ children, background = colors.white }: KeyboardAvoidLayoutProps) {
  const dismissKeyboard = () => {
    Keyboard.dismiss()
  }

  return (
    <ScreenContainer style={{ backgroundColor: background }}>
      <Pressable style={{ flex: 1 }} onPress={dismissKeyboard}>
        <KeyboardAvoidingView keyboardVerticalOffset={12} style={{ flex: 1 }}>
          {children}
        </KeyboardAvoidingView>
      </Pressable>
    </ScreenContainer>
  )
}

const ScreenContainer = styled.SafeAreaView`
  flex: 1;
`

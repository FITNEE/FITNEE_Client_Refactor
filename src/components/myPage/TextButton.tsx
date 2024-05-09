import { colors } from '@/libs/Colors'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { useAtom } from 'jotai'
import { Platform } from 'react-native'
import styled from 'styled-components/native'

interface ButtonProps {
  enabled: boolean
  onPress: any
  text: string
}

export const Button = ({ enabled, onPress, text = '확인' }: ButtonProps) => {
  const [isDark] = useAtom(isDarkModeAtom)
  return (
    <MyButton
      disabled={!enabled}
      onPress={onPress}
      style={[
        { marginBottom: Platform.OS == 'android' ? 24 : 64 },
        enabled
          ? {
              backgroundColor: colors.main1,
            }
          : { backgroundColor: isDark ? colors.grey8 : colors.grey3 },
      ]}
    >
      <ButtonText
        style={
          enabled ? { color: isDark ? colors.black : colors.white } : { color: isDark ? colors.white : colors.grey7 }
        }
      >
        {text}
      </ButtonText>
    </MyButton>
  )
}
const MyButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 52px;
  border-radius: 16px;
  width: 100%;
  max-width: 480px;
  margin-bottom: 64px;
`
const ButtonText = styled.Text`
  font-size: 17px;
  font-family: 'SemiBold';
`

import { colors } from '@/libs/Colors'
import Toast, { ToastConfigParams } from 'react-native-toast-message'
import styled from 'styled-components/native'
import CheckIcon from '@/assets/images/SVGs/icon/Check_Circled.svg'
import { screenWidth } from '@/libs/Dimensions'

export const toastConfig = {
  customToast: ({ text1 }: ToastConfigParams<string>) => (
    <ToastBG>
      <ToastText>{text1}</ToastText>
      <CheckIcon width={24} height={24} color={colors.white} />
    </ToastBG>
  ),
}

export default function ToastMessage(text: string) {
  Toast.show({
    type: 'customToast',
    text1: text,
    visibilityTime: 2200,
    topOffset: 56,
  })
}

const width = screenWidth - 48
const ToastBG = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${`${width}px`};
  border-radius: 12px;
  padding: 12px 16px;
  background-color: ${colors.grey9};
`
const ToastText = styled.Text`
  color: ${colors.white};
  font-size: 13px;
  font-family: 'SemiBold';
`

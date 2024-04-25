import styled from 'styled-components/native'
import { colors } from '@/libs/Colors'

interface ButtonProps {
  onPress?: Function
  disabled: boolean
  text: string
  isDark: boolean
}

export default function ExerciseButton({ onPress, disabled, text, isDark }: ButtonProps) {
  return (
    <Button disabled={disabled} onPress={onPress}>
      <ButtonText isDark={isDark}>{text}</ButtonText>
    </Button>
  )
}

const Button = styled.TouchableOpacity`
  width: 247px;
  height: 52px;
  border-radius: 120px;
  background: ${colors.main1};
  justify-content: center;
  margin-top: 19px;
  position: relative;
`
const ButtonText = styled.Text`
  color: ${(props: { isDark: boolean }) => (props.isDark ? colors.black : colors.white)};
  text-align: center;
  font-size: 17px;
  font-family: Pretendard-SemiBold;
  line-height: 25.5px;
`

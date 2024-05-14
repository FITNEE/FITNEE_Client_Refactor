import { colors } from '@/libs/Colors'
import styled from 'styled-components/native'

interface InputProps {
  placeholder?: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  isError: boolean
  errorText: string
  isPassword: boolean
  onPressEnter: () => void
}

export default function Input({
  placeholder,
  value,
  setValue,
  isError = false,
  errorText,
  isPassword = false,
  onPressEnter,
}: InputProps) {
  return (
    <Container>
      <Message>{isError ? errorText : ''}</Message>
      <InputWrapper
        placeholder={placeholder}
        placeholderTextColor={colors.grey5}
        value={value}
        onChangeText={(input: string) => setValue(input)}
        secureTextEntry={isPassword}
        autoCapitalize="none"
        style={{ borderColor: isError ? colors.red : 'transparent' }}
        onSubmitEditing={onPressEnter}
      />
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
  gap: 2px;
`
const Message = styled.Text`
  font-family: 'Regular';
  font-size: 11px;
  align-self: flex-end;
  color: ${colors.red};
`
const InputWrapper = styled.TextInput<{ isError: boolean }>`
  padding: 12px 16px;
  background-color: ${colors.white};
  font-size: 16px;
  border-radius: 8px;
  width: 100%;
  border-width: 1px;
`

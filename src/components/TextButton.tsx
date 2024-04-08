import { colors } from '@/libs/Colors'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

interface TextButtonProps {
  text: string
  disabled?: boolean
  onPress?: () => void
}

export default function TextButton({
  text,
  disabled,
  onPress,
}: TextButtonProps) {
  return (
    <Button disabled={disabled} onPress={onPress}>
      <ButtonText disabled={disabled}>{text}</ButtonText>
    </Button>
  )
}

const Button = styled(TouchableOpacity)`
  border-radius: 12px;
  background-color: ${(props: { disabled: boolean }) =>
    props.disabled ? colors.grey3 : colors.main1};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 52px;
`
const ButtonText = styled.Text<{ disabled: boolean }>`
  color: ${(props: { disabled: boolean }) =>
    props.disabled ? colors.black : colors.white};
  font-family: 'SemiBold';
  font-size: 17px;
`

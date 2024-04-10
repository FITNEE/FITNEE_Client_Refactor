import { colors } from '@/libs/Colors'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

interface TextButtonProps {
  text: string
  disabled?: boolean
  onPress?: () => void
}

/**
 * TextButton 은 주로 화면 하단에 사용되는 Text 가 포함된 Button 입니다
 * @props text - 버튼Text
 * @props disabled - 버튼이 disabled 되는 기준
 * @props onPress - 버튼이 클릭되었을 때 실행될 함수
 * @example
 * <TextButton text='운동하러 가기' disabled={true} onPress={()=>navigation.nativate('/Home')}>
 */

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

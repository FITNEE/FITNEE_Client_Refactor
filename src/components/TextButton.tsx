import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

interface TextButtonProps {
  size?: number
  text: string
  radius?: number
  disabled?: boolean
  onClick: () => void
}

export default function TextButton() {
  return (
    <TouchableOpacity>
      <Text></Text>
    </TouchableOpacity>
  )
}

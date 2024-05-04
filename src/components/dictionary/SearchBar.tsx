import { colors } from '@/libs/Colors'
import React from 'react'
import styled from 'styled-components/native'
import SearchIcon from '@/assets/images/SVGs/icon/Search.svg'
import CloseIcon from '@/assets/images/SVGs/icon/Close_Circled.svg'
import { useAtom } from 'jotai'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

interface SearchBarProps {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
  onSubmit?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
}

export default function SearchBar({ text, setText, onSubmit }: SearchBarProps) {
  const [isDark] = useAtom(isDarkModeAtom)

  const onPressResetIcon = () => {
    setText('')
  }
  const onChangeText = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setText(e.nativeEvent.text)
  }

  return (
    <Container>
      <Background>
        <SearchIcon width={24} height={24} color={colors.black} />
        <SearchArea
          keyboardAppearance={isDark ? 'dark' : 'light'}
          placeholder="운동명 검색"
          placeholderTextColor={isDark ? colors.grey3 : colors.grey7}
          returnKeyType="search"
          value={text}
          onChange={onChangeText}
          autofocus
          onSubmitEditing={onSubmit}
        />
        {text.length !== 0 && <CloseIcon width={24} height={24} color={colors.grey4} onPress={onPressResetIcon} />}
      </Background>
    </Container>
  )
}

export const Container = styled.View`
  height: 56px;
  padding: 8px 24px;
`

export const Background = styled.View`
  background-color: ${colors.grey1};
  border-radius: 12px;
  width: 100%;
  padding: 8px 12px;
  flex-direction: row;
  gap: 12px;
`
export const SearchArea = styled.TextInput`
  color: ${colors.black};
  flex: 1;
  font-family: 'Regular';
  font-size: 16px;
`

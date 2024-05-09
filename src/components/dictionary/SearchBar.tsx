import { colors } from '@/libs/Colors'
import React from 'react'
import styled from 'styled-components/native'
import SearchIcon from '@/assets/images/SVGs/icon/Search.svg'
import CloseIcon from '@/assets/images/SVGs/icon/Close_Circled.svg'
import { useAtom } from 'jotai'
import { isDarkModeAtom } from '@/states/GlobalStates'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import { SearchStatusAtom, SearchTextAtom } from '@/states/DictionaryStates'

export default function SearchBar() {
  const [isDark] = useAtom(isDarkModeAtom)
  const [searchText, setSearchText] = useAtom(SearchTextAtom)
  const [searchStatus, setSearchStatus] = useAtom(SearchStatusAtom)

  const onPressResetIcon = () => {
    setSearchText('')
    setSearchStatus('noText')
  }
  const onChangeText = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setSearchText(e.nativeEvent.text)

    if (e.nativeEvent.text.length === 0) setSearchStatus('noText')
    else setSearchStatus('typing')
  }

  const onSubmit = () => {
    setSearchStatus('done')
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
          value={searchText}
          onChange={onChangeText}
          autofocus
          onSubmitEditing={onSubmit}
        />
        {searchText.length !== 0 && (
          <CloseIcon width={24} height={24} color={colors.grey4} onPress={onPressResetIcon} />
        )}
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

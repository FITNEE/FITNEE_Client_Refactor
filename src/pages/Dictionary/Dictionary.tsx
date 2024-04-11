import ScreenLayout from '@/components/ScreenLayout'
import AutoCompleteList from '@/components/dictionary/AutoCompleteList'
import KeywordList from '@/components/dictionary/KeywordList'
import SearchBar from '@/components/dictionary/SearchBar'
import { colors } from '@/libs/Colors'
import React, { useState } from 'react'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import styled from 'styled-components/native'

export default function Dictionary() {
  const [searchText, setSearchText] = useState<string>('')

  return (
    <ScreenLayout>
      <SearchBar text={searchText} setText={setSearchText} />
      {searchText.length === 0 ? (
        <>
          <Divider />
          <KeywordList
            title="최근 검색 키워드"
            keywords={['데드리프트', '사이드 레터럴 레이즈']}
            style={{ marginTop: 40 }}
          />
          <KeywordList
            title="인기 키워드"
            keywords={['데드리프트', '사이드 레터럴 레이즈']}
            style={{ marginTop: 56 }}
          />
        </>
      ) : (
        <AutoCompleteList
          keyword={searchText}
          list={['데드리프트', '이사이드 레터럴 사이즈']}
        />
      )}
    </ScreenLayout>
  )
}

const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${colors.grey2};
`

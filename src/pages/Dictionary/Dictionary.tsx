import ScreenLayout from '@/components/ScreenLayout'
import SearchBar from '@/components/dictionary/SearchBar'
import { colors } from '@/libs/Colors'
import React, { useState } from 'react'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

export default function Dictionary() {
  const [searchText, setSearchText] = useState<string>('')

  return (
    <ScreenLayout>
      <SearchBar text={searchText} setText={setSearchText} />
    </ScreenLayout>
  )
}

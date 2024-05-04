import ScreenLayout from '@/components/ScreenLayout'
import AutoCompleteList from '@/components/dictionary/AutoCompleteList'
import KeywordList from '@/components/dictionary/KeywordList'
import PartList from '@/components/dictionary/PartList'
import SearchBar from '@/components/dictionary/SearchBar'
import SearchItem from '@/components/dictionary/SearchItem'
import { colors } from '@/libs/Colors'
import { DictionaryNavParams } from '@/navigators/DictionaryNav'
import { SearchTextAtom } from '@/states/DictionaryStates'
import { StackScreenProps } from '@react-navigation/stack'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import styled from 'styled-components/native'

type DictionaryMainProps = StackScreenProps<DictionaryNavParams, 'DictionaryMain'>

export default function DictionaryMain({ navigation }: DictionaryMainProps) {
  const [searchText, setSearchText] = useAtom(SearchTextAtom)
  const [isDone, setIsDone] = useState<boolean>(false)

  const onSubmitEdit = () => {
    setIsDone(true)
  }

  useEffect(() => {
    isDone && setIsDone(false)
  }, [searchText])

  return (
    <ScreenLayout>
      <SearchBar text={searchText} setText={setSearchText} onSubmit={onSubmitEdit} />
      {isDone ? (
        <>
          <PartList />
          <SearchItemContainer showsVerticalScrollIndicator={false}>
            <SearchItem name="데드리프트" part={['전신', '코어']} exerciseId={1} />
          </SearchItemContainer>
        </>
      ) : searchText.length === 0 ? (
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
        <AutoCompleteList keyword={searchText} list={['데드리프트', '이사이드 레터럴 사이즈']} />
      )}
    </ScreenLayout>
  )
}

const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${colors.grey2};
`
const SearchItemContainer = styled.ScrollView`
  height: 100%;
  width: 100%;
`

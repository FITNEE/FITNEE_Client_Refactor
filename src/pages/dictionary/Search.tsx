import ScreenLayout from '@/components/ScreenLayout'
import AutoCompleteList from '@/components/dictionary/AutoCompleteList'
import PartList from '@/components/dictionary/PartList'
import SearchBar from '@/components/dictionary/SearchBar'
import SearchItem from '@/components/dictionary/SearchItem'
import { SearchTextAtom } from '@/states/DictionaryStates'
import { useAtom } from 'jotai'
import styled from 'styled-components/native'

export default function DictionarySearch() {
  const [searchText, setSearchText] = useAtom(SearchTextAtom)

  return (
    <ScreenLayout>
      <SearchBar text={searchText} setText={setSearchText} disabled={false} />
      {searchText.length === 0 ? (
        <AutoCompleteList keyword={searchText} list={['데드리프트', '이사이드 레터럴 사이즈']} />
      ) : (
        <>
          <PartList />
          <SearchItemContainer showsVerticalScrollIndicator={false}>
            <SearchItem name="데드리프트" part={['전신', '코어']} exerciseId={1} />
          </SearchItemContainer>
        </>
      )}
    </ScreenLayout>
  )
}

const SearchItemContainer = styled.ScrollView`
  height: 100%;
  width: 100%;
`

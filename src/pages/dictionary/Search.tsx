import ScreenLayout from '@/components/ScreenLayout'
import PartList from '@/components/dictionary/PartList'
import SearchBar from '@/components/dictionary/SearchBar'
import SearchItem from '@/components/dictionary/SearchItem'
import { SearchTextAtom } from '@/states/DictionaryStates'
import { useAtom } from 'jotai'
import styled from 'styled-components/native'

export default function Search() {
  const [searchText, setSearchText] = useAtom(SearchTextAtom)
  return (
    <ScreenLayout>
      <SearchBar text={searchText} setText={setSearchText} />
      <PartList />
      <SearchItemContainer showsVerticalScrollIndicator={false}>
        <SearchItem name="데드리프트" part={['전신', '코어']} exerciseId={1} />
      </SearchItemContainer>
    </ScreenLayout>
  )
}

const SearchItemContainer = styled.ScrollView`
  height: 100%;
  width: 100%;
`

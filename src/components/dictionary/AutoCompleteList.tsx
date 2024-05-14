import { colors } from '@/libs/Colors'
import { SearchStatusAtom, SearchTextAtom } from '@/states/DictionaryStates'
import { useAtom } from 'jotai'
import React from 'react'
import styled from 'styled-components/native'

interface AutoCompleteListProps {
  keyword: string
  list: string[]
}
export default function AutoCompleteList({ keyword, list }: AutoCompleteListProps) {
  const [, setSearchText] = useAtom(SearchTextAtom)
  const [, setSearchStatus] = useAtom(SearchStatusAtom)

  const splitString = (text: string): string[] => {
    const regex = new RegExp(`(${keyword})`, 'g')
    return text.split(regex).filter(Boolean)
  }

  const onPressKeyword = (keyword: string) => {
    setSearchStatus('done')
    setSearchText(keyword)
  }

  return (
    <Container showsVerticalScrollIndicator={false}>
      {list.map((text, index) => {
        const splitedText: string[] = splitString(text)
        return (
          <TextContainer key={index} onPress={() => onPressKeyword(text)}>
            <ListText>
              {splitedText.map((word, i) =>
                word === keyword ? <MatchedText key={i}>{word}</MatchedText> : <ListText key={word}>{word}</ListText>,
              )}
            </ListText>
          </TextContainer>
        )
      })}
    </Container>
  )
}
const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
`

const TextContainer = styled.TouchableOpacity`
  border-top-width: 1px;
  border-top-color: ${colors.grey2};
  padding: 16px 24px;
`
const ListText = styled.Text`
  font-family: 'Medium';
  font-size: 15px;
  color: ${colors.black};
`
const MatchedText = styled(ListText)`
  color: ${colors.main1};
`

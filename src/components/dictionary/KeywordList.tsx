import { colors } from '@/libs/Colors'
import React from 'react'
import styled from 'styled-components/native'

interface KeywordListProps {
  title: string
  keywords: string[]
  style?: React.CSSProperties
}

export default function KeywordList({
  title,
  keywords,
  style,
}: KeywordListProps) {
  const onPressKeyword = (keyword: string) => {
    // 검색, 검색키워드 저장 api
  }
  return (
    <Container style={{ ...style }}>
      <Title>{title}</Title>
      <KeywordContainer>
        {keywords.map((keyword) => (
          <KeywordWrapper onPress={() => onPressKeyword(keyword)}>
            <KeywordText>{keyword}</KeywordText>
          </KeywordWrapper>
        ))}
      </KeywordContainer>
    </Container>
  )
}

const Container = styled.View`
  padding: 0 22px;
  gap: 16px;
  width: 100%;
`
const Title = styled.Text`
  color: ${colors.black};
  font-family: 'SemiBold';
  font-size: 15px;
`
const KeywordContainer = styled.View`
  gap: 4px;
  flex-direction: row;
  flex-wrap: wrap;
`
const KeywordWrapper = styled.TouchableOpacity`
  border-radius: 100px;
  background-color: ${colors.grey1};
  padding: 10px 14px;
`
const KeywordText = styled.Text`
  font-family: 'SemiBold';
  font-size: 13px;
  color: ${colors.grey7};
`

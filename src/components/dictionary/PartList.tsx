import styled from 'styled-components/native'
import React, { useState } from 'react'
import { colors } from '@/libs/Colors'

export default function PartList() {
  const [parts, setParts] = useState([
    { name: '어깨', isSelected: false },
    { name: '상체', isSelected: false },
    { name: '가슴', isSelected: false },
    { name: '등', isSelected: false },
    { name: '복근', isSelected: false },
    { name: '하체', isSelected: false },
    { name: '엉덩이', isSelected: false },
    { name: '유산소', isSelected: false },
  ])
  const clickPart = (index: number) => {
    const temp = [...parts]
    temp[index].isSelected = !temp[index].isSelected
    setParts(temp)
  }

  return (
    <Container horizontal showsHorizontalScrollIndicator={false}>
      <Wrapper>
        {parts.map((part, i) =>
          part.isSelected ? (
            <SelectedPartWrapper onPress={() => clickPart(i)} key={i}>
              <SelectedPartText>{part.name}</SelectedPartText>
            </SelectedPartWrapper>
          ) : (
            <PartWrapper onPress={() => clickPart(i)} key={i}>
              <PartText>{part.name}</PartText>
            </PartWrapper>
          )
        )}
      </Wrapper>
    </Container>
  )
}

const Container = styled.ScrollView`
  width: 100%;
  padding: 8px 24px;
  border-bottom-color: ${colors.grey2};
  border-bottom-width: 1px;
  gap: 8px;
  flex-shrink: 0;
`
const Wrapper = styled.View`
  flex-direction: row;
  gap: 8px;
`
const PartWrapper = styled.TouchableOpacity`
  border-radius: 100px;
  background-color: ${colors.grey1};
  padding: 8px 20px;
  height: 37px;
  justify-content: center;
`
const PartText = styled.Text`
  font-family: 'SemiBold';
  font-weight: 600;
  color: ${colors.grey6};
`
const SelectedPartWrapper = styled.TouchableOpacity`
  border-radius: 100px;
  background-color: ${colors.main2};
  padding: 8px 20px;
  height: 37px;
  justify-content: center;
`
const SelectedPartText = styled.Text`
  font-family: 'SemiBold';
  font-weight: 600;
  color: ${colors.main1};
`

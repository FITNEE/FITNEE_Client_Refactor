import { colors } from '@/libs/Colors'
import styled from 'styled-components/native'

interface ProcessProps {
  index: number
  title: string
  description: string
}

export default function Process({ index, title, description }: ProcessProps) {
  return (
    <Container>
      <Index>{String(index).padStart(2, '0')}</Index>
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
    </Container>
  )
}

const Container = styled.View`
  border-radius: 12px;
  background-color: ${colors.grey1};
  padding: 20px 24px;
  flex-direction: row;
  gap: 8px;
  width: 100%;
`
const Index = styled.Text`
  color: ${colors.main1};
  font-size: 15px;
  font-family: 'SemiBold';
  width: 20px;
`
const TextContainer = styled.View`
  gap: 4px;
  width: 100%;
  padding-right: 24px;
`
const Title = styled.Text`
  font-family: 'SemiBold';
  font-size: 15px;
  color: ${colors.black};
`
const Description = styled.Text`
  font-family: 'Regular';
  font-size: 13px;
  color: ${colors.black};
  width: 100%;
  text-align: justify;
  line-height: 20px;
`

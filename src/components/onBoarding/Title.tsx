import { colors } from '@/libs/Colors'
import styled from 'styled-components/native'

interface TitleProps {
  title: string
  subTitle?: string
}

export default function Title({ title, subTitle }: TitleProps) {
  return (
    <Container>
      <TitleText>{title}</TitleText>
      <SubtitleText>{subTitle}</SubtitleText>
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
  gap: 8px;
`
const TitleText = styled.Text`
  color: ${colors.black};
  font-family: 'SemiBold';
  font-size: 24px;
`
const SubtitleText = styled.Text`
  color: ${colors.black};
  font-family: 'Regular';
  font-size: 13px;
`

import { colors } from '@/libs/Colors'
import styled from 'styled-components/native'
import CautionIcon from '@/assets/images/SVGs/icon/Caution.svg'

interface CautionProps {
  description: string[]
}

export default function Caution({ description }: CautionProps) {
  return (
    <Container>
      <TitleContainer>
        <CautionIcon width={20} height={20} />
        <Title>이 부분은 특히 주의해주세요!</Title>
      </TitleContainer>
      <Content>
        {description.map((info) => (
          <Wrapper>
            <Label />
            <Description>{info}</Description>
          </Wrapper>
        ))}
      </Content>
    </Container>
  )
}
const Container = styled.View`
  gap: 16px;
  width: 100%;
`
const TitleContainer = styled.View`
  gap: 4px;
  flex-direction: row;
`
const Title = styled.Text`
  font-size: 15px;
  font-family: 'SemiBold';
  color: ${colors.black};
`
const Content = styled.View`
  padding: 24px;
  background-color: ${colors.grey1};
  width: 100%;
  border-radius: 12px;
  gap: 6px;
`
const Wrapper = styled.View`
  flex-direction: row;
  gap: 4px;
  align-items: center;
`
const Label = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${colors.main2};
`
const Description = styled.Text`
  font-family: 'Regular';
  font-size: 13px;
  color: ${colors.black};
`

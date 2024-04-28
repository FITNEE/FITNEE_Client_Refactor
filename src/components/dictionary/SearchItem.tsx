import { colors } from '@/libs/Colors'
import styled from 'styled-components/native'
import RightIcon from '@/assets/images/SVGs/icon/RightArrow.svg'

interface SearchItemProps {
  name: string
  part: string[]
  exerciseId: number
}

export default function SearchItem({
  name,
  part,
  exerciseId,
}: SearchItemProps) {
  return (
    <Container>
      <Left>
        <ImageThumb />
        <InfoContainer>
          <Name>데드리프트</Name>
          <Parts>전신 | 코어 | 바벨</Parts>
        </InfoContainer>
      </Left>
      <RightIcon width={24} height={24} color={colors.black} />
    </Container>
  )
}

const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Left = styled.View`
  flex-direction: row;
  gap: 16px;
  align-items: center;
`
const ImageThumb = styled.View`
  background-color: ${colors.grey1};
  width: 60px;
  height: 60px;
  border-radius: 30px;
`
const InfoContainer = styled.View`
  gap: 4px;
`
const Name = styled.Text`
  color: ${colors.black};
  font-family: 'Medium';
  font-size: 17px;
`
const Parts = styled.Text`
  font-family: 'Regular';
  font-size: 13px;
  color: ${colors.grey7};
`

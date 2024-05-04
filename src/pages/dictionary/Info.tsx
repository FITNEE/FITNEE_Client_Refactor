import ScreenLayout from '@/components/ScreenLayout'
import styled from 'styled-components/native'
import BackIcon from '@/assets/images/SVGs/icon/LeftArrow.svg'
import { TouchableOpacity } from 'react-native'
import { colors } from '@/libs/Colors'
import DictionaryBottomSheet from '@/components/dictionary/BottomSheet'
import { getGIF } from '@/utils/getImage'
import AddtoRoutineModal from '@/components/dictionary/AddToRoutineModal'

export default function DictionaryInfo() {
  return (
    <ScreenLayout lightBack={colors.grey1}>
      <AddtoRoutineModal />
      <TopContainer>
        <TouchableOpacity>
          <BackIcon width={24} height={24} color={colors.black} />
        </TouchableOpacity>
      </TopContainer>
      <GifWrapper>
        <Gif source={getGIF[1]} />
      </GifWrapper>
      <DictionaryBottomSheet />
    </ScreenLayout>
  )
}

const GifWrapper = styled.View`
  align-self: center;
  width: 75%;
`
const Gif = styled.Image`
  aspect-ratio: 1;
  width: 100%;
  height: undefined;
`
const TopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 24px;
`

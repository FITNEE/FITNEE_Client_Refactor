//alert 함수 모음
import { Alert } from 'react-native'

//운동중단 경고 alert 함수
export const StopConfirm = (goToStart: Function) => {
  Alert.alert('현재 진행중인 운동루틴을 중단하시겠습니까?', '현재까지 운동하신 내용은 저장되지 않습니다.', [
    { text: '취소', onPress: () => console.log('Cancel Stop') },
    {
      text: '운동 중단하기',
      onPress: () => goToStart(),
      style: 'destructive',
    },
  ])
}

//운동스킵 경고 alert 함수
export const SkipConfirm = (goToNext: Function) => {
  Alert.alert('운동을 건너뛰겠습니까?', '건너뛴 이후에는 다시 실행할 수 없습니다.', [
    { text: '취소', onPress: () => console.log('Skip Stop') },
    {
      text: '건너뛰기',
      onPress: () => goToNext(),
      style: 'destructive',
    },
  ])
}

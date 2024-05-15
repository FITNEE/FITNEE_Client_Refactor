interface WeekDataProps {
  weekNumber: string
  weeklyCalories: number
  weeklyDistance: number
  weeklyExerciseTime: number
  numberOfWeeks: number | string
  ifWeek1: number
}

export function calculateWeeksInMonth(month: number) {
  const now = new Date()
  const year = now.getFullYear()
  const daysInMonth = new Date(year, month, 0).getDate() // 해당 달의 마지막 날짜

  const firstDay = new Date(year, month - 1, 1).getDay() // 해당 달의 첫 번째 날짜의 요일
  const lastDay = new Date(year, month - 1, daysInMonth).getDay() // 해당 달의 마지막 날짜의 요일

  if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
    // 31일
    if (firstDay === 0 || firstDay === 6) {
      return 6 // 1일이 토요일 또는 일요일인 경우 6주
    } else {
      return 5 // 그 외의 경우 5주
    }
  } else if ([4, 6, 9, 11].includes(month)) {
    // 30일
    if (firstDay === 0) {
      return 6 // 1일이 일요일인 경우 6주
    } else {
      return 5 // 그 외의 경우 5주
    }
  } else if (month === 2) {
    // 2월
    if (firstDay === 1) {
      return 4 // 1일이 월요일인 경우 4주
    } else {
      return 5 // 그 외의 경우 5주
    }
  }
}

export function combineWeek(
  isFirstWeek: number[],
  LabelData: string[],
  KmData: number[],
  KcalData: number[],
  weekData: WeekDataProps[],
) {
  const LabelArray = []
  const KcalArray = []
  const KmArray = []

  for (let i = 0; i < isFirstWeek.length; i++) {
    if (i === isFirstWeek.length - 1) {
      LabelArray.push('이번주'), KcalArray.push(`${KcalData[i]}`), KmArray.push(`${KmData[i]}`)
    } else {
      const monthIndex = LabelData[i].indexOf('월')
      let month = parseInt(LabelData[i].slice(0, monthIndex))
      const year = new Date().getFullYear()
      let date = new Date(year, month, 1)
      const dayOfWeek = date.getDay()
      if (typeof weekData[i].numberOfWeeks === 'string') {
        if (LabelData[i].includes('5째 주')) {
          if (calculateWeeksInMonth(month) == 5)
            if (dayOfWeek != 1) {
              LabelArray.push(`5주/${LabelData[i + 1].replace(/째 /g, '')}`)
              KcalArray.push(`${KcalData[i] + KcalData[i + 1]}`)
              KmArray.push(`${KmData[i] + KcalData[i + 1]}`)
              i = i + 1
            } else {
              LabelArray.push(`${LabelData[i].replace(/째 /g, '')}`)
              KcalArray.push(`${KcalData[i]}`)
              KmArray.push(`${KmData[i]}`)
            }
          else {
            LabelArray.push(`${LabelData[i].replace(/째 /g, '')}`)
            KcalArray.push(`${KcalData[i]}`)
            KmArray.push(`${KmData[i]}`)
          }
        } else if (LabelData[i].includes('6째 주')) {
          if (calculateWeeksInMonth(month) == 6)
            if (dayOfWeek != 1) {
              LabelArray.push(`6주/${LabelData[i + 1].replace(/째 /g, '')}`)
              KcalArray.push(`${KcalData[i] + KcalData[i + 1]}`)
              KmArray.push(`${KmData[i] + KcalData[i + 1]}`)
              i = i + 1
            }
        } else {
          LabelArray.push(`${LabelData[i].replace(/째 /g, '')}`)
          KcalArray.push(`${KcalData[i]}`)
          KmArray.push(`${KmData[i]}`)
        }
      } else {
        if (LabelData[i].includes('5째 주')) {
          if (calculateWeeksInMonth(month) == 5)
            if (dayOfWeek != 1) {
              LabelArray.push(`5주/${LabelData[i + 2].replace(/째 /g, '')}`)
              KcalArray.push(`${KcalData[i] + KcalData[i + 2]}`)
              KmArray.push(`${KmData[i] + KcalData[i + 2]}`)
              i = i + 2
            } else {
              LabelArray.push(`${LabelData[i].replace(/째 /g, '')}`)
              KcalArray.push(`${KcalData[i]}`)
              KmArray.push(`${KmData[i]}`)
              i = i + 1
            }
          else {
            LabelArray.push(`${LabelData[i].replace(/째 /g, '')}`)
            KcalArray.push(`${KcalData[i]}`)
            KmArray.push(`${KmData[i]}`)
          }
        } else if (LabelData[i].includes('6째 주')) {
          if (calculateWeeksInMonth(month) == 6)
            if (dayOfWeek != 1) {
              LabelArray.push(`6주/${LabelData[i + 1].replace(/째 /g, '')}`)
              KcalArray.push(`${KcalData[i] + KcalData[i + 1]}`)
              KmArray.push(`${KmData[i] + KcalData[i + 1]}`)
              i = i + 1
            }
        } else {
          LabelArray.push(`${LabelData[i].replace(/째 /g, '')}`)
          KcalArray.push(`${KcalData[i]}`)
          KmArray.push(`${KmData[i]}`)
        }
      }
    }
  }
  const total = [
    {
      kmdata: KmArray,
      kcaldata: KcalArray,
      label: LabelArray,
    },
  ]
  return total
}

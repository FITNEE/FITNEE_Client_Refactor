import React, { useCallback, useState } from 'react'
import { Calendar, CalendarProps, LocaleConfig } from 'react-native-calendars'
import { colors } from '@/libs/Colors'
import { Dimensions, TextStyle, ViewStyle } from 'react-native'
import { format } from 'date-fns'
import Left from '../../assets/images/SVGs/icon/Left.svg'
import Right from '../../assets/images/SVGs/icon/Right.svg'
import { useFocusEffect, useIsFocused } from '@react-navigation/native'
import { useAtom } from 'jotai'
import { isDarkModeAtom } from '@/states/GlobalStates'

interface Props {
  dayFunction: (text: { dateString: string }) => void
  exerciseDays: string[]
  setMonth: (month: number) => void
}

type ExerciseDayType = { [date: string]: { selected: boolean } }

type HeaderStyleSheet = {
  'stylesheet.calendar.header': Record<'monthText', TextStyle>
}

LocaleConfig.locales['ko'] = {
  monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
}
LocaleConfig.defaultLocale = 'ko'

export default function CalendarView(props: Props) {
  const [isDark] = useAtom(isDarkModeAtom)
  const [key, setKey] = useState(0)
  const windowWidth = Dimensions.get('window').width

  useFocusEffect(
    useCallback(() => {
      setKey(prevKey => prevKey + 1)
    }, []),
  )

  const today = format(new Date(), 'yyyy-MM-dd')
  const days = props.exerciseDays.map(day => format(new Date(day), 'yyyy-MM-dd'))
  const exerciseDay: ExerciseDayType = days.reduce((acc, current) => {
    const formattedDate = format(new Date(current), 'yyyy-MM-dd')
    acc[formattedDate] = { selected: true }
    return acc
  }, {} as ExerciseDayType)

  const [selectedDate, setSelectedDate] = useState('')

  const customTheme: CalendarProps['theme'] & HeaderStyleSheet = {
    calendarBackground: isDark ? colors.grey9 : colors.white,
    textDayHeaderFontFamily: 'Regular',
    textDayFontSize: 13,
    textDayFontFamily: 'Regular',
    textDayStyle: {
      color: isDark ? colors.grey5 : colors.grey4,
    },
    textSectionTitleColor: isDark ? colors.grey2 : colors.grey7,
    'stylesheet.calendar.header': {
      monthText: {
        fontFamily: 'SemiBold',
        fontSize: 15,
        color: isDark ? colors.white : colors.black,
        margin: 24,
      },
    },
    selectedDayTextColor: isDark ? colors.white : colors.grey9,
    selectedDayBackgroundColor: 'transparent',
  }

  return (
    <Calendar
      key={key}
      monthFormat="yyyy. MM"
      renderArrow={direction => {
        if (direction == 'left')
          return <Left style={{ marginLeft: windowWidth / 4 - 30 }} width={20} height={20} color={colors.grey5} />
        if (direction == 'right')
          return <Right style={{ marginRight: windowWidth / 4 - 21 }} width={20} height={20} color={colors.grey5} />
      }}
      onMonthChange={month => props.setMonth(month.month)}
      markedDates={{
        ...exerciseDay,
        [today]: {
          selected: true,
          selectedColor: isDark ? colors.grey7 : colors.grey2,
          selectedTextColor: isDark ? colors.white : colors.grey9,
        },
        [selectedDate]: {
          ...exerciseDay[selectedDate],
          selected: true,
          selectedColor: colors.main1,
          selectedTextColor: isDark ? colors.grey9 : colors.white,
          customStyles: {
            text: {
              fontFamily: 'SemiBold',
            },
          },
        },
      }}
      theme={customTheme}
      onDayPress={pressDay => {
        props.dayFunction(pressDay)
        setSelectedDate(pressDay.dateString)
      }}
      hideExtraDays={true}
    />
  )
}

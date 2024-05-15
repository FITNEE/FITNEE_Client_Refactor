import React, { useCallback, useState } from 'react'
import { Calendar, CalendarProps, LocaleConfig } from 'react-native-calendars'
import { colors } from '@/libs/Colors'
import { Dimensions, TextStyle, ViewStyle } from 'react-native'
import { format } from 'date-fns'
import Left from '../../assets/images/SVGs/icon/Left.svg'
import Right from '../../assets/images/SVGs/icon/Right.svg'
import { useFocusEffect, useIsFocused } from '@react-navigation/native'
import { screenWidth } from '@/libs/Dimensions'

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
  const [key, setKey] = useState(0)

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
    calendarBackground: colors.white,
    textDayHeaderFontFamily: 'Regular',
    textDayFontSize: 13,
    textDayFontFamily: 'Regular',
    textDayStyle: {
      color: colors.grey4,
    },
    textSectionTitleColor: colors.grey7,
    'stylesheet.calendar.header': {
      monthText: {
        fontFamily: 'SemiBold',
        fontSize: 15,
        color: colors.black,
        margin: 24,
      },
    },
    selectedDayTextColor: colors.grey9,
    selectedDayBackgroundColor: 'transparent',
  }

  return (
    <Calendar
      key={key}
      monthFormat="yyyy. MM"
      renderArrow={direction => {
        if (direction == 'left')
          return <Left style={{ marginLeft: screenWidth / 4 - 30 }} width={20} height={20} color={colors.grey5} />
        if (direction == 'right')
          return <Right style={{ marginRight: screenWidth / 4 - 21 }} width={20} height={20} color={colors.grey5} />
      }}
      onMonthChange={month => props.setMonth(month.month)}
      markedDates={{
        ...exerciseDay,
        [today]: {
          selected: true,
          selectedColor: colors.grey2,
          selectedTextColor: colors.grey9,
        },
        [selectedDate]: {
          ...exerciseDay[selectedDate],
          selected: true,
          selectedColor: colors.main1,
          selectedTextColor: colors.white,
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

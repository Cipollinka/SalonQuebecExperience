import {Text, View} from 'react-native';
import React, {useState} from 'react';
import Area from '@/components/Area';
import BackAction from '@/components/BackAction';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import Button from '@/components/Button';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {NavType, Pages} from '@/models/default';
import {useNavigation} from '@react-navigation/native';

const today = dayjs();

export default function SignUp() {
  const nav = useNavigation<NavType>();
  const [date, setDate] = useState(dayjs());
  const [time, setTime] = useState(new Date());

  return (
    <Area>
      <View className="m-4">
        <BackAction />

        <Text className="mt-4 mb-6 text-white font-bold text-3xl">
          Choose date
        </Text>

        <View className="bg-primary rounded-lg pb-4">
          <DateTimePicker
            dayContainerStyle={{}}
            weekDaysTextStyle={{color: '#ffffff50'}}
            timePickerContainerStyle={{
              backgroundColor: '#31313D',
            }}
            calendarTextStyle={{color: '#fff'}}
            headerTextStyle={{color: '#fff'}}
            todayTextStyle={{color: '#E00C39'}}
            selectedItemColor="#E00C39"
            headerButtonColor="#E00C39"
            monthContainerStyle={{backgroundColor: '#31313D'}}
            yearContainerStyle={{backgroundColor: '#31313D'}}
            endYear={today.year()}
            mode="single"
            date={date}
            disabledDates={date => {
              const day = dayjs(date);
              if (day.isSame(today, 'day')) return false;
              return day.isBefore(today);
            }}
            onChange={params => setDate(params.date)}
          />
          <View
            style={{
              marginTop: -20,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              overflow: 'hidden',
            }}>
            <RNDateTimePicker
              mode="time"
              value={time}
              style={{
                backgroundColor: 'white',
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
              }}
              onChange={(_, date) => setTime(date)}
            />
          </View>
        </View>
      </View>

      <View className="bg-primary mt-auto p-4">
        <Button
          text="Continue"
          onPress={() =>
            nav.navigate(Pages.SignUpSecond, {
              date: date.toISOString(),
              time: time.toISOString(),
            })
          }
        />
      </View>
    </Area>
  );
}

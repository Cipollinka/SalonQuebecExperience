import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import FirstIcon from '@/assets/images/icons/nav/1.svg';
import SecondIcon from '@/assets/images/icons/nav/2.svg';
import ThirdIcon from '@/assets/images/icons/nav/3.svg';
import FourthIcon from '@/assets/images/icons/nav/4.svg';
import FifthIcon from '@/assets/images/icons/nav/5.svg';
import {Pages} from '@/models/default';

const options = [
  {
    Icon: FirstIcon,
    value: Pages.Home,
  },
  {
    Icon: SecondIcon,
    value: Pages.Discounts,
  },
  {
    Icon: ThirdIcon,
    value: Pages.UserReviews,
  },
  {
    Icon: FourthIcon,
    value: Pages.Experience,
  },
  {
    Icon: FifthIcon,
    value: Pages.Profile,
  },
];

export default function NavBar() {
  const route = useRoute();
  const navigation = useNavigation();

  const handleOptionPress = (value: Pages) => {
    navigation.navigate(value);
  };

  return (
    <View className="flex-row bg-primary px-2 gap-10 absolute bottom-2 left-4 right-4 justify-center items-center rounded-2xl py-3 border border-secondary">
      {options.map(({value, Icon}) => {
        const isActive = route.name === value;
        return (
          <TouchableOpacity
            key={value}
            className="rounded-2xl"
            onPress={() => handleOptionPress(value)}>
            {isActive ? (
              <View className="bg-secondary p-2 rounded-2xl">
                <Icon color="#fff" />
              </View>
            ) : (
              <Icon color="#999999" />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

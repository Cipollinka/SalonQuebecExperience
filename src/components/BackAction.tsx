import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavType} from '@/models/default';

import BackActionIcon from '@/assets/images/icons/backAction.svg';

interface Props {
  onPress?: () => void;
}

export default function BackAction({onPress}: Props) {
  const nav = useNavigation<NavType>();

  return (
    <TouchableOpacity
      className="flex-row items-center gap-1.5 mt-2"
      onPress={onPress || nav.goBack}>
      <BackActionIcon />
      <Text className="text-red font-bold">Back</Text>
    </TouchableOpacity>
  );
}

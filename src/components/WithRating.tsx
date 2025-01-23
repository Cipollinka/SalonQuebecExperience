import {View, Text} from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface Props {
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

export default function WithRating({isChecked, onChange}: Props) {
  return (
    <View className="flex-row items-center gap-2">
      <BouncyCheckbox
        isChecked={isChecked}
        onPress={onChange}
        size={20}
        fillColor="#E00C39"
        iconStyle={{borderColor: '#E00C39'}}
        innerIconStyle={{
          borderColor: '#ffffff',
          borderWidth: isChecked ? 0 : 1,
        }}
        className="w-5 h-5 rounded-full"
      />
      <Text className="text-white text-sm">With rating</Text>
    </View>
  );
}

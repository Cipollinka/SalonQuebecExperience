import {View, Text} from 'react-native';
import React from 'react';
import Input from './Input';

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  multiline?: boolean;
}

export default function LabelInput({
  label,
  value,
  onChange,
  placeholder,
  multiline,
}: Props) {
  return (
    <View className="gap-3">
      <Text className="text-white font-bold text-xl">{label}</Text>
      <Input
        className="text-white"
        multiline={multiline}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder || label}
      />
    </View>
  );
}

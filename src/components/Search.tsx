import {View, TextInput} from 'react-native';
import React from 'react';
import SearchIcon from '@/assets/images/icons/search.svg';
import clsx from 'clsx';

interface Props {
  variant?: 'primary' | 'secondary';
  value: string;
  onChangeText: (text: string) => void;
  className?: string;
}

export default function Search({
  variant = 'primary',
  className,
  value,
  onChangeText,
}: Props) {
  const isPrimary = variant === 'primary';
  return (
    <View className={clsx('relative', className)}>
      <SearchIcon
        style={{position: 'absolute', zIndex: 2, top: 20, left: 12}}
      />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        className={clsx(
          'rounded-2xl h-[52px] pl-9 pr-4 text-lg pb-1 text-white',
          {
            'bg-primary': isPrimary,
            'bg-secondary': !isPrimary,
          },
        )}
        placeholder="Search"
        placeholderTextColor="#ffffff80"
      />
    </View>
  );
}

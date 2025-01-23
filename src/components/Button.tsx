import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import clsx from 'clsx';

interface Props {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function Button({
  text,
  onPress,
  disabled,
  variant = 'primary',
  className,
}: Props) {
  return (
    <TouchableOpacity
      disabled={disabled}
      className={clsx(
        ' rounded-2xl justify-center items-center gap-2 h-12 px-16',
        className,
        {
          'opacity-50': disabled,
          'bg-red': variant === 'primary',
          'bg-[#464655]': variant === 'secondary',
        },
      )}
      onPress={onPress}>
      <Text className="text-white font-semibold text-lg">{text}</Text>
    </TouchableOpacity>
  );
}

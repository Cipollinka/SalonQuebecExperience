import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import StarIcon from '@/assets/images/icons/star.svg';
import clsx from 'clsx';

const start = [1, 2, 3, 4, 5];

interface Props {
  rating: number;
  onChange: (rating: number) => void;
  size?: number;
  isStatic?: boolean;
  gap?: number;
  starBgColor?: string;
}

export default function RatingSelect({
  rating,
  onChange,
  size = 34,
  isStatic,
  gap,
  starBgColor,
}: Props) {
  return (
    <View
      className={clsx('flex-row items-center justify-center', {
        [`gap-${gap}`]: !!gap,
        'gap-4': !gap,
      })}>
      {start.map((item, index) => (
        <TouchableOpacity
          disabled={isStatic}
          key={index}
          onPress={() => onChange(rating === item ? 0 : item)}>
          <StarIcon
            width={size}
            index={index}
            stroke="#E00C39"
            color={rating >= item ? '#E00C39' : starBgColor || '#31313D'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

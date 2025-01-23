import {TextInput, TextInputProps} from 'react-native';
import React from 'react';
import clsx from 'clsx';

interface Props extends TextInputProps {
  className?: string;
}

export default function Input({className, ...props}: Props) {
  return (
    <TextInput
      {...props}
      className={clsx('bg-primary rounded-xl px-3 py-4', className)}
      placeholderTextColor="#B7B7B7"
    />
  );
}

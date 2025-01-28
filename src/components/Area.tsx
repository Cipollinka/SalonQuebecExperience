import {SafeAreaView} from 'react-native';
import React from 'react';

export default function Area({children}: {children: React.ReactNode}) {
  return (
    <SafeAreaView className="flex-1 bg-bg relative">{children}</SafeAreaView>
  );
}

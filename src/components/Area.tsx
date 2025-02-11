import {Image, SafeAreaView, View} from 'react-native';
import React from 'react';

export default function Area({children}: {children: React.ReactNode}) {
  return (
      <View style={{flex: 1}}>
        <Image source={require('../assets/bg.png')} style={{flex:1 ,width:'100%', height:'100%', position:'absolute'}}/>
        <SafeAreaView className="flex-1">
          {children}
        </SafeAreaView>
      </View>
  );
}

import {View, Text, TouchableOpacity, Share, Clipboard} from 'react-native';
import React from 'react';
import Area from '@/components/Area';
import BackAction from '@/components/BackAction';
import ShareIcon from '@/assets/images/icons/share_2.svg';

import QRCodeCode from 'react-native-qrcode-svg';
import Button from '@/components/Button';

export default function QRCode({route}: any) {
  const code = route?.params?.code || ('' as string);
  return (
    <Area>
      <View className="mt-2 gap-3 mx-4">
        <BackAction />

        <View className="flex-row items-center justify-between">
          <Text className="text-white font-bold text-3xl">My discount</Text>
          <TouchableOpacity onPress={() => Share.share({message: code})}>
            <ShareIcon />
          </TouchableOpacity>
        </View>
      </View>

      <View className="bg-primary p-4 rounded-3xl justify-center items-center mx-4 mt-10">
        <QRCodeCode value={code} size={307} />
      </View>

      <View className="mt-auto m-4">
        <Button text="Copy code" onPress={() => Clipboard.setString(code)} />
      </View>
    </Area>
  );
}

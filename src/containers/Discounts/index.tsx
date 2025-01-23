import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Share,
  Image,
} from 'react-native';
import React from 'react';
import Area from '@/components/Area';

import PromoIcon from '@/assets/images/icons/promo.svg';
import QRIcon from '@/assets/images/icons/qr.svg';
import ShareIcon from '@/assets/images/icons/share_2.svg';
import {NavType, Pages} from '@/models/default';

import {useNavigation} from '@react-navigation/native';
import NavBar from '@/components/NavBar';

const discounts = [
  {
    id: 1,
    label: '5% discount on any service',
    code: 'GHR1O23JFSDR21',
  },
  {
    id: 2,
    label: '5% discount on any service',
    code: 'SIFH7UQ0VRUO6O',
  },
];

const discountItems = [
  {
    id: 1,
    imageUrl: 'https://salonmarketing.pro/uploads/articles/smt_1511964135.jpg',
    label: 'Exclusive Spa Salon Promotion!20% off',
    description:
      'Indulge in a world of relaxation and luxury at our renowned spa salon! For a limited time, we are excited to offer an exclusive promotion that will rejuvenate your mind, body, and spirit.',
    code: 'R4M74ZVF2HWP8V',
  },
  {
    id: 2,
    imageUrl:
      'https://relax.com.ua/wp-content/media/kiew/2013/01/7-Spa-Suite.jpg',
    label: 'Enjoy 20% off on all massage services booked this month',
    description:
      'Whether you prefer a calming massage, a deep tissue treatment, or a soothing aromatherapy session, our skilled therapists are here to provide you with the ultimate relaxation experience.',
    code: 'VI4DY2UCSQXQDE',
  },
];

export default function Discounts() {
  const nav = useNavigation<NavType>();

  return (
    <Area>
      <View className="bg-primary p-4 flex-row items-center justify-between">
        <Text className="text-white font-bold text-3xl">Quebec Discounts</Text>
      </View>

      <View className="mt-6">
        <Text className="ml-4 text-white font-bold text-xl">
          Special for you
        </Text>
        <ScrollView
          horizontal
          className="pl-4 mt-3"
          showsHorizontalScrollIndicator={false}>
          {discounts.map(discount => (
            <View
              className="bg-primary rounded-2xl pt-3 pb-4 px-8 gap-3 items-center mr-4"
              key={discount.id}>
              <View className="flex-row items-center justify-between gap-8">
                <Text className="text-white">{discount.label}</Text>
                <PromoIcon />
              </View>

              <View className="flex-row items-center gap-3 justify-center mt-3">
                <TouchableOpacity
                  onPress={() => Share.share({message: discount.code})}>
                  <ShareIcon />
                </TouchableOpacity>

                <Text className="text-white font-medium">{discount.code}</Text>

                <TouchableOpacity
                  onPress={() =>
                    nav.navigate(Pages.QRCode, {code: discount.code})
                  }>
                  <QRIcon />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <View className="mx-4 mt-4">
        <Text className="text-white font-bold text-xl mb-3">All discounts</Text>
        <ScrollView showsVerticalScrollIndicator={false} className="mb-[250px]">
          <View className="pb-20">
            {discountItems.map(item => (
              <TouchableOpacity
                onPress={() => nav.navigate(Pages.QRCode, {code: item.code})}
                className="bg-primary p-3 rounded-3xl gap-3 mb-5"
                key={item.id}>
                <Image
                  source={{uri: item.imageUrl}}
                  className="w-full h-[176px] rounded-3xl"
                />

                <Text className="text-white text-xl font-bold">
                  {item.label}
                </Text>

                <Text className="text-white text-xs">{item.description}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <NavBar />
    </Area>
  );
}

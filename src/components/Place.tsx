import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Place as PlaceT} from '@/models/default';

import StarIcon from '@/assets/images/icons/star.svg';
import ShareIcon from '@/assets/images/icons/share.svg';
import HeartIcon from '@/assets/images/icons/heart.svg';
import LocationIcon from '@/assets/images/icons/location.svg';
import ScheduleIcon from '@/assets/images/icons/schedule.svg';
import Button from './Button';

interface Props {
  place: PlaceT;
  isFavorite: boolean;
  onSignUp: (place: PlaceT) => void;
  onFavorite: (place: PlaceT, isFavorite: boolean) => void;
  onShare: (place: PlaceT) => void;
  onPress: (place: PlaceT) => void;
}

export default function Place({
  place,
  onFavorite,
  onShare,
  onSignUp,
  onPress,
  isFavorite,
}: Props) {
  return (
    <TouchableOpacity
      className="bg-primary rounded-3xl flex-row p-3 gap-3 w-full"
      onPress={() => onPress(place)}>
      <Image source={{uri: place.imageUrl}} className="w-[136px] rounded-2xl" />

      <View className="gap-2 flex-1">
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center gap-3">
            <View className="flex-row items-center gap-1">
              <StarIcon color="#fff" stroke="#fff" width={17} height={17} />
              <Text className="text-white font-bold">{place.rating}</Text>
            </View>

            <TouchableOpacity onPress={() => onShare(place)}>
              <ShareIcon />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => onFavorite(place, isFavorite)}>
            <HeartIcon
              width={17}
              color={isFavorite ? '#E00C39' : '#31313D'}
              stroke={isFavorite ? '#E00C39' : '#fff'}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            className="text-white text-xl font-bold"
            numberOfLines={1}
            ellipsizeMode="tail">
            {place.name}
          </Text>
          <Text
            className="text-white text-sm"
            numberOfLines={1}
            ellipsizeMode="tail">
            {place.description}
          </Text>
        </View>

        <View className="flex-row items-center gap-1">
          <LocationIcon />
          <Text
            className="text-white text-sm pr-6"
            numberOfLines={1}
            ellipsizeMode="tail">
            {place.address}
          </Text>
        </View>

        <View className="flex-row items-center gap-2 ml-[1px]">
          <ScheduleIcon />
          <Text
            className="text-white text-sm pr-6"
            numberOfLines={1}
            ellipsizeMode="tail">
            {place.schedule}
          </Text>
        </View>
        <View className="mt-1">
          <Button
            text="Sign up"
            onPress={() => onSignUp(place)}
            className="h-10"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

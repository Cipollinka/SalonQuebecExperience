import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {IReview, Place} from '@/models/default';

import StarIcon from '@/assets/images/icons/star.svg';
import LocationIcon from '@/assets/images/icons/location.svg';
import ScheduleIcon from '@/assets/images/icons/schedule.svg';

import dayjs from 'dayjs';

import RatingSelect from './RatingSelect';

interface Props {
  review: IReview;
  place?: Place;
  onPlacePress?: (place: Place) => void;
}

export default function Review({review, place, onPlacePress}: Props) {
  const [isImageLoadError, setIsImageLoadError] = useState(false);

  const date = dayjs(review.date);
  return (
    <View className="bg-primary rounded-3xl p-3">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          {review?.user?.imageUrl && !isImageLoadError && (
            <Image
              source={{uri: review.user.imageUrl}}
              onError={() => setIsImageLoadError(true)}
              className="w-[40px] h-[40px] rounded-full"
            />
          )}
          {(!review?.user?.imageUrl || isImageLoadError) && (
            <View className="w-[40px] h-[40px] rounded-full bg-[#1B1A1A] items-center justify-center">
              <Text className="text-white font-bold">
                {review.user.name[0]}
              </Text>
            </View>
          )}
          <Text className="text-white text-xl font-bold ml-2">
            {review.user.name}
          </Text>
        </View>

        <RatingSelect
          rating={review.rating}
          onChange={() => console.log('change')}
          isStatic
          size={14}
          gap={2}
        />
      </View>

      {!!review?.imageUrls?.length && (
        <View className="flex-row gap-2 justify-center mt-3">
          {review.imageUrls?.map((uri, index) => (
            <Image
              key={index}
              source={{uri}}
              className="w-[100px] h-[120px] rounded-2xl"
            />
          ))}
        </View>
      )}

      <Text className="mt-3 text-white">{review.text}</Text>

      <View className="mt-4 flex-row justify-between items-center">
        <Text className="text-xs text-white-50">
          {date.format('DD MMMM YYYY')}
        </Text>
        <Text className="text-xs text-white-50">{date.format('hh A')}</Text>
      </View>

      {place && (
        <TouchableOpacity
          className="border-t border-[#999999] pt-4 px-1 gap-2"
          onPress={() => onPlacePress?.(place)}>
          <View className="flex-row items-center gap-1">
            <StarIcon color="#fff" stroke="#fff" width={17} height={17} />
            <Text className="text-white font-bold">{place.rating}</Text>
          </View>

          <View className="mt-1">
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

          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-1">
              <LocationIcon />
              <Text className="text-white-50 text-sm">{place.address}</Text>
            </View>

            <View className="flex-row items-center gap-2 ml-[1px]">
              <ScheduleIcon />
              <Text className="text-white-50 text-sm">{place.schedule}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

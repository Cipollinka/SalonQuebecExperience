import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useMemo} from 'react';
import Area from '@/components/Area';
import BackAction from '@/components/BackAction';
import {Image} from 'react-native';
import {NavType, Pages, Place as PlaceT} from '@/models/default';
import HeartIcon from '@/assets/images/icons/heart.svg';
import {categories, Reviews} from '@/predefined/common';
import StarIcon from '@/assets/images/icons/star.svg';
import Review from '@/components/Review';
import Button from '@/components/Button';

import {useNavigation} from '@react-navigation/native';
import {useUserStore} from '@/stores/userStore';

export default function PlaceOverview({route}: any) {
  const navigation = useNavigation<NavType>();

  const place = route?.params?.place as PlaceT;

  const userReviews = useUserStore(state => state.userReview);

  const isFavorite = false;
  const categoryLabel = useMemo(
    () => categories.find(item => item.id === place.category)?.label || '',
    [place],
  );
  console.log('place', place);
  console.log('Reviews', Reviews);

  const reviews = useMemo(
    () =>
      Reviews[place.id].concat(
        ...userReviews.filter(item => item.placeId === place.id),
      ),
    [place, userReviews],
  );
  const averageRating = useMemo(
    () =>
      (
        reviews.reduce((acc, current) => (acc += current.rating), 0) /
        reviews.length
      ).toFixed(1),
    [reviews],
  );

  return (
    <Area>
      <View className="p-4 bg-primary gap-4 border-b border-b-[#464655]">
        <BackAction onPress={() => navigation.navigate(Pages.Home)} />

        <View className="flex-row items-center justify-between">
          <Text className="font-bold text-white text-3xl">{place.name}</Text>

          <TouchableOpacity>
            <HeartIcon
              color={isFavorite ? '#E00C39' : '#31313D'}
              stroke={isFavorite ? '#E00C39' : '#fff'}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="p-4 gap-4">
          <Image
            source={{uri: place.imageUrl}}
            className="w-full h-[240px] rounded-2xl"
          />

          <View className="mt-2">
            <View className="flex-row items-center justify-between">
              <Text className="font-bold text-xl text-white">Heading</Text>
              <View className="bg-secondary rounded-3xl py-3 px-2">
                <Text className="font-semibold text-sm text-white">
                  {categoryLabel}
                </Text>
              </View>
            </View>

            <Text className="text-sm mt-2 text-white">{place.description}</Text>
          </View>

          <View className="flex-row items-center justify-between">
            <Text className="font-bold text-xl text-white">Reviews</Text>
            <View className="flex-row gap-1 items-center">
              <StarIcon color="#fff" width={17} />
              <Text className="text-white font-bold">{averageRating}</Text>
              <Text className="text-white">({reviews.length})</Text>
            </View>
          </View>

          <View className="gap-4">
            {reviews.map(item => (
              <Review review={item} key={`${item.id}-${item.date}`} />
            ))}
          </View>
        </View>
      </ScrollView>

      <View className="bg-primary p-4 gap-4 border-t border-t-[#464655]">
        <Button
          text="Sing up"
          onPress={() => navigation.navigate(Pages.SignUp)}
        />
        <Button
          variant="secondary"
          text="Review"
          onPress={() =>
            navigation.navigate(Pages.ReviewCreation, {
              place,
            })
          }
        />
      </View>
    </Area>
  );
}

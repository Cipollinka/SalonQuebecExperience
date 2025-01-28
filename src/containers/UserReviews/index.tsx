import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {useUserStore} from '@/stores/userStore';
import Area from '@/components/Area';
import {categories} from '@/predefined/common';
import {Category, IReview, NavType, Pages, Place} from '@/models/default';
import clsx from 'clsx';
import RatingSelect from '@/components/RatingSelect';
import Review from '@/components/Review';
import places from '@/predefined/places.json';
import {useNavigation} from '@react-navigation/native';
import NavBar from '@/components/NavBar';

export default function UserReviews() {
  const navigation = useNavigation<NavType>();

  const reviews = useUserStore(state => state.userReview);

  const [rating, setRating] = useState(0);
  const [currentCategory, setCurrentCategory] = useState<null | Category>(null);
  const [reviewsState, setReviewsState] = useState<IReview[]>([]);

  // const placesByReviews = useMemo(() => {
  //   return Object.entries(
  //     reviews.reduce((acc, review) => {
  //       acc[review.placeId] = acc[review.placeId] || [review];
  //       return acc;
  //     }, {} as Record<number, IReview[]>),
  //   ).reduce((acc, [key, value]) => {
  //     acc.push({
  //       place: places.find(place => place.id === Number(key)) || null,
  //       reviews: value,
  //     });
  //     return acc;
  //   }, [] as {place: Place | null; reviews: IReview[]}[]);
  // }, [reviews]);

  // console.log('placesByReviews', placesByReviews);

  const isEmpty = reviewsState.length === 0;

  useEffect(() => {
    setReviewsState(reviews);
  }, [reviews]);

  const handleRatingFilter = (rating: number) => {
    setRating(rating);
    if (!rating) {
      setReviewsState(reviews);
      return;
    }
    setReviewsState(reviews.filter(review => review.rating === rating));
  };

  const handleCategoryPress = (category: Category) => {
    const isAlreadySelected = currentCategory === category;
    setCurrentCategory(isAlreadySelected ? null : category);

    if (isAlreadySelected) {
      setReviewsState(reviews);
      return;
    }
    setReviewsState(reviews.filter(review => review.category === category));
  };

  const onPlacePress = (place: Place) => {
    navigation.navigate(Pages.PlaceOverview, {place});
  };

  return (
    <Area>
      <View className="bg-primary p-4 flex-row items-center justify-between">
        <Text className="text-white text-3xl font-bold">Rates</Text>
        <RatingSelect rating={rating} onChange={handleRatingFilter} size={27} />
      </View>

      <View className="h-14 mt-4 mb-0">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-4 h-14">
          {categories.map(item => {
            const isSelected = item.id === currentCategory;
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleCategoryPress(item.id)}
                className={clsx(
                  'bg-primary justify-center items-center rounded-3xl px-3 py-2 mr-3 h-10',
                  {
                    'border border-white': isSelected,
                    'border border-primary': !isSelected,
                  },
                )}>
                <Text className="text-white text-sm font-semibold">
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      {!isEmpty && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="mx-4 flex-1 mb-24">
          <View className="gap-4 mb-4">
            {reviewsState.map(item => {
              const place = places.find(place => place.id === item.placeId);
              return (
                <Review
                  review={item}
                  key={item.id}
                  place={place}
                  onPlacePress={onPlacePress}
                />
              );
            })}
          </View>
        </ScrollView>
      )}

      {isEmpty && (
        <View className="items-center justify-center">
          <Text className="text-white">There are no such reviews yet.</Text>
        </View>
      )}

      <NavBar />
    </Area>
  );
}

import {View, Text, ScrollView} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Search from '@/components/Search';
import Area from '@/components/Area';
import {Category, Place as PlaceT} from '@/models/default';

import WithRating from '@/components/WithRating';
import RatingSelect from '@/components/RatingSelect';

import HeartIcon from '@/assets/images/icons/heart.svg';
import Place from '@/components/Place';
import BackAction from '@/components/BackAction';

const places: PlaceT[] = [
  {
    id: 1,
    name: 'Place 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    address: '123 rue de la mairie',
    rating: 4,
    imageUrl: 'https://picsum.photos/id/1/200/200',
    category: 1,
    schedule: '10:00 - 22:00',
  },
  {
    id: 2,
    name: 'Place 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    address: '123 rue de la mairie',
    rating: 4,
    imageUrl: 'https://picsum.photos/id/1/200/200',
    category: 1,
    schedule: '10:00 - 22:00',
  },
];

export default function CategoryView({route}: any) {
  const category = route?.params?.category as {label: string; value: Category};
  const selectedRating = route?.params?.rating as number;

  const [search, setSearch] = useState('');
  const [isWithRating, setIsWithRating] = useState(false);
  const [rating, setRating] = useState(0);

  useLayoutEffect(() => {
    // TODO: filter places by category and display
    if (selectedRating) {
      setIsWithRating(true);
      setRating(selectedRating);
    }
  }, [selectedRating]);

  return (
    <Area>
      <View className="p-4 gap-3 bg-primary">
        <View className="flex-row items-center justify-between relative mb-2">
          <BackAction />
          <Text className="text-white text-xl font-bold">{category.label}</Text>
          <View className="w-[51.5px]" />
        </View>
        <View className="flex-row items-center gap-3">
          <Search
            value={search}
            onChangeText={setSearch}
            className="w-[82%]"
            variant="secondary"
          />
          <View className="bg-secondary w-[52px] h-[52px] rounded-2xl flex justify-center items-center">
            <HeartIcon />
          </View>
        </View>
        <View className="flex-row items-center gap-8 h-8">
          <WithRating
            isChecked={isWithRating}
            onChange={value => {
              setIsWithRating(value);
              setRating(prev => (value ? prev : 0));
            }}
          />
          {isWithRating && (
            <RatingSelect rating={rating} onChange={setRating} size={27} />
          )}
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="px-4 my-2 pt-2">
        <View>
          <Text className="text-white text-xl font-bold">Places</Text>

          <View className="mt-4 gap-4">
            {places.map(place => (
              <Place
                isFavorite
                key={place.id}
                place={place}
                onFavorite={() => console.log('favorite')}
                onShare={() => console.log('share')}
                onSignUp={() => console.log('signup')}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </Area>
  );
}

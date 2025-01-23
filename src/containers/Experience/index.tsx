import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Area from '@/components/Area';
import experience from '@/predefined/experience.json';

import HeartIcon from '@/assets/images/icons/heart.svg';
import {useUserStore} from '@/stores/userStore';
import NavBar from '@/components/NavBar';

export default function Experience() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [expState, setExpState] = useState<any[]>([]);

  const isEmpty = expState.length === 0;

  useEffect(() => {
    setExpState(experience);
  }, []);

  const favoriteExperience = useUserStore(state => state.favoriteExperience);
  const addFavoriteExperience = useUserStore(
    state => state.addFavoriteExperience,
  );
  const removeFavoriteExperience = useUserStore(
    state => state.removeFavoriteExperience,
  );

  const handleFavoritePress = () => {
    if (isFavorite) {
      setExpState(experience);
    } else {
      setExpState(
        experience.filter(item => favoriteExperience.includes(item.id)),
      );
    }
    setIsFavorite(prev => !prev);
  };

  return (
    <Area>
      <View className="bg-primary p-4 flex-row items-center justify-between">
        <Text className="text-white text-3xl font-bold">Quebec Experience</Text>
        <TouchableOpacity
          className="justify-center items-center"
          onPress={handleFavoritePress}>
          <HeartIcon
            width={22}
            color={isFavorite ? '#E00C39' : '#31313D'}
            stroke={isFavorite ? '#E00C39' : '#fff'}
          />
        </TouchableOpacity>
      </View>

      {isEmpty && (
        <Text className="text-white text-xl mt-6 mx-auto">
          Add your experiences to favorite first
        </Text>
      )}

      {!isEmpty && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="mt-6 px-4 mb-24">
          {expState.map(item => {
            const isItemFavorite = favoriteExperience.includes(item.id);
            return (
              <View
                className="bg-primary p-3 rounded-3xl gap-3 mb-5"
                key={item.id}>
                <Image
                  source={{uri: item.imageUrl}}
                  className="w-full h-[176px] rounded-3xl"
                />

                <View className="flex-row items-center justify-between">
                  <Text className="text-white text-xl font-bold">
                    {item.title}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      isItemFavorite
                        ? removeFavoriteExperience(item.id)
                        : addFavoriteExperience(item.id)
                    }>
                    <HeartIcon
                      width={22}
                      color={isItemFavorite ? '#E00C39' : '#31313D'}
                      stroke={isItemFavorite ? '#E00C39' : '#fff'}
                    />
                  </TouchableOpacity>
                </View>

                <Text className="text-white text-xs">{item.description}</Text>
              </View>
            );
          })}
        </ScrollView>
      )}

      <NavBar />
    </Area>
  );
}

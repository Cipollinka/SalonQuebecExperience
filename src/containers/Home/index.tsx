import {View, Text, TouchableOpacity, ScrollView, Share} from 'react-native';
import React, {useEffect, useState} from 'react';
import Tabs from '@/components/Tabs';
import Search from '@/components/Search';
import Area from '@/components/Area';
import {
  Category,
  HomeTabs,
  NavType,
  Pages,
  Place as PlaceT,
} from '@/models/default';

import clsx from 'clsx';
import WithRating from '@/components/WithRating';
import RatingSelect from '@/components/RatingSelect';

import HeartIcon from '@/assets/images/icons/heart.svg';

import Place from '@/components/Place';

import {useNavigation} from '@react-navigation/native';
import {categories} from '@/predefined/common';

import places from '@/predefined/places.json';
import useDebouncedEffect from 'use-debounced-effect';
import Map from './Map';
import {useUserStore} from '@/stores/userStore';
import NavBar from '@/components/NavBar';

const tabs = ['Map', 'List'];

export default function Home() {
  const navigation = useNavigation<NavType>();

  const [search, setSearch] = useState('');
  const [currentTab, setCurrentTab] = useState(HomeTabs.Map);
  const [isWithRating, setIsWithRating] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [rating, setRating] = useState(0);
  const [placesState, setPlacesState] = useState<PlaceT[]>([]);

  const favoritePlaces = useUserStore(state => state.favoritePlaces);
  const addFavoritePlace = useUserStore(state => state.addFavoritePlace);
  const removeFavoritePlace = useUserStore(state => state.removeFavoritePlace);

  const isList = currentTab === HomeTabs.List;
  const isEmpty = placesState.length === 0;

  useEffect(() => {
    setPlacesState(places);
  }, []);

  useDebouncedEffect(
    () => {
      setPlacesState(
        places.filter(
          place =>
            place.name.includes(search) ||
            place.description.includes(search) ||
            place.address.includes(search),
        ),
      );
    },
    500,
    [search],
  );

  useEffect(() => {
    if (!rating) {
      setPlacesState(places);
      return;
    }
    setPlacesState(places.filter(place => place.rating === rating));
  }, [rating]);

  const handleSelectCategory = (entity: {label: string; value: Category}) => {
    navigation.navigate(Pages.Category, {category: entity, rating});
  };

  const handleSharePlace = (place: PlaceT) => {
    Share.share({
      message: `Check out this place ${place.name} on Salon Quebec \n ${place.address} \n ${place.schedule} \n #salonquebec`,
    });
  };

  const handlePlacePress = (place: PlaceT) => {
    navigation.navigate(Pages.PlaceOverview, {place});
  };

  const handleSignUp = () => {
    navigation.navigate(Pages.SignUp);
  };

  const handleFavorite = (place: PlaceT, isFavorite: boolean) => {
    if (isFavorite) {
      removeFavoritePlace(place.id);
    } else {
      addFavoritePlace(place.id);
    }
  };

  const handleGlobalFavorite = () => {
    if (!isFavorite) {
      setPlacesState(prev =>
        prev.filter(place => favoritePlaces.includes(place.id)),
      );
    } else {
      setPlacesState(places);
    }
    setIsFavorite(prev => !prev);
  };

  return (
    <Area>
      <View
        className={clsx('p-4 gap-3', {
          'bg-primary': isList,
        })}>
        <View className={'flex-row items-center gap-3'}>
          <Search
            value={search}
            onChangeText={setSearch}
            className={isList ? 'w-[82%]' : 'w-full'}
            variant={isList ? 'secondary' : 'primary'}
          />
          {isList && (
            <TouchableOpacity
              className="bg-secondary w-[52px] h-[52px] rounded-2xl flex justify-center items-center"
              onPress={handleGlobalFavorite}>
              <HeartIcon
                color={isFavorite ? '#E00C39' : '#464655'}
                stroke={isFavorite ? '#E00C39' : '#fff'}
              />
            </TouchableOpacity>
          )}
        </View>
        <View className="flex-row items-center gap-3">
          <Tabs
            tab={currentTab}
            onChangeTab={setCurrentTab}
            tabs={tabs}
            coeficient={isList ? 2.48 : 1}
            className={clsx({
              'w-[72%]': isList,
              'w-full': !isList,
            })}
          />
          {isList && (
            <WithRating
              isChecked={isWithRating}
              onChange={value => {
                setIsWithRating(value);
                setRating(prev => (value ? prev : 0));
              }}
            />
          )}
        </View>

        {isWithRating && <RatingSelect rating={rating} onChange={setRating} />}
      </View>

      {isList && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="px-4 my-2 pt-2 mb-24">
          <View>
            <Text className="text-white text-xl font-bold">Category</Text>

            <View className="flex-row flex-wrap gap-4 mt-4 justify-center">
              {categories.map(({label, id, icon: Icon}) => (
                <TouchableOpacity
                  className="bg-primary rounded-2xl justify-center items-center gap-2 pt-4 w-[47%]"
                  key={id}
                  onPress={() => handleSelectCategory({label, value: id})}>
                  <Text className="color-white font-semibold text-lg">
                    {label}
                  </Text>
                  <Icon width={150} />
                </TouchableOpacity>
              ))}
            </View>

            <Text className="text-white text-xl font-bold mt-6">Places</Text>

            <View className="mt-4 gap-4">
              {isEmpty && (
                <Text className="mx-auto text-white mb-10 text-lg">
                  There are no such places.
                </Text>
              )}
              {placesState.map(place => (
                <Place
                  isFavorite={favoritePlaces.includes(place.id)}
                  key={place.id}
                  place={place}
                  onPress={handlePlacePress}
                  onSignUp={handleSignUp}
                  onShare={handleSharePlace}
                  onFavorite={handleFavorite}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      )}

      {!isList && (
        <Map
          favoritePlaces={favoritePlaces}
          places={places}
          onPress={handlePlacePress}
          onSignUp={handleSignUp}
          onShare={handleSharePlace}
          onFavorite={handleFavorite}
        />
      )}

      <NavBar />
    </Area>
  );
}

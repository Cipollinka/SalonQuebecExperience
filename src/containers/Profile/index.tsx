import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Area from '@/components/Area';
import EditIcon from '@/assets/images/icons/edit.svg';
import {useUserStore} from '@/stores/userStore';
import clsx from 'clsx';
import Input from '@/components/Input';
import Button from '@/components/Button';
import {launchImageLibrary} from 'react-native-image-picker';
import dayjs from 'dayjs';
import {spaServices} from '@/predefined/common';
import NavBar from '@/components/NavBar';

const options = [
  {
    label: 'Terms of Use',
    value: 'https://google.com',
  },
  {label: 'Privacy Policy', value: 'https://google.com'},
  {label: 'Developer', value: 'https://google.com'},
];

export default function Profile() {
  const user = useUserStore(state => state.user);
  const setUser = useUserStore(state => state.setUser);
  const signUps = useUserStore(state => state.signUps);
  const userReviewCount = useUserStore(state => state.userReview.length);
  const favoriteExperienceCount = useUserStore(
    state => state.favoriteExperience.length,
  );
  const favoritePlacesCount = useUserStore(
    state => state.favoritePlaces.length,
  );

  const [isEditing, setIsEditing] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');

  const isUserExist = !!user.name;
  const isDisabled = !name;
  const isHistoryExist = signUps.length > 0;

  useLayoutEffect(() => {
    if (!isUserExist) {
      setIsEditing(true);
    } else {
      setImageUrl(user.imageUrl);
      setName(user.name);
    }
  }, [isUserExist, user]);

  const handleUserSave = () => {
    setUser({name, imageUrl});
    setIsEditing(false);
  };

  const handleImageSelect = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
    });

    if (result.assets && result.assets.length > 0) {
      const selectedImage = result.assets[0].uri;
      if (selectedImage) {
        setImageUrl(selectedImage);
      }
    }
  };

  const handleRemoveImage = () => {
    Alert.alert('Remove Image', 'Are you sure you want to remove this image?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Remove',
        style: 'destructive',
        onPress: () => {
          setImageUrl('');
          setUser({name: user.name, imageUrl: ''});
        },
      },
    ]);
  };

  const handleOptionPress = (value: string) => {
    Linking.openURL(value);
  };

  return (
    <Area>
      <View className="bg-primary p-4 flex-row items-center justify-between">
        <Text className="text-white font-bold text-3xl">Profile</Text>
        <TouchableOpacity
          disabled={!isUserExist}
          className={clsx({'opacity-50': !isUserExist})}
          onPress={() => setIsEditing(prev => !prev)}>
          <EditIcon />
        </TouchableOpacity>
      </View>

      {isEditing && (
        <View className="gap-4 m-4">
          <View className="flex-row gap-4 items-center">
            {!imageUrl && (
              <TouchableOpacity
                className="bg-primary w-[64] h-[64] rounded-full items-center justify-center"
                onPress={handleImageSelect}>
                <Text className="text-red font-bold text-3xl pb-[3px] pl-[3px]">
                  +
                </Text>
              </TouchableOpacity>
            )}

            {imageUrl && (
              <TouchableOpacity
                className="bg-primary w-[64] h-[64] rounded-full items-center justify-center"
                onPress={handleRemoveImage}>
                <Image
                  source={{uri: imageUrl}}
                  className="w-[64] h-[64] rounded-full"
                />
              </TouchableOpacity>
            )}

            <Input
              value={name}
              onChangeText={setName}
              placeholder="Enter your username"
              className="text-white flex-1 py-2 h-12"
            />
          </View>

          <Button
            disabled={isDisabled}
            text="Save"
            onPress={handleUserSave}
            className="h-10"
          />
        </View>
      )}

      {!isEditing && (
        <View className="flex-row gap-4 m-4 items-center">
          {imageUrl && (
            <View className="bg-primary w-[64] h-[64] rounded-full items-center justify-center">
              <Image
                source={{uri: imageUrl}}
                className="w-[64] h-[64] rounded-full"
              />
            </View>
          )}

          {!imageUrl && (
            <View className="bg-primary w-[64] h-[64] rounded-full items-center justify-center">
              <Text>{name[0]}</Text>
            </View>
          )}

          <Text className="text-white font-bold text-2xl">{name}</Text>
        </View>
      )}

      <View className="flex-row gap-4 justify-center items-center">
        {options.map(option => (
          <TouchableOpacity
            key={option.label}
            className="bg-primary border border-red rounded-2xl py-3 px-4"
            onPress={() => handleOptionPress(option.value)}>
            <Text className="font-semibold text-white text-sm">
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View className="mt-6 gap-3 mx-4">
        <Text className="font-bold text-xl text-white">Stats</Text>

        <View className="bg-primary rounded-2xl p-4 gap-3">
          <View className="flex-row items-center justify-between border-b border-b-[#464655] pb-2">
            <Text className="text-white font-semibold">Signs up</Text>
            <Text className="text-white">{signUps.length}</Text>
          </View>
          <View className="flex-row items-center justify-between border-b border-b-[#464655] pb-2">
            <Text className="text-white font-semibold">Reviews</Text>
            <Text className="text-white">{userReviewCount}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-white font-semibold">In favorites</Text>
            <Text className="text-white">
              {favoriteExperienceCount + favoritePlacesCount}
            </Text>
          </View>
        </View>
      </View>

      <View className="mx-4 mt-6 gap-3">
        <Text className="font-bold text-xl text-white">History</Text>

        {!isHistoryExist && (
          <View className="items-center justify-center mt-2">
            <Text className="text-white text-lg">Nothing here yet</Text>
          </View>
        )}

        {isHistoryExist && (
          <ScrollView
            className="mb-[460px]"
            showsVerticalScrollIndicator={false}>
            {signUps.map(signUp =>
              signUp.services.map(service => {
                const serviceName = spaServices.find(
                  item => item.value === service,
                )?.label;
                return (
                  <View
                    className="bg-primary rounded-2xl p-3 gap-3 mb-5"
                    key={signUp.date + '-' + service}>
                    <View className="flex-row items-center justify-between">
                      <Text className="text-white font-bold text-xl">
                        {serviceName}
                      </Text>
                    </View>

                    <View className="flex-row items-center justify-between">
                      <Text className="text-white-50 text-xs">
                        {dayjs(signUp.date).format('DD MMMM YYYY')}
                      </Text>
                      <Text className="text-white-50 text-xs">
                        {dayjs(signUp.time).format('hh:mm A')}
                      </Text>
                    </View>
                  </View>
                );
              }),
            )}
          </ScrollView>
        )}
      </View>

      <NavBar />
    </Area>
  );
}

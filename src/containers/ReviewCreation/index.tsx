import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Area from '@/components/Area';
import BackAction from '@/components/BackAction';
import LabelInput from '@/components/LabelInput';
import RatingSelect from '@/components/RatingSelect';
import Button from '@/components/Button';
import {launchImageLibrary} from 'react-native-image-picker';
import {useUserStore} from '@/stores/userStore';
import dayjs from 'dayjs';

import {useNavigation} from '@react-navigation/native';
import {NavType, Pages, Place} from '@/models/default';

export default function ReviewCreation({route}: any) {
  const navigation = useNavigation<NavType>();

  const place = route?.params?.place as Place;

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  const addUserReview = useUserStore(state => state.addUserReview);

  const isDisabled = !comment || !rating;

  const handleAddReview = () => {
    addUserReview({
      placeId: place.id,
      category: place.category,
      user: {
        imageUrl: '',
        name: 'You',
      },
      rating,
      text: comment,
      date: dayjs().toISOString(),
      imageUrls: images,
    });

    navigation.navigate(Pages.PlaceOverview, {place});
  };

  const handleSelectImage = async () => {
    if (images.length >= 3) {
      Alert.alert('Limit Reached', 'You can select up to 3 images only.');
      return;
    }

    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
    });

    if (result.assets && result.assets.length > 0) {
      const selectedImage = result.assets[0].uri;
      if (selectedImage) {
        setImages(prev => [...prev, selectedImage]);
      }
    }
  };

  const handleRemoveImage = (index: number) => {
    Alert.alert('Remove Image', 'Are you sure you want to remove this image?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Remove',
        style: 'destructive',
        onPress: () => setImages(prev => prev.filter((_, i) => i !== index)),
      },
    ]);
  };

  return (
    <Area>
      <View className="mx-4">
        <BackAction />

        <Text className="text-white font-bold text-3xl mt-2">Review</Text>

        <ScrollView className="mt-2">
          <View className="gap-8 mt-4">
            <View className="gap-3">
              <Text className="text-white font-bold text-xl">Grade</Text>
              <RatingSelect
                rating={rating}
                onChange={setRating}
                starBgColor="#202028"
                size={46}
              />
            </View>

            <LabelInput
              multiline
              label="Comment"
              value={comment}
              onChange={setComment}
            />

            <View>
              <Text className="text-white font-bold text-xl mb-2">Images</Text>
              <View className="flex-row flex-wrap gap-2">
                {images.map((uri, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleRemoveImage(index)}
                    className="w-[100px] h-[148px] rounded-lg overflow-hidden">
                    <Image
                      source={{uri}}
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                ))}
                {images.length < 3 && (
                  <TouchableOpacity
                    onPress={handleSelectImage}
                    className="w-[100px] h-[148px] rounded-lg bg-[#1B1A1A] items-center justify-center">
                    <Text className="text-red text-3xl font-bold">+</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <View className="p-4 bg-primary mt-auto">
        <Button
          disabled={isDisabled}
          text="Add review"
          onPress={handleAddReview}
        />
      </View>
    </Area>
  );
}

import {View, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import MapView, {Marker, Region} from 'react-native-maps';
import {Place as PlaceT} from '@/models/default';
import Place from '@/components/Place';

const QuebecCityCoordinates = {
  latitude: 46.8139,
  longitude: -71.2082,
};

interface Props {
  favoritePlaces: number[];
  places: PlaceT[];
  onSignUp: (place: PlaceT) => void;
  onFavorite: (place: PlaceT, isFavorite: boolean) => void;
  onShare: (place: PlaceT) => void;
  onPress: (place: PlaceT) => void;
}

export default function Map({
  favoritePlaces,
  places,
  onSignUp,
  onFavorite,
  onShare,
  onPress,
}: Props) {
  const [currentPlace, setCurrentPlace] = useState<PlaceT | null>(null);
  const [region, setRegion] = useState<Region>({
    latitude: QuebecCityCoordinates.latitude,
    longitude: QuebecCityCoordinates.longitude,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  const handleZoom = (zoomIn: boolean) => {
    setRegion(prevRegion => ({
      ...prevRegion,
      latitudeDelta: zoomIn
        ? prevRegion.latitudeDelta / 2
        : prevRegion.latitudeDelta * 2,
      longitudeDelta: zoomIn
        ? prevRegion.longitudeDelta / 2
        : prevRegion.longitudeDelta * 2,
    }));
  };

  return (
    <View className="flex-1 relative">
      <MapView
        style={{flex: 1}}
        region={region}
        onRegionChangeComplete={setRegion}>
        {places.map(marker => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinates}
            onPress={() =>
              setCurrentPlace(marker.id === currentPlace?.id ? null : marker)
            }
          />
        ))}
      </MapView>

      {currentPlace && (
        <View className="p-4 absolute bottom-[60px] left-0 right-0">
          <Place
            place={currentPlace}
            isFavorite={favoritePlaces.includes(currentPlace.id)}
            onSignUp={onSignUp}
            onFavorite={onFavorite}
            onShare={onShare}
            onPress={onPress}
          />
        </View>
      )}

      {/* Zoom Buttons */}
      <View className="absolute top-4 right-4 flex-col space-y-2">
        <TouchableOpacity
          onPress={() => handleZoom(true)}
          className="p-2 rounded-full bg-gray-800">
          <Text className="text-white text-xl">+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleZoom(false)}
          className="p-2 rounded-full bg-gray-800">
          <Text className="text-white text-xl">-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

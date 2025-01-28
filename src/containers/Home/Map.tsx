import {View} from 'react-native';
import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
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

  return (
    <View className="flex-1 relative">
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: QuebecCityCoordinates.latitude,
          longitude: QuebecCityCoordinates.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}>
        {places.map(marker => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinates}
            // title={marker.name}
            // description={marker.description}
            onPress={() =>
              setCurrentPlace(marker.id === currentPlace?.id ? null : marker)
            }
          />
        ))}
      </MapView>

      {currentPlace && (
        <View className="p-4 absolute bottom-0 left-0 right-0">
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
    </View>
  );
}

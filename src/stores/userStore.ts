import {IReview, ISignUp, IUser} from '@/models/default';
import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {MMKVLoader} from 'react-native-mmkv-storage';

const MMKV = new MMKVLoader().initialize();

interface State {
  user: IUser;
  setUser: (user: IUser) => void;

  favoritePlaces: number[];
  addFavoritePlace: (placeId: number) => void;
  removeFavoritePlace: (placeId: number) => void;

  userReview: IReview[];
  addUserReview: (review: Omit<IReview, 'id'>) => void;
  removeUserReview: (id: number) => void;

  favoriteExperience: number[];
  addFavoriteExperience: (experienceId: number) => void;
  removeFavoriteExperience: (experienceId: number) => void;

  signUps: ISignUp[];
  addSignUp: (signUp: Omit<ISignUp, 'id'>) => void;
}

export const useUserStore = create(
  persist<State>(
    (set, get) => ({
      user: {imageUrl: '', name: ''},
      setUser: user => set({user}),

      favoritePlaces: [],
      addFavoritePlace: placeId => {
        set({favoritePlaces: [...get().favoritePlaces, placeId]});
      },
      removeFavoritePlace: placeId => {
        set({
          favoritePlaces: get().favoritePlaces.filter(id => id !== placeId),
        });
      },

      userReview: [],
      addUserReview: review => {
        const reviews = get().userReview;
        const lastId =
          reviews.length > 0 ? reviews[reviews.length - 1].id + 1 : 1;
        const newReview = {id: lastId, ...review};
        set({userReview: [...reviews, newReview]});
      },
      removeUserReview: id => {
        set({userReview: get().userReview.filter(review => review.id !== id)});
      },

      favoriteExperience: [],
      addFavoriteExperience: experienceId => {
        set({favoriteExperience: [...get().favoriteExperience, experienceId]});
      },
      removeFavoriteExperience: experienceId => {
        set({
          favoriteExperience: get().favoriteExperience.filter(
            id => id !== experienceId,
          ),
        });
      },

      signUps: [],
      addSignUp: signUp => {
        set({signUps: [...get().signUps, signUp]});
      },
    }),
    {
      storage: {
        getItem: (key: string) => MMKV.getMap(key) ?? null,
        setItem: (key: string, value: any) => MMKV.setMap(key, value),
        removeItem: (key: string) => MMKV.removeItem(key),
      },
      name: 'commonStore',
    },
  ),
);

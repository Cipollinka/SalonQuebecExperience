import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum Pages {
  Home = 'Home',
  Category = 'Category',
  PlaceOverview = 'PlaceOverview',
  SignUp = 'SignUp',
  SignUpSecond = 'SignUpSecond',
  ReviewCreation = 'ReviewCreation',
  Profile = 'profile',
  Experience = 'Experience',
  UserReviews = 'UserReviews',
  Discounts = 'Discounts',
  QRCode = 'QRCode',
}

export type RoutesWithValues = {
  [Pages.Home]: undefined;
  [Pages.Category]: {
    category: {value: Category; label: string};
    rating: number;
  };
  [Pages.PlaceOverview]: {
    place: Place;
  };
  [Pages.SignUp]: undefined;
  [Pages.ReviewCreation]: {
    place: Place;
  };
  [Pages.SignUpSecond]: {date: string; time: string};
  [Pages.Profile]: undefined;
  [Pages.Experience]: undefined;
  [Pages.UserReviews]: undefined;
  [Pages.Discounts]: undefined;
  [Pages.QRCode]: {code: string};
};

export type NavType = NativeStackNavigationProp<RoutesWithValues>;

export enum HomeTabs {
  Map,
  List,
}

export enum Category {
  Hairdressers = 1,
  Manicure,
  Spa,
  Massage,
}

export interface Place {
  id: number;
  name: string;
  description: string;
  address: string;
  rating: number;
  imageUrl: string;
  category: number;
  schedule: string;
  coordinates: {latitude: number; longitude: number};
}

export interface IReview {
  id: number;
  placeId: number;
  category?: Category;
  user: {
    imageUrl: string;
    name: string;
  };
  rating: number;
  text: string;
  date: string;
  imageUrls?: string[];
}

export interface IUser {
  imageUrl: string;
  name: string;
}

export interface ISignUp {
  date: string;
  time: string;
  name: string;
  phone: string;
  comment?: string;
  services: number[];
}

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RoutesWithValues, Pages} from '@/models/default';
import Home from '@/containers/Home';
import CategoryView from '@/containers/Category';
import SignUp from '@/containers/SignUp';
import SignUpSecond from '@/containers/SignUp/second';
import PlaceOverview from '@/containers/PlaceOverview';
import ReviewCreation from '@/containers/ReviewCreation';
import Profile from '@/containers/Profile';
import Experience from '@/containers/Experience';
import UserReviews from '@/containers/UserReviews';
import QRCode from '@/containers/Discounts/QRCode';
import Discounts from '@/containers/Discounts';

const Stack = createNativeStackNavigator<RoutesWithValues>();

const EntryPoint = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Pages.Home}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={Pages.Home} component={Home} />
        <Stack.Screen name={Pages.Category} component={CategoryView} />
        <Stack.Screen name={Pages.PlaceOverview} component={PlaceOverview} />

        <Stack.Screen name={Pages.SignUp} component={SignUp} />
        <Stack.Screen name={Pages.SignUpSecond} component={SignUpSecond} />
        <Stack.Screen name={Pages.ReviewCreation} component={ReviewCreation} />
        <Stack.Screen name={Pages.Profile} component={Profile} />
        <Stack.Screen name={Pages.Experience} component={Experience} />
        <Stack.Screen name={Pages.UserReviews} component={UserReviews} />
        <Stack.Screen name={Pages.Discounts} component={Discounts} />
        <Stack.Screen name={Pages.QRCode} component={QRCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default EntryPoint;

import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import Area from '@/components/Area';
import BackAction from '@/components/BackAction';
import Collapsible from 'react-native-collapsible';
import LabelInput from '@/components/LabelInput';

import Button from '@/components/Button';
import {NavType, Pages} from '@/models/default';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

import ChevronIcon from '@/assets/images/icons/chevron.svg';
import CrossIcon from '@/assets/images/icons/cross.svg';
import {useUserStore} from '@/stores/userStore';
import {spaServices} from '@/predefined/common';

export default function SignUpSecond({route}: {route: any}) {
  const nav = useNavigation<NavType>();

  const date = route?.params?.date as string;
  const time = route?.params?.time as string;

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');

  const [isSuccess, setIsSuccess] = useState(false);

  const addSignUp = useUserStore(state => state.addSignUp);

  const isDisabled =
    selectedServices.length === 0 || name.length === 0 || phone.length === 0;

  const handleSingUp = () => {
    setTimeout(() => {
      setIsSuccess(true);
      addSignUp({
        date,
        time,
        name,
        phone,
        services: selectedServices,
      });
    }, 1000);
  };

  const handleClose = () => {
    setIsSuccess(false);
    nav.navigate(Pages.Home);
  };

  return (
    <Area>
      {isSuccess && (
        <View className="absolute top-0 bottom-0 left-0 right-0 pt-10 px-10 bg-[#000000cc] z-10">
          <TouchableOpacity onPress={handleClose} className="flex-row-reverse">
            <CrossIcon />
          </TouchableOpacity>
          <View className="mx-auto mt-20 items-center">
            <Image
              source={require('@/assets/images/success.png')}
              className="w-[171px] h-[171px] "
            />

            <Text className="text-3xl font-semibold text-white mt-[44px]">
              Successfully signed up
            </Text>
            <Text className="text-white mt-6 text-center">
              SMS with all information will be sent to you soon
            </Text>
          </View>
          <View className="mt-6">
            <Button text="Continue" onPress={handleClose} />
          </View>
        </View>
      )}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="m-4">
          <BackAction />

          <Text className="mt-4 mb-6 text-white font-bold text-3xl">
            Sign up
          </Text>

          <View className="gap-8">
            <View className="gap-2">
              <TouchableOpacity
                onPress={() => setIsCollapsed(prev => !prev)}
                className="flex-row items-center justify-between ">
                <Text className="text-white font-bold text-xl">
                  Choose service
                </Text>

                <ChevronIcon
                  style={{
                    transform: [{rotate: isCollapsed ? '0deg' : '180deg'}],
                  }}
                />
              </TouchableOpacity>

              <Collapsible
                collapsed={isCollapsed}
                style={{paddingHorizontal: 20, gap: 10}}>
                {spaServices.map(service => {
                  const isChecked = selectedServices.includes(service.value);
                  return (
                    <View
                      className="flex-row items-center justify-between my-2"
                      key={service.value}>
                      <Text className="text-white">{service.label}</Text>
                      <CheckBox
                        value={isChecked}
                        lineWidth={2}
                        style={{width: 20, height: 20}}
                        boxType="square"
                        onFillColor="#E00C39"
                        onTintColor="#E00C39"
                        onCheckColor="#fff"
                        animationDuration={0.2}
                        onValueChange={() =>
                          setSelectedServices(prev =>
                            isChecked
                              ? prev.filter(i => i !== service.value)
                              : [...prev, service.value],
                          )
                        }
                      />
                    </View>
                  );
                })}
              </Collapsible>
            </View>

            <LabelInput label="Name" value={name} onChange={setName} />
            <LabelInput
              label="Mobile phone"
              value={phone}
              onChange={setPhone}
            />
            <LabelInput
              label="Comment"
              value={comment}
              onChange={setComment}
              multiline
            />
          </View>
        </View>
      </ScrollView>
      <View className="bg-primary mt-auto p-4">
        <Button text="Continue" onPress={handleSingUp} disabled={isDisabled} />
      </View>
    </Area>
  );
}

import React, {useEffect, useRef} from 'react';
import {View, TouchableOpacity, Animated, StyleSheet, Text} from 'react-native';
// import CustomText from './ui/Text';

interface Props<T> {
  tab: T;
  onChangeTab: (tab: T) => void;
  tabs: string[];
  variant?: 'primary' | 'secondary';
  className?: string;
  indicatorWidthG?: number;
  coeficient?: number;
}

function Tabs<T extends number>({
  tab: currentTab,
  onChangeTab,
  tabs,
  variant,
  className,
  indicatorWidthG,
  coeficient,
}: Props<T>) {
  const indicatorPosition = useRef(new Animated.Value(1)).current;

  const handlePress = (index: T) => {
    onChangeTab(index);
    Animated.spring(indicatorPosition, {
      toValue: index,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    Animated.spring(indicatorPosition, {
      toValue: currentTab,
      useNativeDriver: true,
    }).start();
  }, [currentTab, indicatorPosition]);

  const indicatorWidth = (indicatorWidthG || 100) / tabs.length;

  return (
    <View style={styles.container} className={className}>
      <View
        style={[
          styles.tabContainer,
          {backgroundColor: variant === 'primary' ? '#31313D' : '#464655'},
        ]}>
        <Animated.View
          style={[
            styles.indicator,
            {
              transform: [
                {
                  translateX: indicatorPosition.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, indicatorWidth * (coeficient || 2.46)],
                  }),
                },
              ],
              width: `${indicatorWidth}%`,
            },
          ]}
        />
        {tabs.map((tab, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.tab}
              onPress={() => handlePress(index)}>
              <Text style={{color: '#fff'}}>{tab}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 6,
  },
  selectedText: {
    color: '#000',
  },
  indicator: {
    position: 'absolute',
    height: '100%',
    backgroundColor: '#E00C39',
    borderRadius: 20,
  },
});

export default Tabs;

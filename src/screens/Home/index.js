import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {David, SearchPlace, Filter, Category, Menu} from '../../components';
import RoutesNames from '../../config/RoutesNames';

const home = ({navigation}) => {
  return (
    <View>
      <David />
      <SearchPlace />
      <Filter />
      <ScrollView horizontal>
        <Category
          navigation={() => {
            navigation.navigate(RoutesNames.ANDESMOUNTAIN, {
              id: '12',
            });
          }}
        />
        <Category
          navigation={() => {
            navigation.navigate(RoutesNames.ANDESMOUNTAIN, {
              id: '22',
            });
          }}
        />
        <Category
          navigation={() => {
            navigation.navigate(RoutesNames.ANDESMOUNTAIN, {
              id: '321',
            });
          }}
        />
      </ScrollView>
    </View>
  );
};

export default home;

import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Styles from './style';
import Icons from '../../assets/icons';
import LinearGradient from 'react-native-linear-gradient';
import {RoutesNames} from '../../config';

const start = ({navigation}) => {
  return (
    <LinearGradient colors={['#0172B2', '#001645']} style={Styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(RoutesNames.TAB_SCREEN);
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <View>
            <Text
              style={{
                fontFamily: 'Lobster-Regular',
                fontSize: 38,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Travel
            </Text>
          </View>
          <View style={{marginLeft: 10}}>
            <Image source={Icons.earth} style={Styles.earthIcon} />
          </View>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={Styles.description}>Find Your Dream</Text>
      </View>
      <View>
        <Text style={Styles.description}>Destination With Us</Text>
      </View>
    </LinearGradient>
  );
};

export default start;

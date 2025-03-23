import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Icons} from '../../assets';
import styles from './styles';

const SplashScreen = ({navigation}) => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.appName}>Travel</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('vv');
          }}>
          <Image source={Icons.travel} style={styles.logo} />
        </TouchableOpacity>
      </View>
      <Text style={styles.tagline}>Find Your Dream Destination With Us</Text>
    </View>
  );
};

export default SplashScreen;

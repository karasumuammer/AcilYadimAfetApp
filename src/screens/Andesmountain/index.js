import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BookNowButton, Detail, Mountain} from '../../components';

const AndesMountain = ({navigation, route}) => {
  console.log('route', route);
  return (
    <View>
      <Mountain productName={route.params.id} navigation={navigation} />
      <Detail />
      <View style={styles.container}>
        <Text>
          This vast mountain range is renowned for its remarkable diversity in
          terms of topography and climate. It features towering peaks, active
          volcanoes, deep canyons, expansive plateaus, and lush valleys. The
          Andes are also home to{' '}
        </Text>
      </View>
      <BookNowButton />
    </View>
  );
};

export default AndesMountain;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
});

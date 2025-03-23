import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// Add this import for RoutesNames
import { RoutesNames } from '../../config';

const { width, height } = Dimensions.get('window');

const Start = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#1e3c72', '#2a5298']}
        style={styles.background}
      >
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991231.png' }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.appName}>Acil Yardım</Text>
          <Text style={styles.tagline}>Afet anında yanınızdayız</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            Afet ve acil durumlarda hızlı iletişim, koordinasyon ve yardım için
            güvenilir çözüm
          </Text>
        </View>

        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2518/2518048.png' }}
              style={styles.featureIcon}
            />
            <Text style={styles.featureText}>Acil Yardım Çağrısı</Text>
          </View>
          <View style={styles.featureItem}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3588/3588614.png' }}
              style={styles.featureIcon}
            />
            <Text style={styles.featureText}>Gönüllü Ol</Text>
          </View>
          <View style={styles.featureItem}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2382/2382461.png' }}
              style={styles.featureIcon}
            />
            <Text style={styles.featureText}>Bağış Yap</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>BAŞLA</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={() => {/* Bilgi sayfasına yönlendirme */}}
          >
            <Text style={[styles.buttonText, styles.secondaryButtonText]}>
              DAHA FAZLA BİLGİ
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 15,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  tagline: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  infoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  featureItem: {
    alignItems: 'center',
    width: width / 3.5,
  },
  featureIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
    tintColor: 'white',
  },
  featureText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 'auto',
  },
  button: {
    backgroundColor: '#ff5722',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
  },
  secondaryButtonText: {
    color: 'white',
  },
});

export default Start;
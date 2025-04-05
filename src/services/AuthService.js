import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// API URL - replace with your actual backend URL
const API_URL = 'https://your-backend-api.com/api';

// Initialize Google Sign-In
GoogleSignin.configure({
  webClientId: 'YOUR_WEB_CLIENT_ID', // Get this from Firebase console
});

class AuthService {
  // Register with email and password
  async register(name, email, password) {
    try {
      // Create user in Firebase
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      
      // Update user profile with name
      await userCredential.user.updateProfile({
        displayName: name,
      });
      
      // Send verification email
      await userCredential.user.sendEmailVerification();
      
      // Create user in your backend
      const response = await axios.post(`${API_URL}/users`, {
        uid: userCredential.user.uid,
        name,
        email,
      });
      
      return {
        success: true,
        user: userCredential.user,
        message: 'Kayıt başarılı! Lütfen e-posta adresinizi doğrulayın.',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }
  
  // Login with email and password
  async login(email, password) {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      
      // Check if email is verified
      if (!userCredential.user.emailVerified) {
        return {
          success: false,
          error: 'Lütfen önce e-posta adresinizi doğrulayın.',
        };
      }
      
      // Get JWT token from Firebase
      const token = await userCredential.user.getIdToken();
      
      // Store token in AsyncStorage
      await AsyncStorage.setItem('userToken', token);
      
      return {
        success: true,
        user: userCredential.user,
        token,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }
  
  // Google Sign-In
  async googleLogin() {
    try {
      // Get user ID token
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
      // Sign in with credential
      const userCredential = await auth().signInWithCredential(googleCredential);
      
      // Get JWT token
      const token = await userCredential.user.getIdToken();
      
      // Store token in AsyncStorage
      await AsyncStorage.setItem('userToken', token);
      
      // Check if user exists in your backend, if not create one
      try {
        await axios.post(`${API_URL}/users`, {
          uid: userCredential.user.uid,
          name: userCredential.user.displayName,
          email: userCredential.user.email,
          photoURL: userCredential.user.photoURL,
        });
      } catch (error) {
        // User might already exist, that's fine
        console.log('User might already exist:', error.message);
      }
      
      return {
        success: true,
        user: userCredential.user,
        token,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }
  
  // Logout
  async logout() {
    try {
      await auth().signOut();
      await AsyncStorage.removeItem('userToken');
      
      // Check if user signed in with Google
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (isSignedIn) {
        await GoogleSignin.signOut();
      }
      
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }
  
  // Password reset
  async resetPassword(email) {
    try {
      await auth().sendPasswordResetEmail(email);
      return {
        success: true,
        message: 'Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.',
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }
  
  // Get current user
  async getCurrentUser() {
    const user = auth().currentUser;
    if (user) {
      return {
        success: true,
        user,
      };
    }
    return {
      success: false,
      error: 'Kullanıcı oturumu bulunamadı.',
    };
  }
  
  // Check if user is authenticated
  async isAuthenticated() {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) return false;
      
      // Verify token with your backend
      const response = await axios.get(`${API_URL}/auth/verify`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      return response.data.valid;
    } catch (error) {
      return false;
    }
  }
}

export default new AuthService();
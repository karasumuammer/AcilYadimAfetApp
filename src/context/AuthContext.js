import React, { createContext, useState, useEffect, useContext } from 'react';
import AuthService from '../services/AuthService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth'; // Import Firebase auth directly

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Check if user is logged in on app start
  useEffect(() => {
    const checkUser = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        
        if (token) {
          const result = await AuthService.getCurrentUser();
          if (result.success) {
            setUser(result.user);
          } else {
            // Token exists but user not found, clear token
            await AsyncStorage.removeItem('userToken');
          }
        }
      } catch (error) {
        console.log('Auth check error:', error);
      } finally {
        setLoading(false);
      }
    };
    
    checkUser();
  }, []);
  
  // Listen for auth state changes
  useEffect(() => {
    // Use Firebase auth directly instead of AuthService.auth()
    const subscriber = auth().onAuthStateChanged(async (authUser) => {
      if (authUser) {
        setUser(authUser);
        // Get fresh token
        const token = await authUser.getIdToken();
        await AsyncStorage.setItem('userToken', token);
      } else {
        setUser(null);
        await AsyncStorage.removeItem('userToken');
      }
      setLoading(false);
    });
    
    // Unsubscribe on unmount
    return subscriber;
  }, []);
  
  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login: AuthService.login,
        register: AuthService.register,
        logout: AuthService.logout,
        googleLogin: AuthService.googleLogin,
        resetPassword: AuthService.resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const BottomNavigation = ({ navigation, activeTab }) => {
  const tabs = [
    { name: "Home", icon: "home-outline", activeIcon: "home" },
    { name: "times", icon: "times-outline", activeIcon: "times" },
    { name: "Favorites", icon: "heart-outline", activeIcon: "heart" },
    { name: "Profile", icon: "person-outline", activeIcon: "person" },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.tab}
          onPress={() => navigation.navigate(tab.name)}
        >
          <Icon
            name={activeTab === tab.name ? tab.activeIcon : tab.icon}
            size={24}
            color={activeTab === tab.name ? "#1E90FF" : "#A9A9A9"}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default BottomNavigation;

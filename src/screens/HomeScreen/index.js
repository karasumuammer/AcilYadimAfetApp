import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {
  CardComponent,
  HeaderComponent,
  SearchComponent,
  TabsComponent,
} from '../../components';
import styles from './styles';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("Most Viewed");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    console.log(`Switched to tab: ${tab}`);
  };

  const handleViewAllPress = () => {
    console.log("View All Pressed");
  };

  const popularPlaces = [
    {
      id: '1',
      title: 'Mount Fuji, Tokyo',
      location: 'Japan',
      rating: '4.8',
      image: require('../../assets/images/mount_fuji.png'),
    },
    {
      id: '2',
      title: 'Andes Mountain',
      location: 'South America',
      rating: '4.5',
      image: require('../../assets/images/andes.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <HeaderComponent
        userName="David"
        profileImage={require('../../assets/images/profile.png')}
      />
      <SearchComponent />
      <TabsComponent
        title="Popular places"
        tabs={["Most Viewed", "Nearby", "Latest"]}
        activeTab={activeTab}
        onTabPress={handleTabPress}
        onViewAllPress={handleViewAllPress}
      />
      <FlatList
        data={popularPlaces}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <CardComponent
            title={item.title}
            location={item.location}
            rating={item.rating}
            image={item.image}

          />
        )}
        style={{marginTop: 20}}
      />
    </View>
  );
};

export default HomeScreen;

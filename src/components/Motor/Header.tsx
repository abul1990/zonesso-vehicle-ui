import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import FilterSvg from '../svg/FilterSvg';

interface HeaderProps {
  location: string;
}

const Header: React.FC<HeaderProps> = ({ location }) => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };

  const handleFilter = () => {
    //@ts-ignore
    navigation.navigate('Filter');
  };

  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="black"
          onPress={handleBack}
        />
        <Text>{location}</Text>
      </View>
      <View style={styles.actionsContainer}>
        <Ionicons name="search" size={24} color="black" />
        <TouchableOpacity onPress={handleFilter}>
          <FilterSvg color="black" />
        </TouchableOpacity>
        <Ionicons name="heart" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10
  },
});

export default Header;

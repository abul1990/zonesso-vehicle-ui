import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import FilterSvg from '../svg/FilterSvg';


const Header: React.FC = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="black"
          onPress={handleBack}
        />
        <Text style={{fontSize: 18, fontWeight:'bold'}}>Filters</Text>
        <Text style={{color: 'red'}}>Reset</Text>
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
});

export default Header;

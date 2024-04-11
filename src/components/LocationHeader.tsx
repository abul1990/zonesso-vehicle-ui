import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

interface LocationHeaderProps {
  location: string;
  onLocationChange: (newLocation: string) => void;
}

const LocationHeader: React.FC<LocationHeaderProps> = ({
  location,
  onLocationChange,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Ionicons name="location" size={24} color="red" />
        <RNPickerSelect
          style={pickerSelectStyles}
          value={location}
          onValueChange={(value) => onLocationChange(value)}
          items={[
            { label: 'Dubai', value: 'Dubai' },
            { label: 'Abu Dhabi', value: 'Abu Dhabi' },
            { label: 'Sharjah', value: 'Sharjah' },
          ]}
          Icon={() => (
            <Ionicons
                name="chevron-down"
                size={24}
                color="black"
              />
          )}
        />
      </View>
      <Ionicons name="search" size={24} color="black" />
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
    alignItems: 'center',
  },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 12,
      color: 'black',
      paddingRight: 50, 
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 50,
    },
    iconContainer: {
      top: 10,
      right: 15,
    },
  });
  

export default LocationHeader;

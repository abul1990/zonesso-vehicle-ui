import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-check-box';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

const Detail: React.FC = () => {
  const [priceRange, setPriceRange] = useState({ min: 10, max: 200000 });
  const [yearRange, setYearRange] = useState({ min: 1990, max: new Date().getFullYear() });
  const [isChecked, setIsChecked] = useState(false);
  const [location, setLocation] = useState<string>('Dubai');
  const [category, setCategory] = useState<string>('Motor');

  const handlePriceChange = (value: number) => {
    setPriceRange((prevRange) => ({ ...prevRange, max: value }));
  };

  const handleYearChange = (value: number) => {
    setYearRange((prevRange) => ({ ...prevRange, max: value }));
  };

  return (
    <View style={styles.container}>
      {/* City */}
      <View style={styles.row}>
        <Text style={styles.label}>City</Text>
        <RNPickerSelect
          style={pickerSelectStyles}
          value={location}
          onValueChange={(value) => setLocation(value)}
          items={[
            { label: 'Dubai', value: 'Dubai' },
            { label: 'Abu Dhabi', value: 'Abu Dhabi' },
            { label: 'Sharjah', value: 'Sharjah' },
          ]}
          Icon={() => (
            <Ionicons
                name="chevron-forward"
                size={24}
                color="black"
              />
          )}
        />
      </View>
      <View style={styles.divider} />
      
      {/* Category */}
      <View style={styles.row}>
        <Text style={styles.label}>Category</Text>
        <RNPickerSelect
          style={pickerSelectStyles}
          value={category}
          onValueChange={(value) => setCategory(value)}
          items={[
            { label: 'Motor', value: 'Motor' },
            { label: 'Motorbike', value: 'Motorbike' },
          ]}
          Icon={() => (
            <Ionicons
                name="chevron-forward"
                size={24}
                color="black"
              />
          )}
        />
      </View>
      <View style={styles.divider} />

      {/* Price */}
      <Text style={styles.label}>Price (AED)</Text>
      <Slider
        style={styles.slider}
        minimumValue={10}
        maximumValue={200000}
        minimumTrackTintColor="#FF0000"
        maximumTrackTintColor="#000000"
        thumbTintColor="#FF0000"
        step={10}
        onValueChange={handlePriceChange}
      />
      <View style={styles.rangeContainer}>
        <Text style={styles.rangeText}>AED {priceRange.min}</Text>
        <Text style={styles.rangeText}>AED {priceRange.max}</Text>
      </View>
      <View style={styles.divider} />

      {/* Keyword */}
      <Text style={styles.label}>Keyword</Text>
      <TextInput style={styles.textInput} placeholder="Search Keywords" />
      <View style={styles.divider} />

      {/* Year */}
      <Text style={styles.label}>Year</Text>
      <Slider
        style={styles.slider}
        minimumValue={1990}
        maximumValue={new Date().getFullYear()}
        minimumTrackTintColor="#FF0000"
        maximumTrackTintColor="#000000"
        thumbTintColor="#FF0000"
        step={1}
        onValueChange={handleYearChange}
      />
      <View style={styles.rangeContainer}>
        <Text style={styles.rangeText}>{yearRange.min}</Text>
        <Text style={styles.rangeText}>{yearRange.max}</Text>
      </View>
      <View style={styles.divider} />

      {/* Checkbox */}
      <View style={styles.row}>
        <CheckBox
          style={{ flex: 1, padding: 10 }}
          onClick={() => setIsChecked(!isChecked)}
          isChecked={isChecked}
          leftText={"Show ads by verified users"}
        />
      </View>
      <View style={styles.divider} />

      {/* Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button]}>
          <View style={styles.buttonContent}>
            <Text style={styles.callText}>Show 200 results</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10, 
    },
    label: {
      fontWeight: 'bold',
      marginBottom: 5, 
    },
    value: {
      color: '#333',
    },
    divider: {
      borderBottomWidth: 1,
      borderBottomColor: '#999',
      marginTop: 10, 
      marginBottom: 10, 
    },
    slider: {
      width: '100%',
      marginTop: 5, 
      marginBottom: 5, 
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#999',
      borderRadius: 5,
      padding: 10,
      width: '100%',
      marginBottom: 5, 
    },
    rangeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    rangeText: {
      color: '#333',
    },
    buttonContainer: {
      marginTop: 20,  
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      backgroundColor: '#F06100', 
    },
    buttonContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center', 
    },
    callText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
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

export default Detail;

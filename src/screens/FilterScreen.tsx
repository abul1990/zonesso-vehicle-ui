import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ScreenWithMarginTop from '../components/ScreenWithMarginTop';
import Header from '../components/Filter/Header';
import Detail from '../components/Filter/Detail';

const FilterScreen: React.FC = () => {
  return (
    <ScreenWithMarginTop>
      <Header></Header>
      <Detail></Detail>
    </ScreenWithMarginTop>
  );
};

export default FilterScreen;

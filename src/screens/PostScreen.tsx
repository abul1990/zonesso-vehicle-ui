import { View, Text, StyleSheet } from 'react-native';
import ScreenWithMarginTop from '../components/ScreenWithMarginTop';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';


const PostScreen: React.FC = () => {
  return (
    <ScreenWithMarginTop>
      <View style={styles.container}>
      <Ionicons name="construct" size={100} color="#FF3333" />
        <Text>Post - Comming soon...</Text>
      </View>
    </ScreenWithMarginTop>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default PostScreen;

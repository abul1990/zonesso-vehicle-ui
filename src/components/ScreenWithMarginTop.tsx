import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

const ScreenWithMarginTop: React.FC<any> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 24,
  },
});

export default ScreenWithMarginTop;

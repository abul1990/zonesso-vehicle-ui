import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface InfoProps {
  resultCount: number;
  location: string;
}

const ResultInfo: React.FC<InfoProps> = ({ resultCount, location }) => {
  return (
    <View style={styles.container}>
      <Text>
        Showing <Text style={{ color: 'red' }}>{resultCount}</Text> results in{' '}
        {location}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
});

export default ResultInfo;

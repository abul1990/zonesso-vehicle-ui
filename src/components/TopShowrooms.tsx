import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
// @ts-ignore
import {ViewPropTypes} from 'deprecated-react-native-prop-types';
import {ShowroomType} from '../types/ShowroomTypes';
import Showroom from './Showroom';


interface TopShowroomsProps {
  showrooms: ShowroomType[];
}

const TopShowrooms: React.FC<TopShowroomsProps> = ({ showrooms }) => {
  const renderShowroomItem = ({ item }: { item: ShowroomType }) => <Showroom {...item} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Top Showrooms</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <Carousel
        data={showrooms}
        renderItem={renderShowroomItem}
        sliderWidth={400}
        itemWidth={150}
        loop
        autoplay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAll: {
    color: 'red',
  },
});

export default TopShowrooms;

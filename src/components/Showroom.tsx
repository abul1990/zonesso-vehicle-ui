import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {ShowroomType} from '../types/ShowroomTypes';


const Showroom: React.FC<ShowroomType> = ({ name, imageSource, distance, iconSource }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Image source={iconSource} style={styles.iconContainer}/>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.distance}>{`${distance} km away`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    flexDirection: 'column',
  },
  imageContainer: {
    // width: '40%',
  },
  image: {
    width: '100%',
    height: 140,
    resizeMode: 'cover',
  },
  infoContainer: {
    // width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10,
    width: 20,
    height: 20
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  distance: {
    fontSize: 12,
  },
});

export default Showroom;

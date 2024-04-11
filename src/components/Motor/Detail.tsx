import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ShowroomResponse } from '../../types/ShowroomTypes';

const Detail: React.FC<ShowroomResponse> = ({ name, location, vehicles }) => {
  return (
    <>
      {vehicles.map((vehicle, index) => (
        <View key={index} style={styles.container}>
          <View style={styles.motorContainer}>
            <Image
              source={require('../../../assets/motor-lambo.png')}
              style={[styles.image, { borderRadius: 10 }]}
            />
            <View style={styles.overlay}>
              <Text
                style={[
                  styles.label,
                  { backgroundColor: index % 2 === 0 ? '#FF0000' : '#0BA5EC' },
                ]}
              >
                {index % 2 === 0 ? 'Premium' : 'Featured'}
              </Text>
              <View style={styles.icons}>
                <Ionicons name="share-social" size={24} color="white" />
                <Ionicons
                  name="heart-outline"
                  size={24}
                  color="white"
                  style={{ marginLeft: 10 }}
                />
              </View>
            </View>
          </View>
          <Text
            style={[
              styles.textMarginTop,
              { fontWeight: 'bold', color: '#FF0000' },
            ]}
          >
            AED {vehicle.price}
          </Text>
          <Text style={[styles.textMarginTop, { fontWeight: 'bold' }]}>
            {vehicle.brand}
          </Text>
          <Text style={[styles.textMarginTop]}>{vehicle.description}</Text>
          <Text style={[styles.textMarginTop, { fontSize: 11 }]}>
            Year: {vehicle.year}
          </Text>
          <View style={styles.showroomContainer}>
            <Image
              source={require('../../../assets/showroom-toyota.png')}
              style={styles.showroomImage}
            />
            <View>
              <Text>Location: {location}</Text>
              <Text>Posted On: </Text>
              <Text>Posted By: {name} </Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.chatButton]}>
              <View style={styles.buttonContent}>
                <Text style={styles.chatText}>Chat</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.callButton]}>
              <View style={styles.buttonContent}>
                <Text style={styles.callText}>Call</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    padding: 10,
  },
  motorContainer: {
    position: 'relative',
  },
  // image: {
  //   width: '100%',
  //   aspectRatio: 16 / 9, // or whatever your aspect ratio is
  // },
  overlay: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
  },

  icons: {
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: 200,
  },
  showroomContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  showroomImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  callButton: {
    backgroundColor: '#F06100',
  },
  callText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  chatButton: {
    borderWidth: 0.5,
    borderColor: '#F04438',
    backgroundColor: 'rgba(240, 68, 56, 0.1)',
  },
  chatText: {
    marginLeft: 5,
    fontSize: 16,
    color: 'red',
  },
  textMarginTop: {
    marginTop: 10,
  },
});

export default Detail;

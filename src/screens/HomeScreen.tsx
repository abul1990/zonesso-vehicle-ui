import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import ScreenWithMarginTop from '../components/ScreenWithMarginTop';
import LocationHeader from '../components/LocationHeader';
import TopShowrooms from '../components/TopShowrooms';
import ShowroomService from '../services/ShowroomService';
import { ShowroomType } from '../types/ShowroomTypes';
import { useNavigation } from '@react-navigation/native';

//@ts-ignore
const HomeScreen: React.FC = ({navigation}) => {
  // const navigation = useNavigation();
  const [location, setLocation] = useState<string>('Dubai');
  const [showrooms, setShowrooms] = useState<ShowroomType[]>([]);

  useEffect(() => {
    const fetchShowrooms = async () => {
      try {
        const response = await ShowroomService.topShowrooms(location);
        setShowrooms(response);
      } catch (error) {
        console.error('Error fetching showroom data:', error);
      }
    };

    fetchShowrooms();
  }, [location]);

  const handleMotorsPress = () => {
    navigation.navigate('MotorListing',  {location});
  };

  return (
    <ScreenWithMarginTop>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <LocationHeader
            location={location}
            onLocationChange={setLocation}
          ></LocationHeader>

          <View style={styles.row}>
            <TouchableOpacity style={styles.cell} onPress={handleMotorsPress}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('../../assets/motor.png')}
                  style={styles.image}
                />
                <Text style={styles.text}>Motor</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell}>
              <Image
                source={require('../../assets/motorbike.png')}
                style={styles.image}
              />
              <Text style={styles.text}>Motorbikes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell}>
              <Image
                source={require('../../assets/showroom.png')}
                style={styles.image}
              />
              <Text style={styles.text}>Showrooms</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.cell}>
              <Image
                source={require('../../assets/parts.png')}
                style={styles.image}
              />
              <Text style={styles.text}>Parts & Accessories</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell}>
              <Image
                source={require('../../assets/number-plate.png')}
                style={styles.image}
              />
              <Text style={styles.text}>Number Plates</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell}>
              <Image
                source={require('../../assets/car-service.png')}
                style={styles.image}
              />
              <Text style={styles.text}>Car Service</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.cell}>
              <Image
                source={require('../../assets/car-wash.png')}
                style={styles.image}
              />
              <Text style={styles.text}>Car Wash</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell}>
              <Image
                source={require('../../assets/car-recovery.png')}
                style={styles.image}
              />
              <Text style={styles.text}>Car Recovery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cell}>
              <Image
                source={require('../../assets/boat.png')}
                style={styles.image}
              />
              <Text style={styles.text}>Boats</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.adContainer}>
          <Image
            source={require('../../assets/free-ad.png')}
            style={styles.adImage}
          />
        </View>
        <View style={styles.showroomContainer}>
          <TopShowrooms showrooms={showrooms}></TopShowrooms>
        </View>
      </View>
    </ScreenWithMarginTop>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#fff',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cell: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 118,
    height: 85,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 5,
  },
  image: {
    width: 80,
    height: 60,
  },
  text: {
    // fontFamily: 'Nunito',
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 13.64,
    textAlign: 'center',
  },
  adContainer: {
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  showroomContainer: {
    height: 280,
    // flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  adImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
});

export default HomeScreen;

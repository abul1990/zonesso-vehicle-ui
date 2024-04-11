import React, { useEffect, useMemo, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Header from '../components/Motor/Header';
import ResultInfo from '../components/Motor/ResultInfo';
import Detail from '../components/Motor/Detail';
import ScreenWithMarginTop from '../components/ScreenWithMarginTop';
import ShowroomService from '../services/ShowroomService';
import { ShowroomResponse } from '../types/ShowroomTypes';

//@ts-ignore
const MotorsListingScreen: React.FC = ({ route }) => {
  const { location } = route.params || 'Dubai';
  const [showroomData, setShowroomData] = useState<ShowroomResponse[]>([]);

  useEffect(() => {
    const fetchShowrooms = async () => {
      try {
        const response = await ShowroomService.fetchShowroomsByLocation(
          location
        );
        setShowroomData(response);
      } catch (error) {
        console.error('Error fetching showroom data:', error);
      }
    };

    fetchShowrooms();
  }, []);

  const totalCount = useMemo(() => {
    return showroomData.reduce((accumulator, showroom) => accumulator + showroom.vehicles.length, 0);
  }, [showroomData]);

  return (
    <ScreenWithMarginTop style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Header location={location} />
        <ResultInfo resultCount={totalCount} location={location} />
        {showroomData.map((showroom) => (
          <Detail key={showroom.id} {...showroom} />
        ))}
      </ScrollView>
    </ScreenWithMarginTop>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export default MotorsListingScreen;

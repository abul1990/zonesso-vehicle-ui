import axios, { AxiosResponse } from 'axios';
import { ShowroomType, ShowroomResponse } from '../types/ShowroomTypes';

const getRandomDistance = () => {
  return Math.floor(Math.random() * 100) / 10 + 1;
};

const fetchShowrooms = async (): Promise<ShowroomType[]> => {
  try {
    const response: AxiosResponse<ShowroomResponse[]> = await axios.get<
      ShowroomResponse[]
    >('http://localhost:3000/showrooms');
    const showroomData: ShowroomResponse[] = response.data;

    const showrooms: ShowroomType[] = showroomData.map(
      (item: ShowroomResponse) => ({
        id: item.id,
        name: item.name,
        imageSource: require('../../assets/showroom-toyota.png'),
        iconSource: require('../../assets/logo-toyota.png'),
        distance: getRandomDistance(),
      })
    );

    return showrooms;
  } catch (error) {
    console.error('Error fetching top showrooms:', error);
    return [];
  }
};

const topShowrooms = async (location: string): Promise<ShowroomType[]> => {
    try {
      const response: AxiosResponse<ShowroomResponse[]> = await axios.get<
        ShowroomResponse[]
      >(`http://localhost:3000/showrooms/top/${location}`);
      const showroomData: ShowroomResponse[] = response.data;
  
      const showrooms: ShowroomType[] = showroomData.map(
        (item: ShowroomResponse) => ({
          id: item.id,
          name: item.name,
          imageSource: require('../../assets/showroom-toyota.png'),
          iconSource: require('../../assets/logo-toyota.png'),
          distance: getRandomDistance(),
        })
      );
  
      return showrooms;
    } catch (error) {
      console.error('Error fetching top showrooms:', error);
      return [];
    }
  };

  const fetchShowroomsByLocation = async (location: string): Promise<ShowroomResponse[]> => {
    try {
      const response: AxiosResponse<ShowroomResponse[]> = await axios.get<
        ShowroomResponse[]
      >(`http://localhost:3000/showrooms/${location}`);
      const showroomData: ShowroomResponse[] = response.data;
      return showroomData;
    } catch (error) {
      console.error('Error fetching showrooms:', error);
      return [];
    }
  };

const ShowroomService = {
  fetchShowrooms,
  topShowrooms,
  fetchShowroomsByLocation
};

export default ShowroomService;

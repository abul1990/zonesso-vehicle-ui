import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  MotorsListing: { location: string };
};

export type MotorsListingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MotorsListing'>;

export default RootStackParamList;

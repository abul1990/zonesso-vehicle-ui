import Svg, { Circle, G, Path, SvgProps } from 'react-native-svg';

const FilterSvg: React.FC<SvgProps> = ({color}) => {
  return (
    <Svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <G fill="none" stroke={color} strokeLinecap="round">
        <Path d="M5 12V4m14 16v-3M5 20v-4m14-3V4m-7 3V4m0 16v-9"></Path>
        <Circle cx={5} cy={14} r={2}></Circle>
        <Circle cx={12} cy={9} r={2}></Circle>
        <Circle cx={19} cy={15} r={2}></Circle>
      </G>
    </Svg>
  );
};

export default FilterSvg;

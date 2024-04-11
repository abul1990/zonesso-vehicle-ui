import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

const PostSvg: React.FC<SvgProps> = ({ color }) => {
  return (
    <Svg width="40" height="40" viewBox="0 0 24 24" fill="red">
      <Circle cx="12" cy="12" r="9" stroke-width="2"/>
      <Path
        d="M12 15L12 9"
        stroke='white'
        stroke-width="2"
        stroke-linecap="square"
        
      />
      <Path
        d="M15 12L9 12"
        stroke='white'
        stroke-width="2"
        stroke-linecap="square"
      />
    </Svg>
  );
};

export default PostSvg;

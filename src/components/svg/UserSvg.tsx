import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

const UserSvg: React.FC<SvgProps> = ({ color }) => {
  return (
    <Svg width="30" height="30" viewBox="0 0 24 24" fill="none">
      <Circle
        cx="12"
        cy="7"
        r="4"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M5.33788 18.3206C5.99897 15.5269 8.77173 14 11.6426 14H12.3574C15.2283 14 18.001 15.5269 18.6621 18.3206C18.79 18.8611 18.8917 19.4268 18.9489 20.0016C19.0036 20.5512 18.5523 21 18 21H6C5.44772 21 4.99642 20.5512 5.0511 20.0016C5.1083 19.4268 5.20997 18.8611 5.33788 18.3206Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default UserSvg;

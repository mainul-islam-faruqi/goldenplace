import Icon, { IconProps } from '@chakra-ui/icon';

const Calendar = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 3.02249H17V1.52249H15.5V3.02249H9.5V1.52249H8V3.02249H5C4.17157 3.02249 3.5 3.69406 3.5 4.52249V19.5225C3.5 20.3509 4.17157 21.0225 5 21.0225H20C20.8284 21.0225 21.5 20.3509 21.5 19.5225V4.52249C21.5 3.69406 20.8284 3.02249 20 3.02249ZM20 19.5225H5V9.02249H20V19.5225ZM20 7.52249H5V4.52249H8V6.02249H9.5V4.52249H15.5V6.02249H17V4.52249H20V7.52249Z"
      fill="currentColor"
    />
  </Icon>
);

export default Calendar;

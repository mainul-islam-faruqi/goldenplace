import { Icon, IconProps } from '../Icon';

const Compass = (props: IconProps) => (
  <Icon viewBox="0 0 32 32" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16ZM28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16ZM23 9L13.5 13.5L9 23L18.5 18.5L23 9ZM14.5 16C14.5 16.8284 15.1716 17.5 16 17.5C16.8284 17.5 17.5 16.8284 17.5 16C17.5 15.1716 16.8284 14.5 16 14.5C15.1716 14.5 14.5 15.1716 14.5 16Z"
      fill="currentColor"
    />
  </Icon>
);

export default Compass;

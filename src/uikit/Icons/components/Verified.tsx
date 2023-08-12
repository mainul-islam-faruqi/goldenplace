import { Icon, IconProps } from '../Icon';

const Verified = (props: IconProps) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.4171 3.24982L16.0007 1.33337L12.5842 3.24982L8.66732 3.29834L6.66684 6.66623L3.29895 8.66671L3.25043 12.5836L1.33398 16L3.25043 19.4165L3.29895 23.3334L6.66684 25.3338L8.66732 28.7017L12.5842 28.7503L16.0007 30.6667L19.4171 28.7503L23.334 28.7017L25.3345 25.3338L28.7024 23.3334L28.7509 19.4165L30.6673 16L28.7509 12.5836L28.7024 8.66671L25.3345 6.66623L23.334 3.29834L19.4171 3.24982ZM9.00065 16.5L14.0007 21.5L23.0007 12.6L21.4007 11L14.0007 18.4L10.6007 15L9.00065 16.5Z"
      fill="currentColor"
    />
  </Icon>
);

Verified.defaultProps = {
  // note we use the same value in dark & light mode
  color: 'blue.400',
};

export default Verified;

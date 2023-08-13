import { Icon, IconProps } from '../Icon';

const DoubleArrow = (props: IconProps) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.6 20.6L23 24.2V4H21V24.2L17.4 20.6L16 22L22 28L28 22L26.6 20.6ZM10 4L4 10L5.4 11.4L9 7.8V28H11V7.8L14.6 11.4L16 10L10 4Z"
      fill="currentColor"
    />
  </Icon>
);

export default DoubleArrow;

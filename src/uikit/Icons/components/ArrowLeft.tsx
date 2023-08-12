import { Icon, IconProps } from '../Icon';

const ArrowLeft = (props: IconProps) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 26L14.41 24.59L6.83 17H29V15H6.83L14.41 7.41L13 6L3 16L13 26Z"
      fill="currentColor"
    />
  </Icon>
);

export default ArrowLeft;

import { Icon, IconProps } from '../Icon';

const ChevronLeft = (props: IconProps) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 16L20 6L21.4 7.4L12.8 16L21.4 24.6L20 26L10 16Z"
      fill="currentColor"
    />
  </Icon>
);

export default ChevronLeft;

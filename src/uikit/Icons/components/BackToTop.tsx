import { Icon, IconProps } from '../Icon';

const BackToTop = (props: IconProps) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 13L6 23L7.41 24.41L16 15.83L24.59 24.41L26 23L16 13ZM4 7H28V9H4V7Z"
      fill="currentColor"
    />
  </Icon>
);

export default BackToTop;

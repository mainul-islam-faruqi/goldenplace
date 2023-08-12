import { Icon, IconProps } from '../Icon';

const Hamburger = (props: IconProps) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 24H28V26H4V24ZM4 12H28V14H4V12ZM4 18H28V20H4V18ZM4 6H28V8H4V6Z"
      fill="currentColor"
    />
  </Icon>
);

export default Hamburger;

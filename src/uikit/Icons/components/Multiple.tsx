import { Icon, IconProps } from '../Icon';

const Multiple = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M4 2C2.89543 2 2 2.89543 2 4V19C2 20.1046 2.89543 21 4 21H9V19H4V4H19V9H21V4C21 2.89543 20.1046 2 19 2H4Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 11C11.8954 11 11 11.8954 11 13V28C11 29.1046 11.8954 30 13 30H28C29.1046 30 30 29.1046 30 28V13C30 11.8954 29.1046 11 28 11H13ZM13 13H28V28H13V13Z"
      fill="currentColor"
    />
  </Icon>
);

export default Multiple;

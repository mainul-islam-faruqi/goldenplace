import { Icon, IconProps } from '../Icon';

const CheckboxOutline = (props: IconProps) => (
  <Icon fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26 4H6C4.89543 4 4 4.89543 4 6V26C4 27.1046 4.89543 28 6 28H26C27.1046 28 28 27.1046 28 26V6C28 4.89543 27.1046 4 26 4ZM6 26V6H26V26H6Z"
      fill="currentColor"
    />
  </Icon>
);

export default CheckboxOutline;

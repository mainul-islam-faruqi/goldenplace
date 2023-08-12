import { Icon, IconProps } from '../Icon';

const Minimize = (props: IconProps) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 17V19H11.59L2 28.58L3.41 30L13 20.41V26H15V17H6ZM30 3.42L28.59 2L19 11.59V6H17V15H26V13H20.41L30 3.42Z"
      fill="currentColor"
    />
  </Icon>
);

export default Minimize;

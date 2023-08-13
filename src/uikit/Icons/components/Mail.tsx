import { Icon, IconProps } from '../Icon';

const Mail = (props: IconProps) => (
  <Icon {...props}>
    <path d="M24 10H8V12H24V10Z" fill="currentColor" />
    <path d="M18 16H8V18H18V16Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.74 30L21.16 24H26C28.2091 24 30 22.2091 30 20V8C30 5.79086 28.2091 4 26 4H6C3.79086 4 2 5.79086 2 8V20C2 22.2091 3.79086 24 6 24H14V30H17.74ZM16 28V22H6C4.89543 22 4 21.1046 4 20V8C4 6.89543 4.89543 6 6 6H26C27.1046 6 28 6.89543 28 8V20C28 21.1046 27.1046 22 26 22H20L16.5714 28H16Z"
      fill="currentColor"
    />
  </Icon>
);

export default Mail;

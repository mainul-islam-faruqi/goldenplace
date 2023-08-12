import { Icon, IconProps } from '../Icon';

const Eth = (props: IconProps) => (
  <Icon viewBox="0 0 96 96" {...props}>
    <g clipPath="url(#eth-clip-1)">
      <path
        d="M47.9907 0L47.3467 2.18771V65.6644L47.9907 66.307L77.4553 48.8902L47.9907 0Z"
        fill="#757576"
      />
      <path
        d="M47.9912 0L18.5259 48.8902L47.9912 66.307V35.4971V0Z"
        fill="#8E8E8E"
      />
      <path
        d="M47.9909 71.8882L47.6279 72.3309V94.9422L47.9909 96.0019L77.4735 54.4805L47.9909 71.8882Z"
        fill="#5F5F5F"
      />
      <path
        d="M47.9912 96.0019V71.8882L18.5259 54.4805L47.9912 96.0019Z"
        fill="#8E8E8E"
      />
      <path
        d="M47.9912 66.3059L77.4558 48.8892L47.9912 35.4961V66.3059Z"
        fill="#5F5F5F"
      />
      <path
        d="M18.5259 48.8892L47.9912 66.3059V35.4961L18.5259 48.8892Z"
        fill="#757576"
      />
    </g>
    <defs>
      <clipPath id="eth-clip-1">
        <rect width="96" height="96" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);

export default Eth;

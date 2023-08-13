import { Icon, IconProps } from '../Icon';

const CoinbaseLight = (props: IconProps) => (
  <Icon viewBox="0 0 32 32" {...props}>
    <circle cx="16" cy="16" r="15" fill="#0052FF" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.45312 16C5.45312 21.8249 10.1751 26.5469 16 26.5469C21.8249 26.5469 26.5469 21.8249 26.5469 16C26.5469 10.1751 21.8249 5.45312 16 5.45312C10.1751 5.45312 5.45312 10.1751 5.45312 16ZM13.3047 12.6016C12.9164 12.6016 12.6016 12.9164 12.6016 13.3047V18.6953C12.6016 19.0836 12.9164 19.3984 13.3047 19.3984H18.6953C19.0836 19.3984 19.3984 19.0836 19.3984 18.6953V13.3047C19.3984 12.9164 19.0836 12.6016 18.6953 12.6016H13.3047Z"
      fill="white"
    />
  </Icon>
);

export default CoinbaseLight;

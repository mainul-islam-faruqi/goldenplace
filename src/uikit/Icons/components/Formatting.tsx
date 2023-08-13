import { Icon, IconProps } from '../Icon';

const Formatting = (props: IconProps) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 27H30V29H2V27ZM25.41 8.99999C25.7856 8.62485 25.9966 8.11581 25.9966 7.58499C25.9966 7.05417 25.7856 6.54513 25.41 6.16999L21.83 2.58999C21.4549 2.21444 20.9458 2.00342 20.415 2.00342C19.8842 2.00342 19.3751 2.21444 19 2.58999L4 17.59V24H10.41L25.41 8.99999ZM20.4097 3.99999L23.9997 7.58999L20.9997 10.59L17.4097 6.99999L20.4097 3.99999ZM6 22V18.41L16 8.40999L19.59 12L9.59 22H6Z"
      fill="currentColor"
    />
  </Icon>
);

export default Formatting;

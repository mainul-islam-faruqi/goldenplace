import { useState } from "react";
import uniqueId from "lodash/uniqueId";
import { Icon, IconProps } from "../Icon";

const Gem = (props: IconProps) => {
  // Due to a bug in Chrome (or maybe more broadly Chromium), we need unique ids for these gradients for every instance of the GemIcon component.
  // There is a conflict when multiple instances of the component are rendered on the same page
  const [idOne] = useState(uniqueId());
  const [idTwo] = useState(uniqueId());

  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0004 20.9288C13.2795 20.9288 11.0718 18.7233 11.0718 16.0002C11.0718 13.2771 13.2795 11.0716 16.0004 11.0716C18.7212 11.0716 20.9289 13.2771 20.9289 16.0002C20.9289 18.7233 18.7212 20.9288 16.0004 20.9288ZM15.9997 18.1429C14.8167 18.1429 13.8569 17.184 13.8569 16.0001C13.8569 14.8161 14.8167 13.8572 15.9997 13.8572C17.1827 13.8572 18.1426 14.8161 18.1426 16.0001C18.1426 17.184 17.1827 18.1429 15.9997 18.1429Z"
        fill={`url(#${idOne})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0004 1L28.9908 8.5V23.5L16.0004 31L3.01001 23.5V8.5L16.0004 1ZM23.2541 12.559L26.7147 16L23.2541 19.441C19.248 23.4244 12.7528 23.4244 8.74664 19.441L5.28611 16L8.74663 12.559C12.7528 8.57556 19.248 8.57556 23.2541 12.559Z"
        fill={`url(#${idTwo})`}
      />
      <defs>
        <linearGradient id={idOne} x1="29" y1="31" x2="3" y2="0.999998" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EE5396" />
          <stop offset="0.679053" stopColor="#A56EFF" />
        </linearGradient>
        <linearGradient id={idTwo} x1="29" y1="31" x2="3" y2="0.999998" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EE5396" />
          <stop offset="0.679053" stopColor="#A56EFF" />
        </linearGradient>
      </defs>
    </Icon>
  );
};

export default Gem;

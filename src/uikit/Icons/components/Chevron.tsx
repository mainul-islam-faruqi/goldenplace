import { Icon, IconProps } from "../Icon";

export interface ChevronProps extends IconProps {
  isRotated?: boolean;
  direction?: "up" | "down" | "left" | "right";
}

const rotationMap = {
  up: 0,
  right: 90,
  down: 180,
  left: 270,
};

const Chevron: React.FC<React.PropsWithChildren<ChevronProps>> = ({ direction = "up", isRotated, ...props }) => (
  <Icon
    transform={isRotated ? `rotate(${rotationMap[direction] + 180}deg)` : `rotate(${rotationMap[direction]}deg)`}
    transition="transform 0.2s"
    transformOrigin="center"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 10L26 20L24.6 21.4L16 12.8L7.4 21.4L6 20L16 10Z"
      fill="currentColor"
    />
  </Icon>
);

export default Chevron;

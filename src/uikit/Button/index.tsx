import { forwardRef, Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

export interface ButtonProps extends ChakraButtonProps {
    round?: boolean;
    square?: boolean;
}

export const getBorderRadius = (
    round: boolean,
    square: boolean,
    borderRadius: ChakraButtonProps["borderRadius"],
    size: ChakraButtonProps["size"]
) => {
    if (!round && !square) {
        return borderRadius;
    }

    if (square) {
        return 0;
    }

    switch (size) {
        case "sm":
            return 16;
        case "lg":
            return 28;
        case "md":
        default:
            return 24;
    }
};

export const Button = forwardRef<ButtonProps, "div">(
    ({ round = false, square = false, borderRadius, ...props }, ref) => (
        <ChakraButton
            ref={ref}
            borderRadius={getBorderRadius(round, square, borderRadius, props.size)}
            data-id="button"
            {...props}
        />
    )
);

import { forwardRef, PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";

export type NextLinkProps = PropsWithChildren<LinkProps>;

export const NextLink = forwardRef<HTMLAnchorElement, NextLinkProps>((props, ref) => <Link {...props} ref={ref} />);
NextLink.displayName = "NextLink";

import { Element, CssProps } from "next-styled-system";
import NextLink from "next/link";
import { AnchorHTMLAttributes, CSSProperties, FC } from "react";
import { LinkContainer } from "./Link";

type LinkBlockProps = {
  href: string;
  className?: string;
  style?: CSSProperties;
};

export const LinkBlock: FC<LinkBlockProps & AnchorHTMLAttributes<never> & CssProps> = ({
  href,
  target,
  className,
  children,
  ...props
}) => {
  return (
    <>
      <NextLink href={href}>
        <LinkContainer
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : ""}
          className={className}
          {...props}
        >
          {children}
        </LinkContainer>
      </NextLink>
      <style jsx>{`
        a {
          display: block;
          outline: none;
          cursor: pointer;
          color: inherit;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

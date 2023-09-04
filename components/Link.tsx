import { Element, CssProps } from "next-styled-system";
import NextLink from "next/link";
import { FC, MouseEvent } from "react";

export const LinkContainer = Element("a", {});

type LinkProps = {
  onClick?: (_: MouseEvent) => void;
  href: string;
  title?: string | JSX.Element;
  target?: string;
  className?: string;
  secondary?: boolean;
  subtle?: boolean;
  small?: boolean;
  large?: boolean;
};

export const Link: FC<LinkProps & CssProps> = ({
  onClick,
  className = "",
  href,
  target,
  title,
  secondary,
  subtle,
  small,
  large,
  children,
  ...props
}) => {
  const classNames = `link ${secondary ? "secondary" : ""} ${small ? "small" : ""} ${
    large ? "large" : ""
  } ${className}`.trim();

  const label = href ? /^https?:\/\/([^/?#]+)(?:[/?#]|$)/i.exec(href)?.[1] : "";

  /* TODO Add Highlighting to link for inline effect */
  return (
    <>
      <NextLink href={href}>
        <LinkContainer
          role="button"
          tabIndex={0}
          target={target}
          aria-label={href.includes("mailto:") ? href.replace("mailto", "") : label}
          rel={target === "_blank" ? "noopener noreferrer" : ""}
          className={classNames}
          onClick={onClick}
          {...props}
        >
          {title || children}
        </LinkContainer>
      </NextLink>

      <style jsx global>{`
        .link {
          display: inline-flex;
          background-repeat: no-repeat;
          background-position: 0 1.05em;
          background-size: 100% 24%, 0 24%;
          cursor: pointer;
          font-family: inherit;
          text-decoration: none;
          outline: none;

          ${subtle ? `color: var(--color-link);` : `color: var(--color-mdx-link);`}
          &.small {
            font-size: 1.4rem;
          }

          &.large {
            font-size: 1.8rem;
          }

          &:hover {
            ${subtle ? `color: var(--color-link-hover); text-decoration: underline` : `text-decoration: underline;;`}
          }
        }
      `}</style>
    </>
  );
};

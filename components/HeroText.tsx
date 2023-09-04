import { FC } from "react";
import { Element } from "next-styled-system";

export const HeroTextContainer = Element("div", {});

export const HeroText = ({ children, ...props }) => {
  return (
    <>
      <HeroTextContainer className={"hero-text"} {...props}>
        {children}
      </HeroTextContainer>
      <style jsx global>{`
        .hero-text {
          margin-bottom: -0.1em;
          margin-left: -0.05em;
          background-image: linear-gradient(
            270deg,
            var(--color-gradient-1) 25.28%,
            var(--color-gradient-2) 59.7%,
            var(--color-gradient-3) 97.75%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-size: 22rem;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.06em;
        }
      `}</style>
    </>
  );
};

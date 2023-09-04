import { CssProps, Element } from "next-styled-system";
import { FC } from "react";

type AvatarProps = {
  src: string;
  alt: string;
  initials?: string;
};

export const AvatarContainer = Element("picture", { position: `relative`, display: `inline-flex` });

export const Avatar: FC<AvatarProps & CssProps> = ({ src, alt, initials = "", ...props }) => {
  return (
    <>
      <AvatarContainer {...props}>
        <img src={src} alt={alt} />
        <i>
          {initials
            .split(" ")
            .map(i => i.charAt(0))
            .join("")}
        </i>
      </AvatarContainer>
      <style jsx>{`
        img,
        i {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: inline-flex;
          text-transform: uppercase;
          align-items: center;
          justify-content: center;
          border-radius: 100%;
          background: var(--color-button);
          font-size: 0.6em;
          font-weight: 700;
          letter-spacing: -0.025em;
          text-decoration: none;
        }

        img {
          z-index: 1;
        }
      `}</style>
    </>
  );
};

/*
export const Avatar: FC<AvatarProps & SizeProperties> = ({ src, alt, initials = "", ...props }) => {
  
  const { styleJsx } = useStyledSystem(props, { Size: true });
  
  return (
      <>
        <picture>
          <img src={src} alt={alt} />
          <i>{initials.split(" ").map((i) => i.charAt(0)).join("")}</i>
        </picture>
        <style jsx>{`
        picture {
          position: relative;
          display: inline-flex;
          ${styleJsx}
        }

        img,
        i {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: inline-flex;
          text-transform: uppercase;
          align-items: center;
          justify-content: center;
          border-radius: 100%;
          background: var(--color-button);
          font-size: 0.6em;
          font-weight: 700;
          letter-spacing: -0.025em;
          text-decoration: none;
        }

        img {
          z-index: 1;
        }
      `}</style>
      </>
  );
};
*/

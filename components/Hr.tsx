import { Element } from "next-styled-system";

type HrProps = {
  invisible?: boolean;
};

export const Hr = Element("hr", {
  width: "100%",
  border: `0`,
  mt: `3.2rem`,
  mb: `3.2rem`,
  opacity: `0.6`,
  borderBottom: `0.01rem var(--color-button) solid`,
});

/*
export const Hr: FC<HrProps & Space> = ({ invisible, ...props }) => {
  const { styleJsx } = useStyledSystem(props, { Space: true });
  return (
      <> 
        <hr />
        <style jsx>{`
          hr {
            width: 100%;
            border: 0;
            margin-top: 3.2rem;
            margin-bottom: 3.2rem;
            opacity: 0.6;
            border-bottom: 0.01rem var(--color-button) solid;
            ${invisible ? `border-bottom: 0;` : ""}
            ${styleJsx}
          }
      `}</style>
      </>
  );
};
*/

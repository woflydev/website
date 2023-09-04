import { FC } from "react";
import { TimelineItem, TimelineItemProps } from "./TimelineItem";

export type TimelineGroupProps = {
  title: string;
  items: TimelineItemProps[];
};

export const TimelineGroup: FC<TimelineGroupProps> = ({ title, items }) => {
  return (
    <>
      <section>
        <h3>{title}</h3>
        <ul>
          {items.map((props, index) => (
            <TimelineItem key={index} {...props} />
          ))}
        </ul>
      </section>
    </>
  );
};

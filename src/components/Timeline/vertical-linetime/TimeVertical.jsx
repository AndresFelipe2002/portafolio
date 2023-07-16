import { VerticalTimelineElement } from "react-vertical-timeline-component";

export const TimeVertical = ({
  title,
  icon,
  iconStyleBg,
  porcentage = "0%",
  colorPg = "primary",
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#fff",
        color: "#000",
      }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      iconStyle={{ background: iconStyleBg, color: "#fff" }}
      icon={icon}
    >
      <h3 className="vertical-timeline-element-title">
        <b>{title}</b>
      </h3>
      <div className="progress">
        <div
          className={`progress-bar bg-${colorPg} progress-bar-striped progress-bar-animated`}
          role="progressbar"
          aria-valuenow={porcentage}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: porcentage }}
        >
          {porcentage}
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

import "react-vertical-timeline-component/style.min.css";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { TimeVertical } from "./vertical-linetime/TimeVertical";
import {
  IconLogoJavascript,
  IconNodejs,
  IconReact,
  IconExpress,
  IconPython,
  IconPhp,
  IconMysql,
  IconMsql_server,
  IconBxlPostgresql,
} from "../Icons/IconsTimeLine";
import "./Timeline.css";
import { porcentage } from "../../helpers/porcentage";

export const Timeline = () => {
  const {
    tech: [js, react, node, express, python, php, mysql, sqlserver, postgreSQL],
  } = porcentage();

  return (
    <div className="timeline">
      <VerticalTimeline>
        <TimeVertical
          title="JavaScript"
          icon={<IconLogoJavascript />}
          iconStyleBg="#F0ED14"
          porcentage={js?.percentage}
          colorPg="warning"
        />
        <TimeVertical
          title="Reactjs"
          icon={<IconReact />}
          iconStyleBg="#1478F0"
          porcentage={react?.percentage}
        />
        <TimeVertical
          title="Nodejs"
          icon={<IconNodejs />}
          iconStyleBg="#38C408"
          porcentage={node?.percentage}
          colorPg="success"
        />
        <TimeVertical
          title="Expressjs"
          icon={<IconExpress />}
          iconStyleBg="#FAFA37"
          porcentage={express?.percentage}
          colorPg="warning"
        />
        <TimeVertical
          title="Python"
          icon={<IconPython />}
          iconStyleBg="#089CC4"
          porcentage={python?.percentage}
        />
        <TimeVertical
          title="Php"
          icon={<IconPhp />}
          iconStyleBg="#E437FF"
          porcentage={php?.percentage}
          colorPg="danger"
        />
        <TimeVertical
          title="Mysql"
          icon={<IconMysql />}
          iconStyleBg="#A7A7A7"
          porcentage={mysql?.percentage}
          colorPg="secondary"
        />
        <TimeVertical
          title="Sql Server"
          icon={<IconMsql_server />}
          iconStyleBg="#FBA68F"
          porcentage={sqlserver?.percentage}
          colorPg="danger"
        />
        <TimeVertical
          title="PostgreSQL"
          icon={<IconBxlPostgresql />}
          iconStyleBg="#2A07C9"
          porcentage={postgreSQL?.percentage}
        />
      </VerticalTimeline>
    </div>
  );
};

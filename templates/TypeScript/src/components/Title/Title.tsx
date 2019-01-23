import * as React from "react";

import "./Title.scss";

interface ITitleProps {
  title: string;
}

const Title: React.FunctionComponent<ITitleProps> = ({ title }) => (
  <span className="title">{title}</span>
);

export default Title;

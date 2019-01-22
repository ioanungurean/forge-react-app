import * as React from "react";

import "./Title.scss";

interface TitleProps {
  title: string;
}

export default class Title extends React.Component<TitleProps> {
  render() {
    return <span className="title">{this.props.title}</span>;
  }
}

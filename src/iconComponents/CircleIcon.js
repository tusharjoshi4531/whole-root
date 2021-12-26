import * as React from "react";

const SvgCircleIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" height=".7em" width=".7em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill={props.color} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
  </svg>
);

export default SvgCircleIcon;

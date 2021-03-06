import * as React from "react";

const SvgSquareIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" height=".7em" width=".7em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill={props.color} d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
  </svg>
);

export default SvgSquareIcon;

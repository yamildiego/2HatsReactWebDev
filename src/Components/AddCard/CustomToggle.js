import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CustomToggle.css";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    className="CustomToggle"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &nbsp; &nbsp;
    <FontAwesomeIcon icon="chevron-down" className="float-right" />
  </div>
));
export default CustomToggle;

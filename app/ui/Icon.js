import React from "react"

const SVG_ICONS_FILEPATH = "/css/bootstrap-icons-1.9.1.svg";

const Icon = function Icon ({ className = "", icon }) {
  return (
    <svg className={`bi ${className}`} width="16" height="16" fill="currentColor">
      <use xlinkHref={`${SVG_ICONS_FILEPATH}#${icon}`} />
    </svg>
  );
};

export default Icon;
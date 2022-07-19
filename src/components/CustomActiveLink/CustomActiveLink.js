import React from "react";
import { Link } from "react-router-dom";
import { useMatch, useResolvedPath } from "react-router-dom";
const CustomActiveLink = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link
        style={{
          color: match ? "red" : "darkcyan",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default CustomActiveLink;

import { Link as ReactLink } from "react-router-dom";

const Link = (props) => {
  const { children, to, ...customStyle } = props;

  return (
    <ReactLink to={to} style={{ "text-decoration": "none", ...customStyle }}>
      {children}
    </ReactLink>
  );
};

export default Link;

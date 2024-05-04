const Button = (props) => {
  const { children, type, ...customStyle } = props;

  const styles = {
    background: "var(--primary-color-5)",
    border: "none",
    "border-radius": "0.25rem",
    color: "#fff",
    cursor: "pointer",
    padding: "10px",
    width: "100%",
  };

  return (
    <button type={type} style={{ ...styles, ...customStyle }}>
      {children}
    </button>
  );
};

export default Button;

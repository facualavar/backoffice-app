const Input = (props) => {
  const { type, ...customStyle } = props;

  const styles = {
    background: "var(--grey-300)",
    border: "1px solid var(--grey-400)",
    "border-radius": "0.25rem",
    "line-height": "18px",
    "letter-spacing": "-0.4px",
    padding: "10px",
    outline: "none",
  };
  return <input type={type} style={{ ...styles, ...customStyle }} />;
};

export default Input;

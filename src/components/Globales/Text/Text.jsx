const Text = (props) => {
  const { children, textDecoration, ...customStyle } = props;

  return (
    <span style={{ "text-decoration": textDecoration, ...customStyle }}>
      {children}
    </span>
  );
};

export default Text;

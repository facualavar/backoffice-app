const Box = (props) => {
  const { children, flexDirection, ...customStyle } = props;

  return (
    <div style={{ "flex-direction": flexDirection, ...customStyle }}>
      {children}
    </div>
  );
};

export default Box;

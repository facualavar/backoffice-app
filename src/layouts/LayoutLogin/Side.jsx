import Box from "../../components/Globales/Box/Box";

const Side = (props) => {
  const { children, background } = props;

  return (
    <Box
      display="flex"
      height="100vh"
      width="498px"
      justifyContent="center"
      alignItems="center"
      background={background}
    >
      {children}
    </Box>
  );
};

export default Side;

import Box from "../../components/Globales/Box/Box";

const Main = (props) => {
  const {
    children,
    justify,
    align,
    position,
    backgroundColor,
    style: customStyle,
  } = props;

  return (
    <Box
      display="flex"
      flex="1"
      heigth="100vh"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#fff"
    >
      {children}
    </Box>
  );
};

export default Main;

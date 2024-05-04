import Box from "../../components/Globales/Box/Box";

const Layout = (props) => {
  const { children } = props;

  return (
    <Box display="flex" flex="1" height="100vh" backgroundColor="#fff">
      {children}
    </Box>
  );
};

export default Layout;

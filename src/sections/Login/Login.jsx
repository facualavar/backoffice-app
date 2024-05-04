import Layout from "../../layouts/LayoutLogin/Layout";
import Side from "../../layouts/LayoutLogin/Side";
import LogoWhite from "../../images/logo-white-horizontal.png";
import Text from "../../components/Globales/Text/Text";
import Box from "../../components/Globales/Box/Box";
import Link from "../../components/Globales/Link/Link";
import Main from "../../layouts/LayoutLogin/Main";
import Form from "../../components/Globales/Form/Form";
import InputLabel from "../../components/Globales/InputLabel/InputLabel";
import Checkbox from "../../components/Globales/Checkbox/Checkbox";
import Button from "../../components/Globales/Button/Button";

const Login = () => {
  const handleSubmit = () => {
    console.log("submit");
    return;
  };

  return (
    <Layout>
      <Side background="var(--primary-color-5)">
        <Box display="flex" flexDirection="column">
          <Box margin="10px 0px">
            <img width="220" src={LogoWhite} alt="logo" />
          </Box>
          <Text color="#fff">
            Iniciá sesión o&nbsp;
            <Link to="/crea-tu-cuenta">
              <Text
                textDecoration="underline"
                color="#fff"
                fontSize="xs"
                fontWeight="bold"
                lineHeight="1rem"
                letterSpacing="-0.3px"
              >
                creá una cuenta
              </Text>
            </Link>
          </Text>
        </Box>
      </Side>
      <Main>
        <Box display="flex" flexDirection="column" width="416px">
          <Box margin="20px 0px">
            <Text fontSize="var(--font-xl)" fontWeight="var(--semi-bold)">
              Ingresar a Backoffice
            </Text>
          </Box>
          <Form onSubmit={handleSubmit}>
            <Box>
              <InputLabel label="Email" type="email" />
              <InputLabel label="Contraseña" type="password" />
              <Box margin="10px 0px">
                <Link
                  to="/recuperar-password"
                  color="var(--blue-400)"
                  fontSize="var(--font-sm)"
                  fontWeight="var(--semi-bold)"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </Box>
              <Checkbox label="Recordar mi usuario" />
              <Button type="submit">Iniciar sesión</Button>
            </Box>
          </Form>
        </Box>
      </Main>
    </Layout>
  );
};

export default Login;

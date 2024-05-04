import Box from "../Box/Box";
import Text from "../Text/Text";

const Checkbox = (props) => {
  const { label, ...customStyle } = props;

  return (
    <Box margin="20px 0px">
      <input type="checkbox" style={{ ...customStyle }} />{" "}
      <Text color="var(--grey-500)">{label}</Text>
    </Box>
  );
};

export default Checkbox;

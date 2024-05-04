import Box from "../Box/Box";
import Input from "../Input/Input";
import Text from "../Text/Text";

const InputLabel = (props) => {
  const { label, ...inputProps } = props;

  return (
    <Box display="flex" flexDirection="column">
      <Text
        color="var(--grey-500)"
        text-transform="uppercase"
        fontSize="var(--font-xs)"
      >
        {label}
      </Text>
      <Box display="flex" flexDirection="column" margin="5px 0px 20px 0px">
        <Input {...inputProps} />
      </Box>
    </Box>
  );
};

export default InputLabel;

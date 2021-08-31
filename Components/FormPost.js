import {
  Container,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
const FormPost = () => {
  return (
    <Container mt={8}>
      <Heading mb={3} as="h2" size="lg">
        <Flex direction="column" align="center">
          Add a Comment:
        </Flex>
      </Heading>

      <form>
        <Flex direction="column" align="center">
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input required name="name" type="name" placeholder="Name" />
          </FormControl>
          <FormControl mt={3} id="text">
            <FormLabel>Comment</FormLabel>
            <Textarea
              required
              id="text"
              name="text"
              placeholder="Here is a sample text"
            />
          </FormControl>
          <Button
            type="submit"
            mt={3}
            colorScheme="blue"
            width="200px"
            size="lg"
          >
            Add
          </Button>
        </Flex>
      </form>
    </Container>
  );
};
export default FormPost;

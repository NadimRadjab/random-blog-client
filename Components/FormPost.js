import {
  Container,
  Heading,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import useFormHook from "../hooks/useFormHook";
import axios from "axios";

const FormPost = ({ addComment }) => {
  const [authorname, setAuthorname, resetName] = useFormHook("");
  const [text, setText, resetText] = useFormHook("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = router.query.id;
    const comment = {
      authorname,
      text,
    };
    const res = await axios.post(
      `http://localhost:5000/api/posts/${id}/comments`,
      comment
    );
    addComment(res.data);
    resetName();
    resetText();
  };
  return (
    <Container mt={8}>
      <Heading mb={3} as="h2" size="lg">
        <Flex direction="column" align="center">
          Add a Comment:
        </Flex>
      </Heading>

      <form onSubmit={handleSubmit}>
        <Flex direction="column" align="center">
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              onChange={setAuthorname}
              value={authorname}
              required
              name="authorname"
              type="text"
              placeholder="Name"
            />
          </FormControl>
          <FormControl mt={3} id="text">
            <FormLabel>Comment</FormLabel>
            <Textarea
              onChange={setText}
              value={text}
              required
              id="text"
              name="text"
              placeholder="Comment..."
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

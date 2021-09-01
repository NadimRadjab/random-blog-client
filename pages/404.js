import Link from "next/link";
import { Container, Heading, Text } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container m={3} className="not-found ">
      <Heading m={2}>Oooops...... </Heading>
      <Heading m={2} size="lg">
        That page cannot be found.
      </Heading>
      <Text fontSize="4xl">Go back to the</Text>
      <Link href="/">
        <a>
          <Text fontSize="2xl">Homepage</Text>
        </a>
      </Link>
    </Container>
  );
};

export default NotFound;

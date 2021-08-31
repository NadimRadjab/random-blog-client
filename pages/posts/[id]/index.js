import { Container, Text, Heading } from "@chakra-ui/react";
import FormPost from "../../../Components/FormPost";
import Comment from "../../../Components/Comment";
import postStyles from "../../../styles/Post.module.css";

const Post = () => {
  return (
    <div className={postStyles.container}>
      <Heading mt={2} as="h2" size="xl">
        I'm a Heading
      </Heading>
      <Text mt={6} fontSize="2xl">
        There are many benefits to a joint design and development system. Not
        only does it bring benefits to the design team, but it also brings
        benefits to engineering teams. It makes sure that our experiences have a
        consistent look and feel, not just in our design specs, but in
        production There are many benefits to a joint design and development
        system. Not only does it bring benefits to the design team, but it also
        brings benefits to engineering teams. It makes sure that our experiences
        have a consistent look and feel, not just in our design specs, but in
        production There are many benefits to a joint design and development
        system. Not only does it bring benefits to the design team, but it also
        brings benefits to engineering teams. It makes sure that our experiences
        have a consistent look and feel, not just in our design specs, but in
        production onsistent look and feel, not just in our design specs, but in
        production There are many benefits to a joint design and development
        system. Not only does it bring benefits to the design team, but it also
        brings benefits to engineering teams. It makes sure that our experiences
        have a consistent look and feel, not just in our design specs, but in
        production There are many benefits to a joint design and development
        system. Not only does it bring benefits to the design team, but it also
        brings benefits to engineering teams. It makes sure that our experiences
        have a consistent look and feel, not just in our design specs, but in
        production
      </Text>
      <Container>
        <FormPost />
        <Container d="flex" flexDirection="column" alignItems="center" mt={4}>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </Container>
      </Container>
    </div>
  );
};

export default Post;

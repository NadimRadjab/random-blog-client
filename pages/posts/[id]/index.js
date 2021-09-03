import { Container, Text, Heading } from "@chakra-ui/react";
import { useState } from "react";
import FormPost from "../../../Components/FormPost";
import Comment from "../../../Components/Comment";
import postStyles from "../../../styles/Post.module.css";
import axios from "axios";

const Post = ({ item }) => {
  const [comments, setComments] = useState(item.comments);
  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className={postStyles.container}>
      <Heading mt={2} as="h2" size="xl">
        {item.name}
      </Heading>
      <Text fontSize={[17, 20, 25]} mt={6}>
        {item.text}
      </Text>
      <div>
        <FormPost item={item} addComment={addComment} />
        <Container d="flex" flexDirection="column" alignItems="center" mt={4}>
          {comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </Container>
      </div>
    </div>
  );
};
export const getStaticProps = async (context) => {
  const res = await axios.get(
    `http://localhost:5000/api/posts/${context.params.id}`
  );
  const item = res.data;
  return {
    props: {
      item,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await axios.get(`http://localhost:5000/api/posts`);
  const posts = res.data;
  const ids = posts.map((post) => post._id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;

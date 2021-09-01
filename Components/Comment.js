import { Box, Badge, Flex } from "@chakra-ui/react";

const Comment = ({ comment }) => {
  return (
    <Box
      mt="3"
      maxW="xl"
      width="600px"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Box p="6">
        <Box d="flex">
          <Badge
            d="flex"
            justifyContent="space-evenly"
            borderRadius="full"
            px="3"
            colorScheme="gray"
          >
            {comment.authorname}
          </Badge>

          <Box
            color="gray.600"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {new Date(comment.creationDate).toUTCString().substr(0, 17)}
          </Box>
        </Box>

        <Box d="flex" mt="5" alignItems="center">
          <Box as="span" ml="2" color="gray.800" fontSize="sm">
            {comment.text}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Comment;

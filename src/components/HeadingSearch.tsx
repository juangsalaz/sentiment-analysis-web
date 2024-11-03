import { Container, Heading } from "@chakra-ui/react";

interface Props {
  searchTopic: string;
}

const HeadingSearch = ({ searchTopic }: Props) => {
  if (!searchTopic)
    return (
      <Container maxW="1700px" display="flex" justifyContent="center" mt="10">
        <Heading>Search trending topic and get the sentiment</Heading>
      </Container>
    );
  return (
    <Container maxW="1700px" display="flex" justifyContent="center" mt="10">
      <Heading>The sentiments of {searchTopic} topic</Heading>
    </Container>
  );
};

export default HeadingSearch;

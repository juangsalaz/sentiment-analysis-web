import { Container, Heading } from "@chakra-ui/react";

interface Props {
  searchTopic: string;
}

const HeadingSearch = ({ searchTopic }: Props) => {
  let headingTitle = "Search trending topic and get the sentiment";
  if (searchTopic) headingTitle = "The sentiments of " + searchTopic + " topic";
  return (
    <Container maxW="1700px" display="flex" justifyContent="center" mt="10">
      <Heading>{headingTitle}</Heading>
    </Container>
  );
};

export default HeadingSearch;

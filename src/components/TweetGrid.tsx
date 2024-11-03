import { Container, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useSentiment from "../hooks/useSentiment";
import TweetCard from "./TweetCard";

interface Props {
  onSearchTopic: string;
}

const TweetGrid = ({ onSearchTopic }: Props) => {
  if (onSearchTopic === "") return null;
  const { data, error, isLoading } = useSentiment(onSearchTopic);

  if (error) return <Text>{error}</Text>;

  if (isLoading) {
    return (
      <Container maxW="1700px" centerContent>
        <Spinner size="xl" />
      </Container>
    );
  }

  return (
    <Container maxW="1700px">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding="30px"
        spacing={10}
      >
        {data.slice(0, 6).map((sentiment) => (
          <TweetCard key={sentiment._id} sentiment={sentiment} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default TweetGrid;

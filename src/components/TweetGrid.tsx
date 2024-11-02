import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import useSentiment from "../hooks/useSentiment";
import TweetCard from "./TweetCard";

interface Props {
  onSearchTopic: string;
}

const TweetGrid = ({ onSearchTopic }: Props) => {
  if (onSearchTopic === "") return null;
  const { data, error } = useSentiment(onSearchTopic);
  // const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(data);

  if (error) return <Text>{error}</Text>;

  return (
    <Container maxW="1700px">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding="30px"
        spacing={10}
      >
        {data.map((sentiment) => (
          <TweetCard key={sentiment._id} sentiment={sentiment} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default TweetGrid;

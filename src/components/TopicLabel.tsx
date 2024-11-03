import { Badge, Box, Button, Container, Text } from "@chakra-ui/react";
import useTrending from "../hooks/useTrending";
import { useEffect, useState } from "react";

interface Props {
  onClickTopic: (query: string) => void;
  querySearch: string;
}

const TopicLabel = ({ onClickTopic, querySearch }: Props) => {
  const { data, error } = useTrending();
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  function handleClick(topic: string) {
    onClickTopic(topic);
    setActiveTopic(topic);
  }

  useEffect(() => {
    if (querySearch !== activeTopic) setActiveTopic(null);
  }, [querySearch]);

  if (error) return null;

  return (
    <Container maxW="1700px">
      <Box display="flex" justifyContent="center" mt="10">
        <Text>Choose trending topics today</Text>
      </Box>
      <Box display="flex" justifyContent="center" mt="5">
        <Box>
          {data.map((label) => (
            <Button
              key={label._id}
              variant="ghost"
              onClick={() => handleClick(label.topic)}
              padding="0"
              height="auto"
              _hover={{ bg: "transparent" }}
            >
              <Badge
                marginX={2}
                marginY={1}
                paddingY={2}
                paddingX={4}
                borderRadius={20}
                colorScheme={activeTopic === label.topic ? "green" : "gray"}
              >
                {label.topic}
              </Badge>
            </Button>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default TopicLabel;

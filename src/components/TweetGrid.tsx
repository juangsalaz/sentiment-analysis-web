import {
  Button,
  Container,
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useSentiment, { Sentiment } from "../hooks/useSentiment";
import TweetCard from "./TweetCard";
import { useState } from "react";

interface Props {
  onSearchTopic: string;
}

const TweetGrid = ({ onSearchTopic }: Props) => {
  const [selectedCard, setSelectedCard] = useState<Sentiment | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { data, error, isLoading } = useSentiment(onSearchTopic);

  if (error) return <Text>{error}</Text>;

  if (isLoading) {
    return (
      <Container maxW="1700px" centerContent>
        <Spinner size="xl" />
      </Container>
    );
  }

  if (!onSearchTopic) return null;

  const onCardClick = (sentiment: Sentiment) => {
    setSelectedCard(sentiment);
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
    setSelectedCard(null);
  };

  return (
    <Container maxW="1700px">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding="30px"
        spacing={10}
      >
        {data.slice(0, 6).map((sentiment) => (
          <TweetCard
            key={sentiment._id}
            sentiment={sentiment}
            onCardClick={() => onCardClick(sentiment)}
          />
        ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading>Topic: {selectedCard?.topic}</Heading>
          </ModalHeader>
          <ModalBody>
            <Text>{selectedCard?.tweet}</Text>
            <br />
            <HStack>
              <Text as="span" fontWeight="bold">
                Sentiment:
              </Text>{" "}
              <Text textTransform="capitalize">
                {selectedCard?.calculatedSentiment}
              </Text>
            </HStack>
            <Text>
              <Text as="span" fontWeight="bold">
                Score:
              </Text>{" "}
              {selectedCard?.score}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default TweetGrid;

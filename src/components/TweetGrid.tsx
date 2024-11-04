import {
  Container,
  HStack,
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useSentiment, { Sentiment } from "../hooks/useSentiment";
import TweetCard from "./TweetCard";
import { useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";

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
        <ModalContent bg="gray.800">
          <ModalHeader>
            <Heading textTransform="capitalize">{selectedCard?.topic}</Heading>

            <IconButton
              aria-label="Close modal"
              icon={<CloseIcon />}
              position="absolute"
              right="1rem"
              top="1rem"
              variant="link" // Make it look like a text link
              onClick={onClose}
            />
          </ModalHeader>
          <ModalBody paddingBottom={5}>
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
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default TweetGrid;

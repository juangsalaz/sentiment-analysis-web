import { Sentiment } from "../hooks/useSentiment";
import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Tilt from "react-parallax-tilt";
import positiveImage from "../assets/love.png";
import negativeImage from "../assets/sad.png";
import neutralImage from "../assets/neutral.png";
import "../assets/css/ParalaxEffect.css";

interface Props {
  sentiment: Sentiment;
  onCardClick: (sentiment: Sentiment) => void;
}

const TweetCard = ({ sentiment, onCardClick }: Props) => {
  const colors: Record<string, string> = {
    positive: "#5C8CD6",
    negative: "#F29C56",
    neutral: "#2E363A",
  };

  const emoji: Record<string, string> = {
    positive: positiveImage,
    negative: negativeImage,
    neutral: neutralImage,
  };

  return (
    <Tilt
      className="parallax-effect-glare-scale"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
    >
      <Card
        className="inner-element"
        cursor="pointer"
        onClick={() => onCardClick(sentiment)}
      >
        <CardBody
          padding="0"
          bg={colors[sentiment.calculatedSentiment]}
          borderRadius={10}
        >
          <HStack justifyContent="space-between">
            <Box paddingLeft={5}>
              <Heading fontSize="xl" textTransform="capitalize" color="#FFFFFF">
                {sentiment.topic}
              </Heading>
              <Text color="#FFF" fontSize={18}>
                {sentiment.tweet.slice(1, 100)}...
              </Text>
              <HStack>
                <Text color="#FFF" fontWeight="bold" fontSize={18}>
                  Sentiment:
                </Text>
                <Text color="#FFF" fontSize={18} textTransform="capitalize">
                  {sentiment.calculatedSentiment}
                </Text>
              </HStack>
              <HStack>
                <Text color="#FFF" fontWeight="bold" fontSize={18}>
                  Score:
                </Text>
                <Text color="#FFF" fontSize={18} textTransform="capitalize">
                  {sentiment.score}
                </Text>
              </HStack>
            </Box>
            <Box
              width={300}
              height="250px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                width="100px"
                src={emoji[sentiment.calculatedSentiment]}
                alt="Positive Sentiment"
                boxSize="200px"
                objectFit="contain"
              />
            </Box>
          </HStack>
        </CardBody>
      </Card>
    </Tilt>
  );
};

export default TweetCard;

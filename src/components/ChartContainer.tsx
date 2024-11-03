import { useState, useEffect } from "react";
import SentimentPieChart from "./SentimentPieChart";
import useSentiment from "../hooks/useSentiment";

interface Props {
  onSearchTopic: string;
}

type SentimentType = "positive" | "negative" | "neutral" | "aggressive";

const ChartContainer = ({ onSearchTopic }: Props) => {
  const [sentimentData, setSentimentData] = useState({
    positive: 0,
    negative: 0,
    neutral: 0,
    aggressive: 0,
  });

  const { data } = useSentiment(onSearchTopic);

  const updateSentimentData = (data: any[]) => {
    if (!data || data.length === 0) return;

    const sentimentCounts = data.reduce(
      (acc, tweet) => {
        const sentiment = tweet.calculatedSentiment as SentimentType;
        acc[sentiment] = (acc[sentiment] || 0) + 1;
        return acc;
      },
      { positive: 0, negative: 0, neutral: 0, aggressive: 0 }
    );

    const totalTweets = data.length;

    const sentimentPercentages = {
      positive: ((sentimentCounts.positive || 0) / totalTweets) * 100,
      negative: ((sentimentCounts.negative || 0) / totalTweets) * 100,
      neutral: ((sentimentCounts.neutral || 0) / totalTweets) * 100,
      aggressive: ((sentimentCounts.aggressive || 0) / totalTweets) * 100,
    };

    setSentimentData(sentimentPercentages);
  };

  useEffect(() => {
    updateSentimentData(data);

    const intervalId = setInterval(() => {
      updateSentimentData(data);
    }, 1 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [data]);

  return <SentimentPieChart data={sentimentData} chartTile={onSearchTopic} />;
};

export default ChartContainer;

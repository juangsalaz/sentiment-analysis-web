import useData from "./useData";

export interface Sentiment {
  _id: number;
  topic: string;
  tweet: string;
  generatedSentiment: string;
  calculatedSentiment: string;
  score: number;
}

const useSentiment = (onSearchTopic: string) => 
  useData<Sentiment>("/tweets?topic="+onSearchTopic, {params: {}}, [onSearchTopic]);

export default useSentiment;

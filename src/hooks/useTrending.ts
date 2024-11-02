import useData from "./useData";

export interface Trending {
  _id: number;
  topic: string;
}

const useTrending = () => 
  useData<Trending>("/random-tweets");

export default useTrending;

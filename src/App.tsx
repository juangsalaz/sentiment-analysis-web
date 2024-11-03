import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SearchInput from "./components/SearchInput";
import { useState } from "react";
import TweetGrid from "./components/TweetGrid";
import TopicLabel from "./components/TopicLabel";
import HeadingSearch from "./components/HeadingSearch";
import ChartContainer from "./components/ChartContainer";

const App = () => {
  const [searhTopic, setSearchTopic] = useState("");

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "main main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem
          area="nav"
          backgroundColor="#DC0076"
          boxShadow="lg"
          position="sticky"
          top={0}
          zIndex={1000}
        >
          <NavBar />
        </GridItem>
        <GridItem area="main">
          <HeadingSearch searchTopic={searhTopic} />
          <Box>
            <SearchInput
              onSearchTopic={(query) => setSearchTopic(query)}
              queryLabel={searhTopic}
            />
            <TopicLabel
              onClickTopic={(query) => setSearchTopic(query)}
              querySearch={searhTopic}
            />
          </Box>
          <TweetGrid onSearchTopic={searhTopic} />

          <Box>
            <ChartContainer onSearchTopic={searhTopic} />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;

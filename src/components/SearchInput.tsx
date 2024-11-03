import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Container,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";

interface Props {
  onSearchTopic: (query: string) => void;
  queryLabel: string;
}

const SearchInput = ({ onSearchTopic, queryLabel }: Props) => {
  const [inputValue, setInputValue] = useState(queryLabel);

  useEffect(() => {
    setInputValue(queryLabel);
  }, [queryLabel]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearchTopic(inputValue);
      }}
    >
      <Container maxW="1700px" display="flex" justifyContent="center" mt={10}>
        <InputGroup
          size="lg"
          maxW="600px"
          boxShadow="lg"
          rounded="full"
          bg="white"
          _focusWithin={{ boxShadow: "0px 0px 8px rgba(66, 153, 225, 0.6)" }}
        >
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.500" />}
          />
          <Input
            placeholder="Search trending topics..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            border="none"
            color="gray.500"
            _focus={{ outline: "none" }}
            _placeholder={{ color: "gray.500", fontWeight: "400" }}
          />
        </InputGroup>
      </Container>
    </form>
  );
};

export default SearchInput;

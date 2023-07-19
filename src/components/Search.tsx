import SearchIcon from "../assets/SearchIcon";
import { search } from "../api/search";
import styled from "@emotion/styled";

const Search = ({
  searchValue,
  setSearchValue,
  searchQuery,
}: {
  searchValue: string;
  setSearchValue: (value: string) => void;
  searchQuery: string;
}) => {
  return (
    <Flex>
      <Input
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <Button onClick={() => search(searchQuery)}>
        <SearchIcon />
      </Button>
    </Flex>
  );
};

const Input = styled.input({
  width: "100%",
  height: "100%",
  borderRadius: "42px",
  border: 0,
  backgroundColor: "#FFFFFF",
  padding: "0px 30px",
  fontSize: "20px",
  outline: "none",
});

const Flex = styled.div({
  width: "100%",
  height: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

const Button = styled.button({
  border: "none",
  width: "70px",
  height: "40px",
  borderRadius: "42px",
  position: "absolute",
  right: "10px",
});

export default Search;

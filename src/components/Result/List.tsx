import { SearchResult } from "../../..";
import SearchIcon from "../../assets/SearchIcon";
import { useNavigation } from "../../hooks/useNaivation";
import ResultItem from "./Item";
import styled from "@emotion/styled";

const ResultList = ({
  searchResults,
  searchQuery,
}: {
  searchResults: SearchResult[];
  searchQuery: string;
}) => {
  const { resultItemRef, target } = useNavigation(searchResults.length);
  return (
    <List.Container>
      {searchResults.map((result, index) => (
        <List.Item
          ref={(element) => {
            resultItemRef.current[index] = element;
          }}
          key={result.sickCd}
          target={target === index}
        >
          <SearchIcon />
          <List.Content>
            {result.sickNm.split("").map((char, index) => (
              <ResultItem
                key={`${index}-${char}`}
                char={char}
                searchQuery={searchQuery}
              />
            ))}
          </List.Content>
        </List.Item>
      ))}
    </List.Container>
  );
};

export const List = {
  Container: styled.ul({
    width: "90%",
    minHeight: "50px",
    maxHeight: "450px",
    overflow: "auto",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "30px 20px",
    marginTop: "10px",
  }),

  Item: styled.li(({ target }: { target: boolean | undefined }) => ({
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    padding: "12px 0px",
    cursor: "default",
    ":hover": {
      backgroundColor: "rgb(237,237,237)",
    },
    backgroundColor: target ? "rgb(237,237,237)" : "white",
  })),
  Content: styled.span({
    marginLeft: "8px",
  }),
};

export default ResultList;

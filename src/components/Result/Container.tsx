import styled from "@emotion/styled";
import { SearchResult } from "../../..";

import ResultList, { List } from "./ResultList";

const Result = ({
  searchQuery,
  searchResults,
}: {
  searchQuery: string;
  searchResults: SearchResult[];
}) => {
  const noResult = searchResults.length === 0;

  if (!searchQuery) return null;
  if (noResult) return <NoResult>검색어가 없습니다</NoResult>;

  return <ResultList searchResults={searchResults} searchQuery={searchQuery} />;
};

const NoResult = styled(List.Container)({
  textAlign: "center",
  minHeight: "20px",
});
export default Result;

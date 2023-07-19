import styled from "@emotion/styled";

const ResultItem = ({
  char,
  searchQuery,
}: {
  char: string;
  searchQuery: string;
}) => {
  return searchQuery.split("").includes(char) ? (
    <Highlight>{char}</Highlight>
  ) : (
    <>{char}</>
  );
};

const Highlight = styled.span({
  fontWeight: "900",
});

export default ResultItem;

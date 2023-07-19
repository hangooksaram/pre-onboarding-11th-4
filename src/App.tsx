import Search from "./components/Search";
import Result from "./components/Result/Container";
import useSearch from "./hooks/useSearch";
import styled from "@emotion/styled";

function App() {
  const { searchValue, setSearchValue, debouncedValue, searchResults } =
    useSearch();
  return (
    <Container className="App">
      <Title>국내 모든 임상시험 검색하고 온라인으로 참여하기</Title>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchQuery={debouncedValue}
      />
      <Result searchQuery={debouncedValue} searchResults={searchResults} />
    </Container>
  );
}

const Title = styled.h2({
  fontSize: "2.125rem",
  fontWeight: 700,
  lineHeight: "1.6",
  textAlign: "center",
});

const Container = styled.main({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "45%",
  margin: "0 auto",
  paddingTop: "70px",
});

export default App;

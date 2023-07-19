import { useEffect, useState } from "react";
import { SearchResult } from "../..";
import useDebounce from "./useDebounce";
import { search } from "../api/search";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    (async () => {
      if (!debouncedValue) {
        setSearchResults([]);
        return;
      }
      const data = await search(debouncedValue);
      setSearchResults(data);
    })();
  }, [debouncedValue]);

  return {
    searchValue,
    setSearchValue,
    debouncedValue,
    searchResults,
  };
};

export default useSearch;

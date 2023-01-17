import { useEffect, useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const onSearchChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    console.log(search);
  }, [search, setSearch]);

  return (
    <input
      className="w3-input w3-border w3-round"
      placeholder="검색어 입력..."
      name="search"
      value={search}
      onChange={onSearchChangeHandler}
    />
  );
};

export default SearchInput;

import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { SearchBoxContainer } from "./styles/home.styles";
export const SearchBarComponent = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <SearchBoxContainer>
      <Searchbar
        value={searchKeyword}
        placeholder="Search"
        onChangeText={(text) => console.log(text)}
      />
    </SearchBoxContainer>
  );
};

import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { SearchBoxContainer } from "./styles/home.styles";
import { useTheme } from "../../../infrastructure/theme/theme.services";
export const SearchBarComponent = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const { theme } = useTheme();
  return (
    <SearchBoxContainer theme={theme}>
      <Searchbar
        value={searchKeyword}
        placeholder="Search"
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </SearchBoxContainer>
  );
};

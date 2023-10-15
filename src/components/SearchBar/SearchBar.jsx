import React from "react";
import { SearchBarContainer, SearchForm, SearchFormButton, SearchFormInput } from "./SearchBar.styled";


export const SearchBar = ({ value, onChange }) => {
    return (
    <SearchBarContainer>
      <SearchForm>
          <SearchFormButton></SearchFormButton>
          <SearchFormInput
            placeholder="Find image"
            type="text"
            name="searchbar"
            value={value}
            onChange={onChange}>
          </SearchFormInput>
      </SearchForm>
    </SearchBarContainer>    
  );
};
import React from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = ({ input, onChange }) => {
  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
  };
  return (
    <TextField
      //   style={BarStyling}
      key="random1"
      value={input}
      placeholder={"Filtrer les articles"}
      onChange={(e) => onChange(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />

    // <TextField
    //     placeholder="Search…"
    //     classes={{
    //       root: classes.inputRoot,
    //       input: classes.inputInput,
    //     }}
    //     InputProps={{
    //       startAdornment: (
    //         <InputAdornment position="start">
    //           <SearchIcon />
    //         </InputAdornment>
    //       ),
    //     }}
    //   />
  );
};

export default SearchBar;

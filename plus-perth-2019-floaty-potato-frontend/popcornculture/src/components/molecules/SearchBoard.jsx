import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// import Button from "./atoms/Button";
// import Label from "./atoms/Label";
// import TextInput from "./atoms/TextInput";
// const SearchBoard = () => {
//   {
//     return (
//       <div>
//         <Button></Button>
//         <Label>Search Movie</Label>
//         <TextInput></TextInput>
//       </div>
//     );
//   }
// };
// export default SearchBoard;
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

export default function UncontrolledTextField() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
        />
        <Button variant="contained" className={classes.button}>
          Default
        </Button>
      </div>
    </form>
  );
}

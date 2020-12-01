import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { SearchTwoTone } from "@material-ui/icons";
import React, { useState } from "react";

export interface DataSearchProps {
  submit: (searchTerm: string) => void;
}

const DataSearch: React.FC<DataSearchProps> = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const {submit} = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
  }
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    submit(searchTerm);
  }

  return (
    <TextField 
      variant="outlined"
      label="Character Name"
      InputProps={{
        endAdornment:(
          <InputAdornment position="end">
            <IconButton onClick={handleSubmit}>
              <SearchTwoTone />
            </IconButton>
          </InputAdornment>
        )
      }}
      onChange={handleChange}
    />
  )
}

export default DataSearch;

import React, { useState } from "react";
import { Icon, Input } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const nav = useNavigate();
  const [value, setValue] = useState("Search...");

  const handleClick = () => {
    if (value === "Search..." || !value) return;
    nav("result", { state: value });
    setValue("Search...");
  };

  return (
    <Input
      icon={<Icon name="search" inverted circular link onClick={handleClick} />}
      placeholder={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Search;

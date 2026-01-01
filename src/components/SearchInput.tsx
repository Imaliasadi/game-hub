import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "./store";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const handleSearch = () => {
    if (inputRef.current) setSearchText(inputRef.current.value);
  };
  const navigate = useNavigate();
  return (
    <form
      style={{ width: "100%" }}
      onChange={(event) => {
        event.preventDefault();
        handleSearch();
        navigate("/");
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          ref={inputRef}
          borderRadius={20}
          placeholder="Type somthing then to Search"
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;

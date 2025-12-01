import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "./store";

function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const handleSearch = () => {
    if (inputRef.current) setSearchText(inputRef.current.value);
  };

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        handleSearch();
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          ref={inputRef}
          borderRadius={20}
          placeholder="Type somthing then press Enter to Search"
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;

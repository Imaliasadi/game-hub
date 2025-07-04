import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

export interface Search {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Search) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (inputRef.current) onSearch(inputRef.current.value);
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
          placeholder="Search somthing then press Enter"
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;

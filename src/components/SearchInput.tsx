import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

export interface Search {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Search) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current) onSearch(inputRef.current.value);
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input ref={inputRef} borderRadius={20} placeholder="Search somthing..." />
      </InputGroup>
    </form>
  );
}

export default SearchInput;

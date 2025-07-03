import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

function SearchInput() {
  return (
    <InputGroup startElement={<BsSearch />}>
      <Input borderRadius={20} placeholder="Search somthing..." />
    </InputGroup>
  );
}

export default SearchInput;

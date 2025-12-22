import { Box, Heading } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

function DefinitionAttribute({ term, children }: Props) {
  return (
    <Box margin={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}

export default DefinitionAttribute;

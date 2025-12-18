import NavBar from "@/components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <NavBar />
      <Box padding={5}>
        <Heading>Ooops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "The page you trying to reach does not exist."
            : "an unexpected erro occured."}
        </Text>
      </Box>
    </div>
  );
}

export default ErrorPage;

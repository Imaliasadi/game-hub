import NavBar from "@/components/NavBar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </div>
  );
}

export default Layout;

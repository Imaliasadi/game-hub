import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal, Box } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function PlatformSlector() {
  const { data, error } = usePlatforms();

  if (error) return;
  return (
    <Box mb={4}>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            Show games by platform <BsChevronDown style={{ marginLeft: "3px" }} />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            {data.map((platform) => (
              <Menu.Content key={platform.id}>{platform.name}</Menu.Content>
            ))}
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
}

export default PlatformSlector;

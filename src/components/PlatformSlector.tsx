import type { Platform } from "@/hooks/usePlatforms";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "./store";

function PlatformSlector() {
  const { data, error } = usePlatforms();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = data?.results.find((p) => p.id === selectedPlatformId);
  const selectPlatform = useGameQueryStore((s) => s.setPlatformId);

  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" marginBottom={3}>
          {selectedPlatform?.name || "Show games by platform :"}
          <BsChevronDown style={{ marginLeft: "3px" }} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map((platform: Platform) => (
              <Menu.Item
                value={platform.id.toString()}
                onClick={() => selectPlatform(platform.id)}
                key={platform.id}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default PlatformSlector;

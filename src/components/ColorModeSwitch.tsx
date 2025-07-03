import { HStack, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { Switch } from "./ui/switch";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorPalette={"green"}
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
      >
        <Text whiteSpace={"nowrap"}>Dark Mode</Text>
      </Switch>
    </HStack>
  );
}

export default ColorModeSwitch;

import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { Platform } from "@/hooks/usePlatforms";
import { HStack, chakra } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  xbox: FaXbox,
  playstation: FaPlaystation,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  web: BsGlobe,
};

function PlatformIconList({ platforms }: Props) {
  if (!platforms.length) return null;

  return (
    <HStack color="gray.500" marginY="10px">
      {platforms.map((platform) =>
        platform.slug ? (
          <chakra.div key={platform.id}>
            <chakra.div as={iconMap[platform.slug]} />
          </chakra.div>
        ) : null
      )}
    </HStack>
  );
}

export default PlatformIconList;

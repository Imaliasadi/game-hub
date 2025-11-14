import { Image, type ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}
function RatingEmojies({ rating }: Props) {
  if (rating < 3) return <></>;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "Recomnded", boxSize: "25px" },
    5: { src: bullsEye, alt: "Exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
}

export default RatingEmojies;

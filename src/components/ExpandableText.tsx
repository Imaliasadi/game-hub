import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  child: string;
}
function ExpandableText({ child }: Props) {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (!child) return null;
  if (child.length <= limit) return <Text>{child}</Text>;
  const summary = expanded ? child : child.substring(0, limit) + "...";
  return (
    <Text>
      {summary}
      <Button
        size={"xs"}
        fontWeight={"bold"}
        bgColor={"yellow"}
        ml={2}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Read more"}
      </Button>
    </Text>
  );
}

export default ExpandableText;

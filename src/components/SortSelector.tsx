import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "./store";

function SortSelector() {
  const orders = [
    { value: "", lable: "Relevance" },
    { value: "-added", lable: "Date added" },
    { value: "name", lable: "Name" },
    { value: "-released", lable: "Release Date" },
    { value: "-metacritic", lable: "Popularity" },
    { value: "-rating", lable: "Average rating" },
  ];
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sort);
  const currentOrder = orders.find((order) => order.value === sortOrder);
  const setSelectedOrder = useGameQueryStore((s) => s.setSort);

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          variant="outline"
          size="sm"
          marginBottom={3}
          marginX={{ base: " ", lg: "3" }}
        >
          Sort by: {currentOrder?.lable || "Relevance"}
          <BsChevronDown style={{ marginLeft: "3px" }} />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {orders.map((order) => (
              <Menu.Item
                value={order.value}
                key={order.value}
                onClick={() => setSelectedOrder(order.value)}
              >
                {" "}
                {order.lable}{" "}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default SortSelector;

import { Flex, Button, Text, Input, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PiFilmSlate } from "react-icons/pi";
import { IoIosHeart } from "react-icons/io";

function NavBar() {
  return (
    <Flex
      w={"100%"}
      h={"10%"}
      justifyContent={"space-between"}
      position={"fixed"}
      top={0}
      right={0}
      bg={"white"}
      borderBottom={"1px"}
      borderBottomColor={"gray.200"}
      shadow={"lg"}
      alignItems={"center"}
      p={10}
    >
      <Box>
        <Flex alignItems={"center"} alignContent={"space-around"}>
          <Flex alignItems={"center"}>
            <PiFilmSlate size={"8%"} />
            <Text
              m={0}
              ml={1}
              fontWeight={"semibold"}
              fontSize={"sm"}
              whiteSpace={"nowrap"}
            >
              GET MOVIES
            </Text>
          </Flex>
          <Input placeholder="Search..." size="sm"/>
        </Flex>
      </Box>
      <Button
        fontWeight={"bold"}
        mr={50}
        bg={"red.600"}
        color={"white"}
        height={8}
        fontSize={"xs"}
        as={Link}
        to={"/favourites"}
        borderRadius={"md"} // Adding rounded corners
        leftIcon={<IoIosHeart />}
      >
        <Text _hover={{ textColor: "black" }} textColor={"white"}>
          My favourites
        </Text>
      </Button>
    </Flex>
  );
}

export default NavBar;

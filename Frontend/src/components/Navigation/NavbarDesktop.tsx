import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import UserProfileLogo from "./UserProfileLogo";

const NavbarDesktop = () => {
  return (
    <Flex w={"100%"} minH={"80px"} zIndex={20} bgColor={"light.100"} pos={"fixed"} top={"0px"} left={"0px"}>
      <Box w={"100%"} pl={6} pt={6}>
        <Box w={"80px"} bgColor={"primary.200"} color={"light.100"} fontFamily={"monte"} fontWeight={500} fontSize={"18px"} px={3} py={1}>
          Logo
        </Box>
      </Box>
      <Flex w={"100%"} justifyContent={"flex-end"} alignItems={"center"} color={"primary.200"} fontSize={"38px"} gap={8}>
        <FaShoppingCart />
        <UserProfileLogo />
      </Flex>
    </Flex>
  );
};

export default NavbarDesktop;

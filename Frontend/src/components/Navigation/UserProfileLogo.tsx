"use client";
import { Box, Flex, IconButton, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { deleteTokens, getUserData } from "@/helpers/cookieUtils";
import { useRouter } from "next/navigation";

const UserProfileLogo = () => {
  const router = useRouter();
  const [data, setData] = useState<any>({});

  const [showMenu, setShowMenu] = useState(false);
  const handleRouting = (route: string) => {
    if (route === "/login") {
      deleteTokens();
      router.replace(route);
    } else {
      router.replace(route);
    }
  };

  useEffect(() => {
    setData(getUserData());
  }, []);

  return (
    data && (
      <Box pos={"relative"}>
        <Image
          w={"50px"}
          onClick={() => setShowMenu((prev) => !prev)}
          onFocus={() => setShowMenu(true)}
          onBlur={() => setShowMenu(false)}
          h={"50px"}
          mr={8}
          rounded={"full"}
          src={data.avatar}
          alt="User Profile Image"
        />
        <Flex
          display={showMenu ? "flex" : "none"}
          bgColor={"light.100"}
          direction={"column"}
          zIndex={5}
          p={3}
          shadow={"xl"}
          w={"100%"}
          minW={"140px"}
          pos={"absolute"}
          top={"120%"}
          right={"40%"}
        >
          <Text
            textDecor={"none"}
            fontSize={"16px"}
            fontFamily={"monte"}
            cursor={"pointer"}
            onClick={() => handleRouting("/store")}
            _active={{ bgColor: "primary.100", color: "light.100" }}
            bgColor={"light.100"}
            color={"primary.200"}
          >
            My Store
          </Text>
          <Text
            textDecor={"none"}
            fontSize={"16px"}
            fontFamily={"monte"}
            cursor={"pointer"}
            onClick={() => handleRouting("/profile")}
            _active={{ bgColor: "primary.100", color: "light.100" }}
            bgColor={"light.100"}
            color={"primary.200"}
          >
            Profile
          </Text>
          <Text
            textDecor={"none"}
            fontSize={"16px"}
            fontFamily={"monte"}
            cursor={"pointer"}
            onClick={() => handleRouting("/login")}
            _active={{ bgColor: "primary.100", color: "light.100" }}
            bgColor={"light.100"}
            color={"primary.200"}
          >
            Logout
          </Text>
        </Flex>
      </Box>
    )
  );
};

export default UserProfileLogo;

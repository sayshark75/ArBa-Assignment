"use client";
import ProfileComponent from "@/components/ProfileComponent/ProfileComponent";
import { Flex } from "@chakra-ui/react";
import React from "react";

const ProfilePage = () => {
  return (
    <Flex w={"100%"} minH={"100vh"} justifyContent={"center"} alignItems={"center"} bgColor={"light.100"}>
      <ProfileComponent />
    </Flex>
  );
};

export default ProfilePage;

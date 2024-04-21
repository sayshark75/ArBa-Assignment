import { Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import CustomButton from "../CustomInputs/CustomButton";

const ProductShowcase = () => {
  return (
    <Flex w={"100%"} minH={"50vh"} p={12} direction={"column"}>
      <Text fontSize={"18px"} fontWeight={800} fontFamily={"monte"} mb={8}>
        Products
      </Text>
      <Grid w={"100%"} templateColumns={"repeat(4,1fr)"} templateRows={"repeat(2,1fr)"} mb={12}>
        <Flex border={"1px solid red"} p={5} minH={"300px"}></Flex>
        <Flex border={"1px solid red"} p={5} minH={"300px"}></Flex>
        <Flex border={"1px solid red"} p={5} minH={"300px"}></Flex>
        <Flex border={"1px solid red"} p={5} minH={"300px"}></Flex>
        <Flex border={"1px solid red"} p={5} minH={"300px"}></Flex>
        <Flex border={"1px solid red"} p={5} minH={"300px"}></Flex>
        <Flex border={"1px solid red"} p={5} minH={"300px"}></Flex>
        <Flex border={"1px solid red"} p={5} minH={"300px"}></Flex>
      </Grid>
      <Flex w={"100%"} justifyContent={"flex-end"} alignItems={"center"}>
        <CustomButton title="All Products >>" rounded="none" />
      </Flex>
    </Flex>
  );
};

export default ProductShowcase;

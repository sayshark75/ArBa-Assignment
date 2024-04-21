"use client";
import CarouselComponent from "@/components/CarouselComponent/CarouselComponent";
import ProductShowcase from "@/components/ProductComponents/ProductShowcase";
import TermsAndConditionModal from "@/components/TermsAndConditionModal/TermsAndConditionModal";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w={"100%"} minH={"100vh"} mt={"80px"} bgColor={"light.100"} direction={"column"}>
      <CarouselComponent />
      <TermsAndConditionModal show={false} setShowTC={() => {}} />
      <ProductShowcase />
    </Flex>
  );
}

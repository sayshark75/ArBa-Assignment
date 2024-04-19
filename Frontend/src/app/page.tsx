import CarouselComponent from "@/components/CarouselComponent/CarouselComponent";
import TermsAndConditionModal from "@/components/TermsAndConditionModal/TermsAndConditionModal";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w={"100%"} minH={"100vh"} mt={"80px"} bgColor={"light.100"}>
      <CarouselComponent />
      <TermsAndConditionModal />
    </Flex>
  );
}

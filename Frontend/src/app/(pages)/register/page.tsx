import { Flex, Image, Text } from "@chakra-ui/react";
import bgImg from "@/assets/images/bg-auth.png";
import registerLogo from "@/assets/images/user-img.png";
import RegisterForm from "@/components/AuthComponents/RegisterForm";

const page = () => {
  return (
    <Flex w={"100%"} h={"100vh"} bgColor={"light.100"}>
      <Flex w={"50%"} h={"100vh"} overflow={"hidden"}>
        <Image w={"100%"} src={bgImg.src} objectFit={"cover"} alt="Background of Login Page" />
      </Flex>
      <Flex p={16} w={"50%"} h={"100vh"} direction={"column"} justifyContent={"flex-start"} alignItems={"center"}>
        <Image mb={5} w={"100px"} h={"100px"} src={registerLogo.src} alt="Login page logo" />
        <Text textTransform={"uppercase"} fontSize={"42px"} fontWeight={600}>
          App Name
        </Text>
        <Text fontFamily={"monte"} textAlign={"center"} maxW={"400px"} mt={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <RegisterForm />
      </Flex>
    </Flex>
  );
};

export default page;

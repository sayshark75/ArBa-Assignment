import { getUserData } from "@/helpers/cookieUtils";
import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import UpdateProfileForm from "./UpdateProfileForm";
import CustomButton from "../CustomInputs/CustomButton";
import TermsAndConditionModal from "../TermsAndConditionModal/TermsAndConditionModal";

const ProfileComponent = () => {
  const [data, setData] = useState<any>({});
  const [showTC, setShowTC] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  const handleShowTC = (bool = true) => {
    setShowTC(bool);
  };

  useEffect(() => {
    setData(getUserData());
  }, []);
  return (
    <Flex direction={"column"} w={"100%"} justifyContent={"center"} alignItems={"center"}>
      <Flex maxW={"600px"} direction={"column"} justifyContent={"center"} alignItems={"center"} mb={12}>
        <Image w={"200px"} onClick={handleImageClick} shadow={"md"} mb={3} objectFit={"cover"} src={data.avatar} alt={data.description} />
        <Input type="file" accept="image/*" ref={inputRef} onChange={handleFileChange} style={{ display: "none" }} />
        <Text textAlign={"center"}>{data.fullName}</Text>
        <Text textAlign={"center"} mb={4}>
          {data.email}
        </Text>
        <UpdateProfileForm />
      </Flex>
      <Flex w={"100%"} gap={8} maxW={"800px"} justifyContent={"center"} alignItems={"center"}>
        <CustomButton maxW="190px" rounded="none" type="button" title="See T&C" onClick={handleShowTC} />
        <CustomButton maxW="210px" rounded="none" title="Change Password" />
      </Flex>
      <TermsAndConditionModal show={showTC} setShowTC={handleShowTC} />
    </Flex>
  );
};

export default ProfileComponent;

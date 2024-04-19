import { getUserData } from "@/helpers/cookieUtils";
import { Box, Image, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import UpdateProfileForm from "./UpdateProfileForm";

const ProfileComponent = () => {
  const [data, setData] = useState<any>({});
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

  useEffect(() => {
    setData(getUserData());
  }, []);
  return (
    <Box maxW={"600px"}>
      <Image w={"200px"} onClick={handleImageClick} shadow={"md"} mb={3} objectFit={"cover"} src={data.avatar} alt={data.description} />
      <Input type="file" accept="image/*" ref={inputRef} onChange={handleFileChange} style={{ display: "none" }} />
      <Text textAlign={"center"}>{data.fullName}</Text>
      <Text textAlign={"center"} mb={4}>
        {data.email}
      </Text>
      <UpdateProfileForm />
    </Box>
  );
};

export default ProfileComponent;

"use client";
import React, { useState } from "react";
import CustomButton from "../CustomInputs/CustomButton";
import {
  Box,
  Flex,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import CustomTextInput from "../CustomInputs/CustomTextInput";
import CustomPasswordInput from "../CustomInputs/CustomPasswordInput";
import { useRouter } from "next/navigation";
import { UpdateProfileFormDataType } from "@/TYPES";
import { updateProfileNameApi } from "@/api/user_api";

const UpdateProfileForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const router = useRouter();
  const [name, setName] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await updateProfileNameApi({ fullName: name });
      if (!data.status) {
        toast({
          title: data.error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        router.refresh();
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <>
      <CustomButton title="Update Profile" rounded="none" onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent rounded={"0"}>
          <ModalHeader>
            <Text fontSize={"24px"} fontWeight={"500"} fontFamily={"monte"}>
              Change Profile Details
            </Text>
          </ModalHeader>
          <ModalBody>
            <Box w={"100%"} maxW={"420px"}>
              <form style={{ display: "none" }} onSubmit={handleSubmit} id="update-profile-form"></form>

              <CustomTextInput
                onChange={(e) => handleChange(e)}
                value={name}
                placeholder="Full Name"
                formId="update-profile-form"
                autoComplete="name"
                required={true}
                name="fullName"
              />
            </Box>
          </ModalBody>

          <ModalFooter mt={8}>
            <CustomButton type="submit" form="update-profile-form" title="Save Changes" />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateProfileForm;

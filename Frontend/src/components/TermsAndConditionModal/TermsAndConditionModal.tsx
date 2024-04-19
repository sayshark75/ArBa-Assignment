"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useEffect } from "react";

const TermsAndConditionModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCancel = () => {
    localStorage.setItem("tc-popup", "false");
    onClose();
  };
  const handleAccept = () => {
    localStorage.setItem("tc-popup", "true");
    onClose();
  };
  useEffect(() => {
    const hideModal = JSON.parse(localStorage.getItem("tc-popup") || "false");
    if (!hideModal) {
      onOpen();
    }
  }, [onOpen]);
  return (
    <Modal isOpen={isOpen} onClose={() => {}} size={"xl"}>
      <ModalOverlay />
      <ModalContent rounded={"0"}>
        <ModalHeader>
          <Text fontSize={"32px"} fontWeight={"700"} fontFamily={"monte"}>
            TERMS & CONDITIONS
          </Text>
        </ModalHeader>
        <ModalBody>
          <Text fontSize={"28px"} fontWeight={"700"} fontFamily={"monte"} whiteSpace={"pre-wrap"}>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget bibendum posuere at sed feugiat enim. Enim iaculis dictum convallis in sit tellus diam. Habitant cras dignissim sed pellentesque diam id mauris. Lorem ipsum dolor sit amet, consectetur

adipiscing elit. Eget bibendum posuere at sed feugiat enim. Enim iaculis dictum convallis in sit tellus diam. Habitant cras dignissim sed pellentesque diam id mauris. 
            
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget bibendum posuere at sed feugiat enim. Enim iaculis dictum convallis in sit tellus diam. Habitant cras dignissim sed pellentesque diam id mauris.`}
          </Text>
        </ModalBody>

        <ModalFooter mt={8}>
          <Flex w={"100%"} justifyContent={"space-evenly"} alignItems={"center"}>
            <Button
              _hover={{}}
              _active={{ bgColor: "primary.100" }}
              minW={"230px"}
              rounded={"0"}
              bgColor={"primary.200"}
              color={"light.100"}
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              _hover={{}}
              _active={{ bgColor: "primary.100" }}
              minW={"230px"}
              rounded={"0"}
              bgColor={"primary.200"}
              color={"light.100"}
              onClick={handleAccept}
            >
              Accept
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TermsAndConditionModal;

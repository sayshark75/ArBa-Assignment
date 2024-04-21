import { CustomButtonType } from "@/TYPES";
import { Button } from "@chakra-ui/react";
import React from "react";

const CustomButton = ({ maxW = "240px", title, type = "button", onClick = () => {}, form = "", rounded = "lg" }: CustomButtonType) => {
  return (
    <Button
      w={"100%"}
      maxW={maxW}
      rounded={rounded}
      bgColor={"primary.200"}
      color={"light.100"}
      fontFamily={"monte"}
      form={form}
      type={type}
      onClick={type === "button" ? onClick : () => {}}
      _hover={{}}
      _active={{ bgColor: "primary.100" }}
    >
      {title}
    </Button>
  );
};

export default CustomButton;

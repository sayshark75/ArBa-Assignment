import { CustomInputType } from "@/TYPES";
import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const CustomPasswordInput = ({
  value,
  onChange,
  placeholder = "Password",
  formId,
  required = false,
  autoComplete = "name",
  name,
  minLength = 0,
  maxLength = 70,
}: CustomInputType) => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const handleClick = () => setShowPass((prev) => !prev);
  return (
    <InputGroup size="md" my={6} w={"100%"}>
      <Input
        w={"100%"}
        pr="4.5rem"
        variant={"flushed"}
        borderBottom={"1px solid"}
        borderBottomColor={"primary.200"}
        type={showPass ? "text" : "password"}
        placeholder={placeholder}
        _placeholder={{ color: "dark.200" }}
        fontFamily={"monte"}
        letterSpacing={"1px"}
        value={value}
        onChange={onChange}
        form={formId}
        required={required}
        autoComplete={autoComplete}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        bgColor={"transparent"}
      />
      <InputRightElement width="auto" mr={2}>
        <IconButton
          aria-label="show password button"
          color={"primary.200"}
          icon={showPass ? <FaEye /> : <FaEyeSlash />}
          h="1.75rem"
          bgColor={"transparent"}
          _hover={{}}
          size="sm"
          onClick={handleClick}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default CustomPasswordInput;

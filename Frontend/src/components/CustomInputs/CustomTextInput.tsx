import { CustomInputType } from "@/TYPES";
import { Input, InputGroup } from "@chakra-ui/react";
import React from "react";

const CustomTextInput = ({
  value,
  onChange,
  type = "text",
  placeholder,
  formId,
  required = false,
  autoComplete = "name",
  name,
  minLength = 0,
  maxLength = 70,
}: CustomInputType) => {
  return (
    <InputGroup size="md" my={6}>
      <Input
        variant={"flushed"}
        borderBottom={"1px solid"}
        borderBottomColor={"primary.200"}
        type={type}
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
      />
    </InputGroup>
  );
};

export default CustomTextInput;

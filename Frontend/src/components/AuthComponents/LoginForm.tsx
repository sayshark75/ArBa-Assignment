"use client";

import { Box, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomTextInput from "../CustomInputs/CustomTextInput";
import CustomPasswordInput from "../CustomInputs/CustomPasswordInput";
import CustomButton from "../CustomInputs/CustomButton";
import { Link } from "@chakra-ui/next-js";
import { LoginFormDataType } from "@/TYPES";
import { loginApi } from "@/api/auth_api";
import { useRouter } from "next/navigation";
import { getAccessToken } from "@/helpers/cookieUtils";

const LoginForm = () => {
  const toast = useToast();
  const router = useRouter();
  const [formData, setFormData] = useState<LoginFormDataType>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await loginApi(formData);
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
        router.push("/");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    if (getAccessToken()) {
      router.push("/");
    }
  }, [router]);
  return (
    <Box w={"100%"} maxW={"420px"}>
      <form style={{ display: "none" }} onSubmit={handleSubmit} id="login-form"></form>
      <CustomTextInput
        onChange={(e) => handleChange(e)}
        value={formData.username}
        placeholder="Username"
        formId="login-form"
        autoComplete="none"
        required={true}
        name="username"
      />
      <CustomPasswordInput
        formId="login-form"
        required={true}
        minLength={8}
        maxLength={30}
        name="password"
        onChange={(e) => handleChange(e)}
        placeholder="Password"
        value={formData.password}
        autoComplete="password"
      />
      <CustomButton type="submit" form="login-form" title="Login" />
      <Text my={6} fontFamily={"monte"}>
        Dont have an account?{" "}
        <Link href={"/register"} color={"primary.200"}>
          Sign up
        </Link>
      </Text>
    </Box>
  );
};

export default LoginForm;

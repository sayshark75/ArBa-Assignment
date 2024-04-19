"use client";

import Cookies from "universal-cookie";

const cookies = new Cookies(null, { path: "/" });

import { Box, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomTextInput from "../CustomInputs/CustomTextInput";
import CustomPasswordInput from "../CustomInputs/CustomPasswordInput";
import CustomButton from "../CustomInputs/CustomButton";
import { Link } from "@chakra-ui/next-js";
import { RegisterFormDataType } from "@/TYPES";
import { loginApi, registerApi } from "@/api/auth_api";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const toast = useToast();
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterFormDataType>({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });
  const [cpass, setCPass] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (cpass !== formData.password) {
        toast({
          title: "Password and Confirm Password does not match",
          status: "warning",
          duration: 3000,
          isClosable: true,
        });
        return;
      }
      const data = await registerApi(formData);
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
        router.push("/login");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    const accessToken = cookies.get("accessToken");
    if (accessToken) {
      router.push("/");
    }
  }, [router]);
  return (
    <Box w={"100%"} maxW={"420px"}>
      <form style={{ display: "none" }} onSubmit={handleSubmit} id="register-form"></form>
      <CustomTextInput
        onChange={(e) => handleChange(e)}
        value={formData.userName}
        placeholder="Username"
        formId="register-form"
        autoComplete="username"
        required={true}
        name="userName"
      />
      <CustomTextInput
        onChange={(e) => handleChange(e)}
        value={formData.fullName}
        placeholder="Full Name"
        formId="register-form"
        autoComplete="name"
        required={true}
        name="fullName"
      />
      <CustomTextInput
        onChange={(e) => handleChange(e)}
        value={formData.email}
        placeholder="Email"
        formId="register-form"
        autoComplete="email"
        required={true}
        name="email"
      />
      <CustomPasswordInput
        formId="register-form"
        required={true}
        minLength={8}
        maxLength={30}
        name="password"
        onChange={(e) => handleChange(e)}
        placeholder="Password"
        value={formData.password}
        autoComplete="password"
      />
      <CustomPasswordInput
        formId="register-form"
        required={true}
        minLength={8}
        maxLength={30}
        name="cpassword"
        onChange={(e) => setCPass(e.target.value)}
        placeholder="Confirm Password"
        value={cpass}
        autoComplete="password"
      />
      <CustomButton type="submit" form="register-form" title="Register" />
      <Text my={6} fontFamily={"monte"}>
        Already have an account?{" "}
        <Link href={"/login"} color={"primary.200"}>
          Login
        </Link>
      </Text>
    </Box>
  );
};

export default RegisterForm;

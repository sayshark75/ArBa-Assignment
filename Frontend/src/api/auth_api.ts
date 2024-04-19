import { setAccessToken, setRefreshToken } from "@/helpers/cookieUtils";
import { LoginFormDataType, RegisterFormDataType } from "@/TYPES";

export const loginApi = async (formData: LoginFormDataType) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.status) {
      setAccessToken(data.tokens.accessToken);
      setRefreshToken(data.tokens.refreshToken);
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const registerApi = async (formData: RegisterFormDataType) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`, {
      method: "POST",
      body: JSON.stringify({ ...formData, imgUrl: "https://picsum.photos/200/300" }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error: ", error);
    throw error;
  }
};

import jwt from "jsonwebtoken";
import Cookies from "universal-cookie";

const cookies = new Cookies(null, { path: "/" });

export const getUserData = () => {
  try {
    const decoded = jwt.decode(getAccessToken());
    return decoded;
  } catch (e) {
    return null;
  }
};

export const getAccessToken = () => {
  return cookies.get("accessToken");
};

export const getRefreshToken = () => {
  return cookies.get("refreshToken");
};

export const setAccessToken = (token: string) => {
  const threeHours = 3 * 60 * 60 * 1000;
  const threeHoursFromNow = new Date(Date.now() + threeHours);
  cookies.set("accessToken", token, { expires: threeHoursFromNow });
};

export const setRefreshToken = (token: string) => {
  const thirtyDays = 30 * 24 * 60 * 60 * 1000;
  const thirtyDaysFromNow = new Date(Date.now() + thirtyDays);
  cookies.set("refreshToken", token, { expires: thirtyDaysFromNow });
};

export const deleteTokens = () => {
  cookies.remove("accessToken");
  cookies.remove("refreshToken");
};

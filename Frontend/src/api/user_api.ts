import { getAccessToken } from "@/helpers/cookieUtils";
import { UpdateProfileFormDataType } from "@/TYPES";

export const updateProfileNameApi = async (formData: UpdateProfileFormDataType) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/update-fullname`, {
      method: "POST",
      body: JSON.stringify({ ...formData }),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getAccessToken()}`,
      },
    });
    const data = await res.json();
    console.log("data: ", data);
    return data;
  } catch (error) {
    console.log("error: ", error);
    throw error;
  }
};

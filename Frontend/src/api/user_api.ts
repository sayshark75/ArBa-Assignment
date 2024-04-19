import { UpdateProfileFormDataType } from "@/TYPES";

export const registerApi = async (formData: UpdateProfileFormDataType) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`, {
      method: "POST",
      body: JSON.stringify({ ...formData, imgUrl: "https://picsum.photos/200/300" }),
      headers: {
        "Content-Type": "application/json",
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

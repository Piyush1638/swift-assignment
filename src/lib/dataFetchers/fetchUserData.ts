import { UserDataType } from "../interfaces/interfaces";

export const fetchUserData = async (): Promise<UserDataType> => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!res.ok) {
      throw new Error("Failed to fetch user data");
    }
    const data: UserDataType = await res.json();
    localStorage.setItem("userData", JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

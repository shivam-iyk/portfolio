import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

export const sendMessage = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  const { data } = await api.post("/create", formData);
  return data;
};

export const getProjects = async (username: string) => {
  const { data } = await api.get(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=50`,
  );
  return data;
};

export const getMessages = async (creds: {
  username: string;
  password: string;
}) => {
  const { data } = await api.post("/messages", creds);
  return data;
};

export const deleteMessage = async (messageId: string, password: string) => {
  const { data } = await api.delete("/delete", {
    params: {
      messageId,
      password,
    },
  });
  return data;
};

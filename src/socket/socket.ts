import { io } from "socket.io-client";

export const socket = io(import.meta.env.VITE_REACT_APP_API_URL as string, {
  withCredentials: true,
});

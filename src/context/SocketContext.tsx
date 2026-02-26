import { createContext } from "react";
import type { Socket } from "socket.io-client";
import { socket } from "../socket/socket";

export const SocketContext = createContext<Socket>(socket);

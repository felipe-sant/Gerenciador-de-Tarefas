import { createContext } from "react";
import Context from "../types/Context.type"

const context = createContext<Context | undefined>(undefined)

export default context
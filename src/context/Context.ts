import { createContext } from "react";
import Context from "../types/Context.type"

const myContext = createContext<Context | undefined>(undefined)

export default myContext
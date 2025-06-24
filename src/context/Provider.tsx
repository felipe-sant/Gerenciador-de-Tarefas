import { ReactNode, useState } from "react"
import CategoriasType from "../types/Categorias"
import TarefaType from "../types/Tarefa.type"
import ContextType from "../types/Context.type"
import MyContext from "./Context"

type MyProviderProps = {
    children: ReactNode
}

function MyProvider({ children }: MyProviderProps) {
    const [categorias, setCategorias] = useState<CategoriasType[]>([])

    function addCategoria(categoria: CategoriasType): void {
        setCategorias((prevCategorias) => [...prevCategorias, categoria])
    }

    function addTarefa(categoria: CategoriasType, tarefa: TarefaType): void {
        console.log("adicionando tarefa")
    }

    function markTaskAsCompleted(tarefa: TarefaType): void {
        console.log("marcando task")
    }

    const value: ContextType = {
        categorias,
        addCategoria,
        addTarefa,
        markTaskAsCompleted
    }

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider
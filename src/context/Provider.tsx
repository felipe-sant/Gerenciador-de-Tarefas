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
        setCategorias((prevCategorias) => {
            return prevCategorias.map((cat) => {
                if (cat.titulo === categoria.titulo) {
                    return {
                        ...cat,
                        tarefas: [...cat.tarefas, tarefa]
                    }
                }
                return cat;
            })
        })
    }

    function markTaskAsCompleted(tarefa: TarefaType): void {
        setCategorias((prevCategorias) => {
            return prevCategorias.map((categoria) => {
                return {
                    ...categoria,
                    tarefas: categoria.tarefas.map((t) => {
                        if (t.descricao === tarefa.descricao) {
                            return { ...t, concluida: !t.concluida }
                        }
                        return t;
                    })
                }
            })
        })
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
import CategoriasType from "./Categorias"
import TarefaType from "./Tarefa.type"

type ContextType = {
    categorias: CategoriasType[]
    addCategoria: (categoria: CategoriasType) => void
    addTarefa: (categoria: CategoriasType, tarefa: TarefaType) => void
    markTaskAsCompleted: (tarefa: TarefaType) => void
}

export default ContextType
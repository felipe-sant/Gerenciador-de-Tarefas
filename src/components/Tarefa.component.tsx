import { useContext } from "react";
import TarefaType from "../types/Tarefa.type";
import myContext from "../context/Context";
import css from "../styles/components/tarefa.module.css";

function TarefaComponent(props: { tarefa: TarefaType }) {
    const context = useContext(myContext);
    if (!context) { throw new Error("Context not found") }

    const { markTaskAsCompleted } = context

    const { tarefa } = props;
    const { descricao, concluida } = tarefa;

    function handleToggleConcluida(): void {
        markTaskAsCompleted(tarefa);
    }

    return (
        <div className={css.tarefa}>
            <input type="checkbox" checked={concluida} onChange={handleToggleConcluida} />
            <p>{descricao}</p>
        </div>
    )
}

export default TarefaComponent;
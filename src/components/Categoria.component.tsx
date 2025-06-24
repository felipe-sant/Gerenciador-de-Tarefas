import CategoriasType from "../types/Categorias";
import css from "../styles/components/categoria.module.css";
import { useContext, useState } from "react";
import myContext from "../context/Context";
import TarefaComponent from "./Tarefa.component";

function CategoriaComponent(props: { categoria: CategoriasType }) {
    const context = useContext(myContext)
    if (!context) { throw new Error("Context not found") }

    const { addTarefa } = context;

    const { categoria } = props;
    const { titulo, tarefas } = categoria;

    const [tituloTarefa, setTituloTarefa] = useState<string>("");

    function handleAddTarefa(): void {
        if (tituloTarefa.trim() === "") return;
        const novaTarefa = {
            descricao: tituloTarefa,
            concluida: false
        };
        addTarefa(categoria, novaTarefa);
        setTituloTarefa("");
    }

    return (
        <div className={css.categoria}>
            <h2>{titulo}</h2>
            <div className={css.input}>
                <h3>Adicionar tarefa</h3>
                <div className={css.input}>
                    <input
                        type="text"
                        placeholder=""
                        value={tituloTarefa}
                        onChange={(e) => setTituloTarefa(e.target.value)}
                    />
                    <button onClick={handleAddTarefa}>Adicionar</button>
                </div>
            </div>
            <div className={css.tarefas}>
                {tarefas.map((tarefa, index) => <TarefaComponent key={index} tarefa={tarefa} />)}
            </div>
            <hr />
        </div>
    )
}

export default CategoriaComponent;
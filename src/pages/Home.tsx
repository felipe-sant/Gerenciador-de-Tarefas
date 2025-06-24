import { useContext, useState } from "react";
import css from "../styles/pages/home.module.css"
import CategoriasType from "../types/Categorias";
import myContext from "../context/Context";

function Home() {
    const context = useContext(myContext)
    if (!context) { throw new Error("Context not found") }

    const { categorias, addCategoria } = context;

    const [tituloCategoria, setTituloCategoria] = useState<string>("");

    function handleAddCategoria(): void {
        if (tituloCategoria.trim() === "") return
        const novaCategoria: CategoriasType = {
            titulo: tituloCategoria,
            tarefas: []
        }
        addCategoria(novaCategoria);
        setTituloCategoria("");
    }

    return (
        <main className={css.main}>
            <h1>Gerenciador de Tarefas por Categoria</h1>
            <div className={css.addCategoria}>
                <label>Adicionar Nova Categoria</label>
                <div className={css.input}>
                    <input
                        type="text"
                        placeholder=""
                        value={tituloCategoria}
                        onChange={(e) => setTituloCategoria(e.target.value)}
                    />
                    <button onClick={handleAddCategoria}>Adicionar</button>
                </div>
            </div>
            <div className={css.categorias}>
                {categorias.map((categoria, index) => (
                    <div key={index} className={css.categoria}>
                        <h2>{categoria.titulo}</h2>
                        <ul>
                            {categoria.tarefas.map((tarefa, tarefaIndex) => (
                                <li key={tarefaIndex}>{tarefa.descricao}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Home
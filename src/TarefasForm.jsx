import { useState } from "react";

const TarefasForm =  ({onAddTarefa}) => {
    const [tarefa,setTarefa] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); //Não deixa trocar de página
        if(tarefa.trim()){ //trim() remove espaços em branco no início e no fim da string
            onAddTarefa(tarefa.trim());
            setTarefa(''); //Limpa o campo após adicionar
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite sua tarefa" value={tarefa} onChange={(e)=> setTarefa(e.target.value)}/> {/*e= evento */}
            <button type="submit">Adicionar</button>
        </form>
    );
}

export default TarefasForm;
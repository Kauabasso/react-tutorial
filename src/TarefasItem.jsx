import { useState } from "react";

const TarefasItem = ({ tarefa, onEditTarefa, onDeleteTarefa  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [novoTexto, setNovoTexto] = useState(tarefa.texto);

    const handleEdit = () => {
        if (isEditing) {
            if (novoTexto.trim()) {
                // Aqui grava o texto
                onEditTarefa(tarefa.id, novoTexto);
            }
            setIsEditing(false);
        } else{
            setIsEditing(true);
        }
    }

    const handleDelete = () => {
        // Aqui deleta a tarefa
        onDeleteTarefa(tarefa.id);
    }
    return (
        <li>
            {isEditing ? (
            <input type="text" value={novoTexto} onChange={(e) => setNovoTexto(e.target.value)} onKeyDown={(e)=>{if (e.key==='Enter') handleEdit()}} />) : (tarefa.texto)}
            <button onClick={handleEdit}>Editar</button>
            <button onClick={handleDelete}>X</button>
        </li>
    );
}

export default TarefasItem; 
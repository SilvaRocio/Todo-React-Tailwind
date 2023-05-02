const ContabilizarTodo=({contarTareas,eliminarCompletadas})=>{
    return (
    <section className="py-4 px-4 flex justify-between bg-white rounded-b-md dark:bg-gray-800">
        <span className="text-gray-400"> {contarTareas} Tareas por Completar</span>
        <button onClick={eliminarCompletadas} className="text-gray-400">Eliminar Completadas</button>
    </section> );
}
export default ContabilizarTodo;
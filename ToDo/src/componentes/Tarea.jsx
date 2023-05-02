import CrossIcono from "./iconos/IconoCross";
import IconoFlecha from "./iconos/IconoFlecha";
const Tarea=({tarea, eliminarTarea, modificarTarea})=>{
    const {id, titulo, completado}=tarea;
    return (
    <article className="flex gap-4 py-4 border-b border-b-gray-400 px-4 dark:bg-gray-800">
        
        <button onClick={()=>modificarTarea(id)} className={`${completado === true? "w-5 h-5 rounded-full border-2 bg-sky-500 flex justify-center items-center" : "w-5 h-5 rounded-full border-2 flex justify-center items-center"}`}> {completado && <IconoFlecha></IconoFlecha>} </button>
        <p className="text-gray-600 grow">{titulo}</p>
        <button onClick={()=>eliminarTarea(id)} className="flex-none">
        <CrossIcono></CrossIcono>
        </button>
    </article>)
}
export default Tarea;
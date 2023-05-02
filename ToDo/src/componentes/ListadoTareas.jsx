import Tarea from "./Tarea";
const ListadoTareas=({tareas, eliminarTarea, modificarTarea})=>{

    return (
    <div className="bg-white rounded-md mt-8 ">
        {tareas.map((tarea)=>(
            <Tarea id={tarea.id} tarea={tarea} eliminarTarea={eliminarTarea} modificarTarea={modificarTarea}></Tarea>
        ))}
        
    </div>)
    
}
export default ListadoTareas;
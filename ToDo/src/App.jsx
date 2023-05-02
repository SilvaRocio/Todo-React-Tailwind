//import CrossIcono from "./componentes/iconos/CrossIcono";
// import LunaIcono from "./componentes/LunaIcono";
import AgregarTareaFormulario from "./componentes/AgregarTareaFormulario";
import Header from "./componentes/Header";
import ListadoTareas from "./componentes/ListadoTareas";
import ContabilizarTodo from "./componentes/ContabilizarTodo";
import TodoFiltro from "./componentes/TodoFiltro";
import { useState } from "react";
const listadoTarea=[{id:1, 
    titulo: "tarea01", 
    completado:true}];


function App() {
    const [tareas, setTareas]=useState(listadoTarea);
    const crearTarea=(titulo)=>{
        const nuevaTarea={id: Date.now(),titulo, completado:false}
        setTareas([...tareas,nuevaTarea]);
    }
    const eliminarTarea=(id)=>{
        setTareas(tareas.filter(tarea=>(tarea.id !=id)))
    }
    const modificarTarea=(id)=>{
        setTareas(tareas.map((tarea)=>tarea.id ===id ? {...tarea, completado : !tarea.completado}: tarea))
    }
    const contarTareas= tareas.filter((tarea)=> !tarea.completado).length;
    const eliminarCompletadas = ()=>{
    setTareas(tareas.filter(tarea=>(!tarea.completado)));
    }
    return (
            <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen dark:bg-gray-900">
                
                {/*Header*/}
                <Header></Header>

                <main className="container mx-auto px-4 mt-8 ">

                    {/*agregar tarea al formulario*/}
                    <AgregarTareaFormulario crearTarea={crearTarea}></AgregarTareaFormulario>

                    {/*ListadoTareas- teras--cambiarEstado-Eliminar*/}
                    <ListadoTareas tareas={tareas} eliminarTarea={eliminarTarea} modificarTarea={modificarTarea}></ListadoTareas>

                    {/*Todocontabilizar las tareas y eliminar completadas*/}
                    <ContabilizarTodo contarTareas={contarTareas} eliminarCompletadas={eliminarCompletadas}></ContabilizarTodo>

                    {/*TodoFiltro funcionalidad boton all, active, y completado*/}
                    <TodoFiltro></TodoFiltro>

                </main>
                <footer></footer>
            </div>    
    )


}
export default App

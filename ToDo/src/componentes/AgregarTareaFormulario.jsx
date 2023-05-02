import { useState } from "react";


const AgregarTareaFormulario=({crearTarea})=>{
    const [titulo, setTitulo]=useState("");
    const funcionBoton=(e)=>{
        e.preventDefault();
        if (titulo.trim()===""){
            return setTitulo("");
        }
        crearTarea(titulo);
        setTitulo("");
    }
    
    return (
    <form onSubmit={funcionBoton} className="bg-white rounded-md overflow-hidden py-4 gap-4 items-center px-4 mt-8 dark:bg-gray-800">
        <span className="inline-block w-5 h-5 rounded-full border-2 " ></span>
        <input className="dark:bg-gray-800 w-full text-gray-400 border-none" type="text" placeholder="Crea una nueva tarea ..." value={titulo} onChange={(e)=>setTitulo(e.target.value)} />
    </form>
    )
}
export default AgregarTareaFormulario;
import CrossIcono from "./componentes/iconos/CrossIcono";
import LunaIcono from "./componentes/LunaIcono";
function App() {
    return (
            <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">

                <header className="container mx-auto px-4 pt-8">
                    <div className="flex justify-between">
                        <h1 className="text-white text-3xl font-bold tracking-[0.3em]">TODO</h1>
                        <button>
                            <LunaIcono ></LunaIcono>
                        </button> 
                    </div>
                    <form className="bg-white rounded-md overflow-hidden py-4 gap-4 items-center px-4 mt-8">
                        <span className="inline-block w-5 h-5 rounded-full border-2 "></span>
                        <input className="w-full text-gray-400 border-none" type="text" placeholder="Crea una nueva tarea ..." />
                    </form>
                </header>

                <main className="container mx-auto px-4 mt-8">
                    <div className="bg-white rounded-md ">
                        <article className="flex gap-4 py-4 border-b border-b-gray-400 px-4">
                        <button  className="inline-block w-5 h-5 rounded-full border-2 "></button>
                        <p className="text-gray-600 grow">complete online java Script Course</p>
                        <button className="flex-none">
                            <CrossIcono></CrossIcono>
                        </button>
                    </article>
                    <section className="py-4 px-4 flex justify-between">
                        <span className="text-gray-400"> 5 tareas</span>
                        <button className="text-gray-400">Eliminar Completadas</button>
                    </section> 
                    </div>
                </main>

                <footer className="container mx-auto px-4 bg-white mt-8 rounded-md">
                    <div className=" p-4 flex justify-center gap-4">
                        <button className="text-red-400">All</button>
                        <button className="hover:text-red-400">Active</button>
                        <button className="hover:text-red-400">Complete</button>
                    </div> 
                </footer >

            </div>    
    )


}
export default App

const TodoFiltro=()=>{
    return ( 
    <section className="container mx-auto px-4 bg-white mt-8 rounded-md dark:bg-gray-800">
        <div className=" p-4 flex justify-center gap-4">
            <button className="text-red-400">All</button>
            <button className="hover:text-red-400">Active</button>
            <button className="hover:text-red-400">Complete</button>
        </div> 
    </section >)
}
export default TodoFiltro;
import LunaIcono from "./iconos/IconoLuna";
const Header=()=>{
    return (
        <header className="container mx-auto px-4 pt-8 ">
            <div className="flex justify-between">
                <h1 className="text-white text-3xl font-bold tracking-[0.3em]">TODO</h1>
                <button>
                    <LunaIcono ></LunaIcono>
                </button> 
            </div>
            
        </header>)
}
export default Header;
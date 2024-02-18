import Navbar from "@/components/Navbar";

function CrearCurso() {
    return (
        <div className="flex gap-4">
            <Navbar />
            <form>
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Descripción" />
                <input type="text" placeholder="Precio" />
                <input type="text" placeholder="Imagen" />
                <button>Crear</button>
            </form>
        </div>
    )
}

export default CrearCurso;
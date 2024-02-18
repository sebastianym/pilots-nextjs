"use client";
import {useRouter} from "next/navigation";

function FormLogin() {
    const router = useRouter();    
  return (
    <form className="bg-zinc-900 px-20 py-20 rounded-3xl border-gray-100">
      <h1 className="font-semibold text-5xl mb-4">Inicia Sesión</h1>
      <p className="font-medium text-lg ">
        Bienvenido, ingresa tus credenciales
      </p>
      <div className="mt-8">
        <label className="font-medium text-lg" htmlFor="email">
          Correo Electronico
        </label>
        <input
          className="border-2 border-gray-200 p-3 rounded-xl mt-1 w-full text-black"
          id="email"
          type="text"
          placeholder="Digita tu correo electronico"
        />
      </div>

      <div className="mt-8">
        <label className="font-medium text-lg" htmlFor="password">
          Contraseña
        </label>
        <input
          className="border-2 border-sky-900 p-3 rounded-xl mt-1 w-full text-black"
          id="password"
          type="password"
          placeholder="Digita tu contraseña"
        />
      </div>

      <button
        className="bg-sky-800 w-full mt-12 text-lg hover:bg-sky-900 hover:scale-[1.02] ease-in-out transition-all font-bold py-3 px-2 rounded"
        type="submit"
        onClick={(e) => {
            e.preventDefault();
            router.push("/admin");
        }}
      >
        Iniciar Sesión
      </button>
    </form>
  );
}

export default FormLogin;

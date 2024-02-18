function Login() {
  return (
    <div className="container flex bg-slate-900 h-screen justify-center items-center">
      <div className="bg-slate-700 p-10">
        <h1 className="font-bold text-5xl mb-6 text-center">Bienvenido!</h1>
        <p className="font-bold text-2xl mb-6 text-center">Por favor, inicia sesión.</p>
        <form>
          <label className="font-bold text-sm mb-4" htmlFor="usuario">
            Correo Electronico
          </label>
          <input
            className="border border-gray-300 p-2 mb-4 w-full"
            id="usuario"
            type="text"
            placeholder="Digita tu Correo"
          />
          <label className="font-bold text-sm mb-4" htmlFor="password">
            Contraseña
          </label>
          <input
            className="border border-gray-300 p-2 mb-4 w-full"
            id="password"
            type="password"
            placeholder="Digita tu Contraseña"
          />
          <button className="bg-neutral-800 hover:bg-neutral-950 font-bold py-2 px-4 rounded  " type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

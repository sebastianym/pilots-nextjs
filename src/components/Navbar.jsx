import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-slate-500 w-80 text-center font-bold text-2xl h-screen">
      <h2 className="m-3 py-3">Bienvenido!</h2>
      <ul>
        <li className="my-3 py-3 hover:bg-slate-800">
          <Link href="/admin">Dashboard</Link>
        </li>
        <li className="my-3 py-3 hover:bg-slate-800">
          <Link href="/admin/crear">Posts</Link>
        </li>
        <li className="my-3 py-3 hover:bg-slate-800">
          <Link href="/...">Users</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
import Navbar from "@/components/Navbar";

function Admin() {
  return (
    <div className="flex gap-4">
      <Navbar />
      <main>
        <h1>Dashboard</h1>
        <p>Este es el panel de administración</p>
      </main>
    </div>
  );
}
export default Admin;

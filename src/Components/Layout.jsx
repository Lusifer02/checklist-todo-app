import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <Navbar />
      <main className="pt-20 px-4">{children}</main>
    </div>
  );
}

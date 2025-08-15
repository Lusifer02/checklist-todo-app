import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Login", path: "/login" },
  { name: "Sign Up", path: "/signup" },
  
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-md shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          📝 MyToDo
        </Link>

        {/* Links */}
        <div className="flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="relative hover:text-yellow-300 transition font-medium"
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 h-[2px] bg-blue-700 bottom-[-4px]"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import taskIllustration from "../assets/illustration.svg";
import Navbar from "../Components/Navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white ">
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-center px-8 py-16 md:py-24">
        
        {/* Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          className="md:w-1/2"
        >
          <h1 className="text-5xl font-bold sm:text-2xl lg:text-3xl mb-4 text-center"> Organize Your Task with <span className="text-blue-300">CheckList</span></h1>
          <p className="text-lg text-gray-200 sm:text-xl lg:text-2xl mb-8 text-center">
            Manage your to-dos, track progress, and stay on top of your work.
          </p>
          <div className="flex justify-center item-center gap-4">
            <Link
              to="/signup"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-300 transition"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
            >
              Login
            </Link>
          </div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex-1 justify-center item-center mt-10 md:mt-0 flex gap-8"
        >
          <img src={taskIllustration} alt="Task illustration" className="w-3/4 h-auto" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-8 py-16 bg-white text-black">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Key Features
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Create Tasks", "Edit & Delete", "Secure Authentication"].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              <p className="text-gray-600">
                {feature} to keep your productivity high and workflow smooth.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
     
    </div>
  );
}

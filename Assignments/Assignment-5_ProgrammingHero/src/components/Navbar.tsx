import { Menu, XIcon } from "lucide-react";
import Logo from "../assets/logo-text.png";
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="sticky border border-b-[#f1f5f9] top-0 z-50 bg-[#f8f6f6]/90 md:bg-white/90 border-b border-white/20 backdrop:blur-md">
      <div className="relative w-[85%] mx-auto py-5 flex items-center justify-between">
        {/* Mobile Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className=" lg:hidden cursor-pointer"
        >
          {isMenuOpen ? <XIcon /> : <Menu />}
        </button>
        {isMenuOpen && (
          <ul className="flex bg-white/95 backdrop:blur-md border border-gray-200 rounded absolute top-15  flex-col gap-4 px-8 py-5 lg:hidden">
            <li className="text-[#db2777]">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        )}

        {/* Desktop Menu */}
        <img src={Logo} alt="logo" />

        <ul className="hidden lg:flex gap-6">
          <li className="text-[#db2777]">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-5">
          <button type="button" className="text-[13px] cursor-pointer">
            Sign In
          </button>
          <button
            className="btn px-4 text-[13px] bg-[#d91b7e] border-none cursor-pointer text-white btn-secondary rounded-3xl"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

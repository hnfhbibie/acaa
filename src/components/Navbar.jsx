import { useState } from "react";
import { navbarLinks } from "../constant";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent py-5 absolute">
      <nav className="flex max-container text-xl px-5 lg:px-24 items-center justify-between">
        <div className="font-poppin font-bold">
          <h1>ACAA</h1>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-5">
            {navbarLinks.map((navitem) => (
              <li key={navitem.label}>
                <a
                  className="font-semibold font-nunito text-blue-text cursor-pointer hover:text-blue-hover"
                  href={navitem.href}
                >
                  {navitem.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* sidebar */}
        <div className="md:hidden">
          {!menuOpen ? (
            <FaBars className="w-6 h-6" onClick={() => setMenuOpen(true)} />
          ) : (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={() => setMenuOpen(false)}
            />
          )}
        </div>
      </nav>
      <div
        className={`absolute w-full h-screen z-10 p-4 bg-white md:hidden flex items-center justify-center smooth-transition ${
          menuOpen ? "right-0" : "-right-full"
        }`}
      >
        <ul className="flex flex-col justify-center items-center text-2xl gap-5">
          {navbarLinks.map((navitem) => (
            <li key={navitem.label} onClick={() => setMenuOpen(false)}>
              <a
                className="font-semibold font-nunito text-blue-text cursor-pointer hover:text-blue-hover"
                href={navitem.href}
              >
                {navitem.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

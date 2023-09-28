import { navbarLinks } from "../constant";

import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="w-full bg-transparent py-5 absolute">
      <nav className="flex max-container text-xl px-4 lg:px-24 items-center justify-between">
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
        <div className="md:hidden   ">
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import React from "react";
let Links = [
  { name: "HOME", link: "/" },
  { name: "SERVICE", link: "/" },
  { name: "ABOUT", link: "/" },
  { name: "BOOKING", link: "/" },
  { name: "CONTACT", link: "/" },
];

function Header() {
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]">
          <span className="text-3xl text-orange-600 mr-1 pt-2">
            <ion-icon name="sync-circle"></ion-icon>
          </span>{" "}
          Celia Study Consult{" "}
        </div>
        <ul className="md:flex md:items-center">
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl">
              <a
                href={link.link}
                className="text-gray-800 hover:text-orange-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;

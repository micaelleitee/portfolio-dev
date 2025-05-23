import React from "react"
import "./Header.css"

const Header = () => {
  return (
    <header className="fixed top-2 left-1/2 -translate-x-1/2 w-full max-w-7xl mx-auto z-50 h-16 flex justify-between items-center px-5 py-2 cursor-pointer">
      <img src="/LOGO_MKL.svg" alt="logo" className="w-20" />
      <div className="p-0.5 bg-gradient-to-r from-[#C04406] to-[#CE89F8] rounded-full nav-bars">
        <div className="bg-black backdrop-blur-xl rounded-full">
          <nav className="px-5 py-1.5">
            <ul className="flex space-x-9">
              <li>
                <a href="#home" className="text-white hover:text-gray-300">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-gray-300">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-gray-300">
                  Projetos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="button"
          value="Contato"
          className="bg-gradient-to-r from-[#C04406] to-[#CE89F8] text-white font-medium px-5 py-0.5 rounded-full cursor-pointer"
        />
        <img
          src="/menu.svg"
          alt=""
          className="menu-hamburguer hidden cursor-pointer"
        />
      </div>
    </header>
  )
}

export default Header

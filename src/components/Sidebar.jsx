import React from 'react'
import { useState } from "react";
import { Home, Book, Dumbbell, Users, Heart, Menu, X } from "lucide-react";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Home", icon: <Home size={20} />, link: "#" },
    { name: "Physical", icon: <Dumbbell size={20} />, link: "#" },
    { name: "Knowledge", icon: <Book size={20} />, link: "#" },
    { name: "Relationships", icon: <Users size={20} />, link: "#" },
    { name: "Spirituality", icon: <Heart size={20} />, link: "#" },
  ];
  return (
    <>
      {/* Mobile Toggle Button */}
      <button className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-lg" onClick={toggleSidebar}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-5 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0 md:w-56`}
      >
        <h2 className="text-xl font-bold mb-6">My App</h2>
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-lg">
                {item.icon}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}




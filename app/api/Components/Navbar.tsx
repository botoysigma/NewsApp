"use client";
import { useState, useEffect } from "react";

interface NavbarProps {
  onSettingsClick: () => void;
}

export default function Navbar({ onSettingsClick }: NavbarProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center p-4 bg-white/30 dark:bg-black/30 backdrop-blur-md shadow-md rounded-b-xl">
      <h1 className="font-bold text-xl">Lishith News</h1>
      <div className="flex gap-2 items-center">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full transition"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
        <button
          onClick={onSettingsClick}
          className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full transition"
        >
          ⚙️
        </button>
      </div>
    </nav>
  );
}
"use client";
import { useState } from "react";
import { NextPage } from "next";
import styles from "@/styles/index.module.css";
import { Jockey_One } from "next/font/google";

const jockeyOne = Jockey_One({
  subsets: ["latin"],
  weight: ["400"],
});

const Home: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between p-4 bg-blue-600 text-white">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="focus:outline-none"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
        <h1 className={[styles.title, jockeyOne.className].join(" ")}>
          PROJETOR CONSCIENTE
        </h1>
        <div></div>
      </header>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-600 text-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Conteúdos</h2>
          <button onClick={() => setIsMenuOpen(false)} className="text-2xl">
            &times;
          </button>
        </div>
        <nav className="mt-4 flex flex-col space-y-2 p-4">
          <a href="#" className="hover:bg-gray-700 p-2 rounded">
            Chakras
          </a>
        </nav>
      </div>
      <main className="p-4 mt-4"></main>
    </div>
  );
};

export default Home;

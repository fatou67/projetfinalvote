import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="bg-white min-h-screen px-6 lg:px-32 py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
      {/* Texte à gauche */}
      <div className="text-center lg:text-left w-full lg:w-1/2">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Votez en toute simplicité <br /> avec <span className="text-blue-600">SEN-Vote</span>
        </h1>
        <p className="mt-6 text-gray-600 text-xl">
          Une plateforme de vote en ligne sécurisée, rapide et accessible à tous les citoyens, même en zone rurale.
        </p>
        <Link to="/login">
  <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-xl text-xl shadow-lg transition duration-300">
    🗳️ Voter maintenant
  </button>
</Link>
  </div>

      {/* Image à droite */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/004/302/553/non_2x/poster-of-online-vote-with-computer-and-ballot-box-vector.jpg"
          alt="Vote en ligne"
          className="w-[90%] h-auto max-w-[600px] rounded-lg shadow-2xl"
        />
      </div>
    </section>
  );
}

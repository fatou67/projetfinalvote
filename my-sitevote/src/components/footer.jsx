import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6 lg:px-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-gray-700">
        {/* Logo + description */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600">SEN-Vote</h2>
          <p className="mt-4 text-sm">
            Plateforme de vote en ligne sécurisée, rapide et accessible à tous les citoyens du Sénégal.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Accueil</Link></li>
            <li><Link to="/login" className="hover:underline">Voter</Link></li>
            <li><Link to="/about" className="hover:underline">À propos</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/help" className="hover:underline">Centre d’aide</Link></li>
            <li>
              <span className="block">📞 +221 78 304 79 </span>     
              <span className="block">✉️ contact@senvote.sn</span>
            </li>
            <li><Link to="/privacy" className="hover:underline">Politique de confidentialité</Link></li>
          </ul>
        </div>

        {/* Connexion / Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Restez informé</h3>
          <p className="text-sm mb-4">Recevez les dernières nouvelles et mises à jour du processus électoral.</p>
          <input
            type="email"
            placeholder="Votre adresse e-mail"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled
          />
          <Link to="/auth">
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-md transition"
            >
              🔐 Se connecter / S’inscrire
            </button>
          </Link>
        </div>
      </div>

      {/* Bas de page */}
      <div className="mt-12 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SEN-Vote. Tous droits réservés.
      </div>
    </footer>
  );
}

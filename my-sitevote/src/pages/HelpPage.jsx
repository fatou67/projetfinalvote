import React from 'react';
import { InformationCircleIcon, ShieldCheckIcon, PhoneIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';


export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 lg:px-32 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-6">Centre d’aide</h1>
        <p className="text-gray-700 text-lg mb-10">
          Retrouvez ici les réponses aux questions fréquentes ou contactez notre support si vous avez besoin d’aide.
        </p>

        <div className="space-y-8">
          {/* Question 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <InformationCircleIcon className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">Comment m’inscrire ?</h2>
            </div>
            <p className="text-gray-600">
              Cliquez sur “S’inscrire” en bas de page, puis allez sur la page /auth pour compléter votre inscription.
            </p>
          </div>

          {/* Question 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <ShieldCheckIcon className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">Est-ce que mon vote est sécurisé ?</h2>
            </div>
            <p className="text-gray-600">
              Oui, chaque vote est crypté et authentifié par votre identité unique, assurant ainsi la sécurité et l'intégrité du processus.
            </p>
          </div>

          {/* Question 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <PhoneIcon className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-800">Comment contacter le support ?</h2>
            </div>
            <p className="text-gray-600">
              Vous pouvez envoyer un mail à <strong>contact@senvote.sn</strong> ou appeler le <strong>+221 78 304 79 41</strong>.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Link to="/auth">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg shadow-lg transition duration-300">
              S’inscrire maintenant
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

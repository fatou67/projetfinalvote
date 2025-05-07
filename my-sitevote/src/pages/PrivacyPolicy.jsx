import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white px-6 lg:px-32 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Politique de confidentialité</h1>
        <p className="text-gray-700 mb-6 text-lg">
          Nous nous engageons à protéger votre vie privée. Voici comment vos données sont utilisées :
        </p>

        <ul className="list-disc pl-6 space-y-4 text-gray-600 text-base">
          <li>Les informations personnelles collectées sont utilisées uniquement pour vérifier votre identité.</li>
          <li>Nous ne partageons vos données avec aucun tiers sans votre consentement.</li>
          <li>Toutes les communications sont cryptées et sécurisées.</li>
          <li>Vous pouvez demander la suppression de vos données à tout moment.</li>
        </ul>

        <p className="mt-10 text-gray-500 text-sm">Dernière mise à jour : Avril 2025</p>
      </div>
    </div>
  );
}

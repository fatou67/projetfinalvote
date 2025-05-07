import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    "100% sécurisé et confidentiel",
    "Accessible depuis tout appareil (ordinateur, téléphone, tablette)",
    "Système vérifié pour éviter toute fraude",
    "Simple à utiliser, même sans expérience numérique",
    "Support en ligne pour vous accompagner",
  ];

  return (
    <section className="bg-gray-50 px-6 lg:px-32 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          Pourquoi choisir <span className="text-blue-600">SEN-Vote</span> ?
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Une plateforme de vote conçue pour tous les citoyens sénégalais, facile à utiliser et 100% fiable.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
              <p className="text-gray-700 text-lg">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

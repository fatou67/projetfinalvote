
import React from 'react';

export default function HowItWorksSection() {
  const steps = [
    {
      title: "1. Inscription sécurisée",
      description: "Créez un compte en quelques clics avec votre numéro d'identité ou votre NINEA.",
    },
    {
      title: "2. Vérification d'identité",
      description: "Votre identité est vérifiée pour garantir un vote unique et légitime.",
    },
    {
      title: "3. Vote rapide en ligne",
      description: "Accédez à votre espace personnel et votez en toute sécurité, où que vous soyez.",
    },
  ];

  return (
    <section className="bg-white px-6 lg:px-32 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-10">
          Comment ça marche ?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {steps.map((step, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">{step.title}</h3>
              <p className="text-gray-700 text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

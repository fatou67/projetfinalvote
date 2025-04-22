import React from 'react';
import { Plus, Filter } from 'lucide-react';

const AdminCandidates = () => {
  const candidates = [
    {
      id: 1,
      name: 'Macky Sall',
      party: 'APR',
      election: 'Élection Présidentielle 2024',
      status: 'Approuvé',
      votes: 1234,
    },
    {
      id: 2,
      name: 'Bassirou Diomaye Faye',
      party: 'Pastef',
      election: 'Élection Présidentielle 2024',
      status: 'En attente',
      votes: 980,
    },
  ];
  return (
    <div className="space-y-6 antialiased">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Gestion des Candidats</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5" />
          Ajouter un candidat
        </button>
      </div>
  
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-50">
                <Filter className="h-4 w-4 text-gray-600" />
                <span className="text-gray-700">Filtrer</span>
              </button>
              <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500">
                <option>Toutes les élections</option>
                <option>Élection Présidentielle 2024</option>
                <option>Élection du Conseil Local</option>
              </select>
            </div>
          </div>
  
          <table className="w-full text-base">
            <thead>
              <tr className="border-b border-gray-200 font-medium text-gray-700">
                <th className="text-left py-3 px-4">Nom</th>
                <th className="text-left py-3 px-4">Parti</th>
                <th className="text-left py-3 px-4">Élection</th>
                <th className="text-left py-3 px-4">Statut</th>
                <th className="text-left py-3 px-4">Votes</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr key={candidate.id} className="border-b border-gray-200 hover:bg-gray-50 leading-snug">
                  <td className="py-3 px-4 text-gray-800">{candidate.name}</td>
                  <td className="py-3 px-4 text-gray-600">{candidate.party}</td>
                  <td className="py-3 px-4 text-gray-600">{candidate.election}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                      candidate.status === 'Approuvé' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {candidate.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{candidate.votes}</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Modifier
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  
};

export default AdminCandidates;
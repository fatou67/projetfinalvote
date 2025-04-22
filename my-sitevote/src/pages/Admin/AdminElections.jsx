import React from 'react';
import { Plus, Filter } from 'lucide-react';

const AdminElections = () => {
  const elections = [
    {
      id: 1,
      title: 'Élection Présidentielle 2024',
      candidates: 5,
      registeredVoters: 10000,
      status: 'À venir',
      startDate: '2024-04-01',
    },
    {
      id: 2,
      title: 'Élection du Conseil Local',
      candidates: 8,
      registeredVoters: 5000,
      status: 'Active',
      startDate: '2024-03-15',
    },
  ];

  return (
    <div className="space-y-6 antialiased">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Gestion des Élections</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5" />
          Nouvelle élection
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
                <option>Tous les statuts</option>
                <option>Active</option>
                <option>À venir</option>
                <option>Terminée</option>
              </select>
            </div>
          </div>

          <table className="w-full text-base">
            <thead>
              <tr className="border-b border-gray-200 font-medium text-gray-700">
                <th className="text-left py-3 px-4">Titre</th>
                <th className="text-left py-3 px-4">Candidats</th>
                <th className="text-left py-3 px-4">Électeurs inscrits</th>
                <th className="text-left py-3 px-4">Statut</th>
                <th className="text-left py-3 px-4">Date de début</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {elections.map((election) => (
                <tr key={election.id} className="border-b border-gray-200 hover:bg-gray-50 leading-snug">
                  <td className="py-3 px-4 text-gray-800 font-medium">{election.title}</td>
                  <td className="py-3 px-4 text-gray-600">{election.candidates}</td>
                  <td className="py-3 px-4 text-gray-600">{election.registeredVoters.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                      election.status === 'Active' ? 'bg-green-100 text-green-700' :
                      election.status === 'À venir' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {election.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{election.startDate}</td>
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

export default AdminElections;
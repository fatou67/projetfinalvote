import React from 'react';
import { Plus, Filter } from 'lucide-react';

const AdminVotes = () => {
  const votes = [
    {
      id: 1,
      title: 'Élection du Conseil Municipal 2024',
      status: 'Actif',
      totalVotes: 1234,
      startDate: '2024-03-01',
      endDate: '2024-03-15',
    },
    {
      id: 2,
      title: 'Conseil administration',
      status: 'Terminé',
      totalVotes: 856,
      startDate: '2024-02-15',
      endDate: '2024-02-29',
    },
  ];

  return (
    <div className="space-y-6 antialiased">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Gestion des Votes</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
          <Plus className="h-5 w-5" />
          <span>Nouveau Vote</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors duration-200">
                <Filter className="h-4 w-4 text-gray-600" />
                <span className="text-gray-700">Filtrer</span>
              </button>
              <select className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200">
                <option>Tous les statuts</option>
                <option>Actif</option>
                <option>Terminé</option>
              </select>
            </div>
          </div>

          <table className="w-full text-base">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Titre</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Statut</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Total des Votes</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Date de début</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Date de fin</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {votes.map((vote) => (
                <tr key={vote.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150">
                  <td className="py-3 px-4 text-gray-800 font-medium">{vote.title}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                      vote.status === 'Actif' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {vote.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{vote.totalVotes.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-600">{vote.startDate}</td>
                  <td className="py-3 px-4 text-gray-600">{vote.endDate}</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
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

export default AdminVotes;
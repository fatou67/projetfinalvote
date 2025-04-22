import React from 'react';
import {
  Users,
  Vote,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

export default function AdminDashboard() {
  // Statistiques
  const stats = [
    { title: 'Total Votants', value: '12,845', change: '+15%', up: true, icon: Users },
    { title: 'Votes Aujourd\'hui', value: '1,234', change: '+8.3%', up: true, icon: Vote },
    { title: 'Élections Actives', value: '3', change: '+2', up: true, icon: Calendar },
  ];

  // Élections récentes
  const recentElections = [
    { title: 'Élection Présidentielle', participants: 4, totalVotes: 8234, status: 'En cours' },
    { title: 'Élection Municipale', participants: 6, totalVotes: 3421, status: 'Terminée' },
    { title: 'Conseil d\'Administration', participants: 3, totalVotes: 945, status: 'À venir' },
  ];

  // Activités récentes
  const recentActivities = [
    { action: 'Nouveau vote enregistré', details: 'Élection Présidentielle', time: '2m ago' },
    { action: 'Nouvelle élection créée', details: 'Conseil Municipal', time: '1h ago' },
    { action: 'Mise à jour des résultats', details: 'Élection Départementale', time: '3h ago' },
  ];

  return (
    <div className="space-y-8 antialiased">
      {/* Grille de statistiques */}
      <div className="grid grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-gray-600 font-medium">{stat.title}</h3>
              <stat.icon className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-800">{stat.value}</span>
              <span className={`flex items-center text-sm ${stat.up ? 'text-green-600' : 'text-red-600'}`}>
                {stat.up ? (
                  <ArrowUpRight className="h-4 w-4" />
                ) : (
                  <ArrowDownRight className="h-4 w-4" />
                )}
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Élections récentes */}
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800 font-sans">Élections Récentes</h3>
          <button className="text-blue-600 hover:text-blue-800 font-medium">Voir tout</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-base">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Titre</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Participants</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Total Votes</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Statut</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentElections.map((election, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150">
                  <td className="py-3 px-4 text-gray-800 font-medium">{election.title}</td>
                  <td className="py-3 px-4 text-gray-600">{election.participants}</td>
                  <td className="py-3 px-4 text-gray-600">{election.totalVotes.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                      election.status === 'En cours' ? 'bg-green-100 text-green-700' :
                      election.status === 'Terminée' ? 'bg-gray-100 text-gray-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {election.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                      Gérer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Activités récentes */}
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Activités Récentes</h3>
          <button className="text-blue-600 hover:text-blue-800 font-medium">Voir tout</button>
        </div>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-start gap-4 p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Vote className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{activity.action}</p>
                <p className="text-sm text-gray-600">
                  {activity.details} • <span className="text-gray-500">{activity.time}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
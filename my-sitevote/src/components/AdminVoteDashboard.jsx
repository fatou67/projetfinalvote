import React from 'react';
import { BarChart3, Users, PieChart } from 'lucide-react';

const AdminVoteDashboard = () => {
  const stats = [
    { title: 'Total Votes', value: '4,294', change: '+12%', icon: BarChart3 },
    { title: 'Active Users', value: '1,235', change: '+8%', icon: Users },
    { title: 'Completion Rate', value: '89%', change: '+3%', icon: PieChart },
  ];

  return (
    <div className="grid grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <stat.icon className="h-6 w-6 text-blue-500" />
            <span className="text-sm text-green-500">+{stat.change}</span>
          </div>
          <h3 className="text-2xl font-bold mt-4">{stat.value}</h3>
          <p className="text-gray-600">{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminVoteDashboard;
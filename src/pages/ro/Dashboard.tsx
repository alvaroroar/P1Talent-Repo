import { useState } from 'react';
import { Search, Filter, User, Briefcase, Star, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { employees } from '../../data/mockData';

export default function RODashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  // Filter employees that report to the current RO (hardcoded for demo)
  const myTeam = employees.filter(emp => emp.reportingOfficer === 'ro1');
  
  const filteredTeam = myTeam.filter(emp => 
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">My Team</h1>
        <div>
          <span className="text-gray-600 mr-2">Pending Appraisals:</span>
          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm font-semibold">3</span>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6 transition-all duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search team members..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-md flex items-center hover:bg-gray-50 transition-colors">
            <Filter size={18} className="mr-2" />
            Filter
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Appraisal</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTeam.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                        <User size={20} className="text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                        <div className="text-sm text-gray-500">{employee.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Briefcase size={16} className="mr-2 text-gray-500" />
                      <span className="text-sm text-gray-900">{employee.role}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">May 15, 2025</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex text-yellow-500">
                      <Star size={16} className="fill-current" />
                      <Star size={16} className="fill-current" />
                      <Star size={16} className="fill-current" />
                      <Star size={16} className="fill-current" />
                      <Star size={16} className="text-gray-300" />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button 
                      className="text-indigo-600 hover:text-indigo-900 flex items-center transition-colors"
                      onClick={() => navigate(`/ro/employee/${employee.id}`)}
                    >
                      View <ChevronRight size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredTeam.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p>No team members found matching your search criteria.</p>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
          <h2 className="text-lg font-semibold mb-4">Pending Appraisals</h2>
          <div className="space-y-4">
            {myTeam.slice(0, 3).map((employee) => (
              <div key={`appraisal-${employee.id}`} className="flex items-center justify-between border-b pb-3">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <User size={20} className="text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                    <div className="text-xs text-gray-500">Due: June 10, 2025</div>
                  </div>
                </div>
                <button className="bg-indigo-600 text-white px-3 py-1 text-sm rounded-md hover:bg-indigo-700 transition-colors">
                  Start
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Feedback</h2>
          <div className="space-y-4">
            {myTeam.slice(0, 3).map((employee) => (
              <div key={`feedback-${employee.id}`} className="flex items-start border-b pb-3">
                <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <User size={20} className="text-indigo-600" />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                  <div className="text-sm text-gray-500 mt-1">Submitted a self-evaluation on May 30, 2025</div>
                  <button className="text-indigo-600 text-sm mt-1 hover:text-indigo-800 transition-colors">View details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
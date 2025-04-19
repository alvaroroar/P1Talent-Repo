import { User, Star, Award, Briefcase, Clock, Calendar, FileText, CheckCircle, XCircle, ChevronRight } from 'lucide-react';
import { employees } from '../../data/mockData';

export default function EmployeeDashboard() {
  // For demo, we'll use a hardcoded employee
  const employee = employees[0]; 
  
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6 w-full md:w-1/3 hover:shadow-md transition-shadow">
          <div className="flex flex-col items-center">
            <div className="h-24 w-24 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <User size={48} className="text-indigo-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">{employee.name}</h2>
            <p className="text-gray-600 flex items-center mt-1">
              <Briefcase size={16} className="mr-1" />
              {employee.role}
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <span className={`px-2 py-1 text-xs font-semibold rounded-full 
                ${employee.status === 'Active' ? 'bg-green-100 text-green-800' : 
                  employee.status === 'Onboarding' ? 'bg-blue-100 text-blue-800' : 
                  'bg-orange-100 text-orange-800'}`}>
                {employee.status}
              </span>
              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800 capitalize">
                {employee.employmentType}
              </span>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Contact Information</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">{employee.email}</p>
              <p className="text-gray-600">{employee.phone}</p>
              <p className="text-gray-600">{employee.address}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 w-full md:w-2/3 hover:shadow-md transition-shadow">
          <h2 className="text-lg font-semibold mb-4">My Performance Overview</h2>
          
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Competencies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(employee.competencies).map(([name, rating]) => (
                <div key={name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-700">{name}</span>
                    <span className="text-sm font-medium text-gray-700">{rating}/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-indigo-500 h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${rating * 10}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Skillset</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(employee.skillset).map(([skill, level]) => (
                <div key={skill}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-700">{skill}</span>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < level ? "fill-current" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Key Results</h3>
            <div className="grid grid-cols-1 gap-4">
              {Object.entries(employee.kpi).map(([name, data]) => (
                <div key={name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-700">{name} (Target: {data.target})</span>
                    <span className="text-sm font-medium text-gray-700">{data.current}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-indigo-500 h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${(data.current / data.target) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">My Tasks & Outputs</h2>
            <span className="text-gray-600 text-sm">June 2025</span>
          </div>
          
          <div className="space-y-4">
            {Object.entries(employee.outputs).map(([output, completed]) => (
              <div key={output} className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 mt-0.5">
                  {completed ? (
                    <CheckCircle size={20} className="text-green-500" />
                  ) : (
                    <XCircle size={20} className="text-gray-400" />
                  )}
                </div>
                <div className="ml-3">
                  <p className="text-gray-800">{output}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {completed 
                      ? "Completed on June 5, 2025" 
                      : "Due on June 15, 2025"}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="mt-4 text-indigo-600 text-sm flex items-center hover:text-indigo-800 transition-colors">
            View all tasks <ChevronRight size={16} />
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Feedback</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors">View all</button>
          </div>
          
          <div className="space-y-4">
            <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded">
              <div className="flex justify-between items-start">
                <h3 className="text-sm font-medium text-gray-800">Great job on the client presentation!</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Positive</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Your preparation and delivery were exceptional. The client was very impressed.</p>
              <div className="mt-1 text-xs text-gray-500">From: Sarah Johnson (Reporting Officer) - June 5, 2025</div>
            </div>
            
            <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
              <div className="flex justify-between items-start">
                <h3 className="text-sm font-medium text-gray-800">Observation about your project management</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Observation</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">I noticed you're very organized with project timelines. Could you share your techniques with the team?</p>
              <div className="mt-1 text-xs text-gray-500">From: Sarah Johnson (Reporting Officer) - June 3, 2025</div>
            </div>
            
            <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <div className="flex justify-between items-start">
                <h3 className="text-sm font-medium text-gray-800">Suggestion for improvement</h3>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Improvement</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Consider documenting your process steps more thoroughly for others to follow.</p>
              <div className="mt-1 text-xs text-gray-500">From: Sarah Johnson (Reporting Officer) - May 28, 2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
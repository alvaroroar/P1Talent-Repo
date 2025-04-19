import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { User, Briefcase, Mail, Phone, MapPin, FileText, Clock, ArrowLeft, Star } from 'lucide-react';
import { employees } from '../../data/mockData';

export default function AdminEmployeeDetail() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('profile');
  
  // Find the employee
  const employee = employees.find(emp => emp.id === id);
  
  if (!employee) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Employee not found</h2>
        <Link to="/admin" className="inline-flex items-center text-indigo-600">
          <ArrowLeft size={16} className="mr-1" /> Back to dashboard
        </Link>
      </div>
    );
  }
  
  return (
    <div>
      <Link to="/admin" className="inline-flex items-center text-indigo-600 mb-6 hover:text-indigo-800 transition-colors">
        <ArrowLeft size={16} className="mr-1" /> Back to dashboard
      </Link>
      
      <div className="bg-white rounded-lg shadow">
        <div className="bg-indigo-600 px-6 py-4 rounded-t-lg">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center">
                <User size={32} className="text-indigo-600" />
              </div>
              <div className="ml-4 text-white">
                <h1 className="text-2xl font-bold">{employee.name}</h1>
                <p className="flex items-center">
                  <Briefcase size={16} className="mr-1" />
                  {employee.role}
                </p>
              </div>
            </div>
            <div>
              <span className={`px-3 py-1 text-sm font-semibold rounded-full 
                ${employee.status === 'Active' ? 'bg-green-100 text-green-800' : 
                  employee.status === 'Onboarding' ? 'bg-blue-100 text-blue-800' : 
                  'bg-orange-100 text-orange-800'}`}>
                {employee.status}
              </span>
            </div>
          </div>
        </div>
        
        <div className="px-6 pt-4 border-b border-gray-200">
          <nav className="flex space-x-8 overflow-x-auto scrollbar-hide">
            <button 
              onClick={() => setActiveTab('profile')} 
              className={`px-1 py-4 text-sm font-medium border-b-2 whitespace-nowrap ${
                activeTab === 'profile' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Profile
            </button>
            <button 
              onClick={() => setActiveTab('performance')} 
              className={`px-1 py-4 text-sm font-medium border-b-2 whitespace-nowrap ${
                activeTab === 'performance' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Performance & Potential
            </button>
            <button 
              onClick={() => setActiveTab('feedback')} 
              className={`px-1 py-4 text-sm font-medium border-b-2 whitespace-nowrap ${
                activeTab === 'feedback' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Feedback & Recognition
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          {activeTab === 'profile' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Mail size={18} className="text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Email</p>
                        <p className="text-sm text-gray-500">{employee.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone size={18} className="text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Phone</p>
                        <p className="text-sm text-gray-500">{employee.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin size={18} className="text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Address</p>
                        <p className="text-sm text-gray-500">{employee.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h2 className="text-lg font-semibold mb-4">Employment Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Employee ID</p>
                      <p className="text-sm text-gray-500">{employee.id}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Employment Type</p>
                      <p className="text-sm text-gray-500 capitalize">{employee.employmentType}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Age</p>
                      <p className="text-sm text-gray-500">{employee.age}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Salary</p>
                      <p className="text-sm text-gray-500">${employee.salary.toLocaleString()}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm font-medium text-gray-900">Job Description</p>
                      <p className="text-sm text-gray-500">{employee.jobDescription}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold mb-4">Contract Information</h2>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText size={18} className="text-gray-500 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Contract Document</p>
                        <p className="text-sm text-indigo-600 cursor-pointer hover:underline">{employee.contract.file}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock size={18} className="text-gray-500 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Remaining Time</p>
                        <p className="text-sm text-gray-500">
                          {employee.contract.remainingTime.value} {employee.contract.remainingTime.unit}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'performance' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Competencies</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-4">
                    {Object.entries(employee.competencies).map(([name, rating]) => (
                      <div key={name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{name}</span>
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
                
                <h2 className="text-lg font-semibold mb-4 mt-6">Personal Qualities</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex flex-wrap gap-2">
                    {employee.personalQualities.map((quality, index) => (
                      <span 
                        key={index} 
                        className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm"
                      >
                        {quality}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h2 className="text-lg font-semibold mb-4 mt-6">Personal Career Goals</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="space-y-2">
                    {employee.personalCareerGoals.map((goal, index) => (
                      <li key={index} className="text-sm text-gray-700">• {goal}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h2 className="text-lg font-semibold mb-4">Skillset</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-4">
                    {Object.entries(employee.skillset).map(([skill, level]) => (
                      <div key={skill}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{skill}</span>
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
                
                <h2 className="text-lg font-semibold mb-4 mt-6">Key Results</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-4">
                    {Object.entries(employee.kpi).map(([name, data]) => (
                      <div key={name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{name}</span>
                          <span className="text-sm font-medium text-gray-700">
                            {data.current}/{data.target}
                          </span>
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
                
                <h2 className="text-lg font-semibold mb-4 mt-6">Monthly Outputs</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-2">
                    {Object.entries(employee.outputs).map(([output, completed]) => (
                      <div key={output} className="flex items-center">
                        <div className={`h-4 w-4 rounded-full mr-2 ${completed ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <span className="text-sm text-gray-700">{output}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'feedback' && (
            <div>
              <div className="bg-white border border-gray-200 rounded-lg mb-6">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <h2 className="text-lg font-semibold">Performance Acknowledgements</h2>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded">
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-medium text-gray-800">Great job on the client presentation!</h3>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Positive</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Your preparation and delivery were exceptional. The client was very impressed.</p>
                      <div className="mt-1 text-xs text-gray-500">From: Sarah Johnson (Reporting Officer) - June 5, 2025</div>
                      <div className="mt-2 flex items-center">
                        <div className="flex space-x-2">
                          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center">
                            <span>👍</span>
                            <span className="ml-1">2</span>
                          </span>
                          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center">
                            <span>❤️</span>
                            <span className="ml-1">1</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-medium text-gray-800">Observation about your project management</h3>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Observation</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">I noticed you're very organized with project timelines. Could you share your techniques with the team?</p>
                      <div className="mt-1 text-xs text-gray-500">From: Sarah Johnson (Reporting Officer) - June 3, 2025</div>
                      <div className="mt-2 flex items-center">
                        <div className="flex space-x-2">
                          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center">
                            <span>👍</span>
                            <span className="ml-1">1</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-medium text-gray-800">Suggestion for improvement</h3>
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Improvement</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Consider documenting your process steps more thoroughly for others to follow.</p>
                      <div className="mt-1 text-xs text-gray-500">From: Sarah Johnson (Reporting Officer) - May 28, 2025</div>
                      <div className="mt-2 flex items-center">
                        <div className="flex space-x-2">
                          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center">
                            <span>👍</span>
                            <span className="ml-1">1</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Public Recognition</h2>
                  <button className="text-indigo-600 text-sm hover:text-indigo-800 transition-colors">Add Recognition</button>
                </div>
                <div className="p-4">
                  <div className="text-center py-6 text-gray-500">
                    <p>No public recognitions yet.</p>
                    <p className="text-sm mt-1">Recognize this employee's achievements and milestones.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
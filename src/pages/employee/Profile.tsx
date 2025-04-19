import { useState } from 'react';
import { User, Briefcase, Star, Calendar, Mail, Phone, MapPin, Award, Users } from 'lucide-react';
import { employees, selfEvaluations } from '../../data/mockData';

export default function EmployeeProfile() {
  const [activeTab, setActiveTab] = useState('personal');
  
  // For demo, we'll use a hardcoded employee
  const employee = employees[0];
  
  // Get the latest self-evaluation
  const latestSelfEval = selfEvaluations.find(selfEval => selfEval.employeeId === employee.id);
  
  return (
    <div>
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
              onClick={() => setActiveTab('personal')} 
              className={`px-1 py-4 text-sm font-medium border-b-2 whitespace-nowrap ${
                activeTab === 'personal' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Personal Info
            </button>
            <button 
              onClick={() => setActiveTab('performance')} 
              className={`px-1 py-4 text-sm font-medium border-b-2 whitespace-nowrap ${
                activeTab === 'performance' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Performance
            </button>
            <button 
              onClick={() => setActiveTab('evaluation')} 
              className={`px-1 py-4 text-sm font-medium border-b-2 whitespace-nowrap ${
                activeTab === 'evaluation' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Self-Evaluation
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          {activeTab === 'personal' && (
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
                
                <div className="bg-gray-50 p-4 rounded-lg mt-6">
                  <h2 className="text-lg font-semibold mb-4">Personal Details</h2>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Age</p>
                      <p className="text-sm text-gray-500">{employee.age}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Employee ID</p>
                      <p className="text-sm text-gray-500">{employee.id}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Employment Type</p>
                      <p className="text-sm text-gray-500 capitalize">{employee.employmentType}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Job Information</h2>
                    <span className="text-sm text-gray-500">
                      <Calendar size={16} className="inline mr-1" />
                      Started: January 15, 2023
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Current Role</p>
                      <p className="text-sm text-gray-500">{employee.role}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Reporting Officer</p>
                      <div className="flex items-center mt-1">
                        <div className="flex-shrink-0 h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center">
                          <Users size={16} className="text-indigo-600" />
                        </div>
                        <p className="text-sm text-gray-500 ml-2">Sarah Johnson</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Job Description</p>
                      <p className="text-sm text-gray-500">{employee.jobDescription}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold mb-4">Personal Career Goals</h2>
                  <div className="space-y-3">
                    {employee.personalCareerGoals.map((goal, index) => (
                      <div key={index} className="p-3 bg-white rounded-md border border-gray-200">
                        <p className="text-sm text-gray-700">{goal}</p>
                      </div>
                    ))}
                    <button className="text-indigo-600 text-sm hover:underline hover:text-indigo-800 transition-colors">+ Add new goal</button>
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
              </div>
            </div>
          )}
          
          {activeTab === 'evaluation' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Self-Evaluation</h2>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">Start New Evaluation</button>
              </div>
              
              {latestSelfEval ? (
                <div className="bg-white border border-gray-200 rounded-lg">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <p className="text-sm">
                      <span className="font-medium">Last evaluation:</span> {latestSelfEval.createdAt.toLocaleDateString()}
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-md font-medium mb-3">Competency Self-Assessment</h3>
                        <div className="space-y-4">
                          {Object.entries(latestSelfEval.competencies).map(([name, rating]) => (
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
                        
                        <h3 className="text-md font-medium mb-3 mt-6">Career Goals Self-Assessment</h3>
                        <div className="space-y-4">
                          {Object.entries(latestSelfEval.personalCareerGoals).map(([goal, data]) => (
                            <div key={goal} className="border-b pb-3">
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">{goal}</span>
                                <span className="text-sm font-medium text-gray-700">{data.rating}/10</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden">
                                <div 
                                  className="bg-indigo-500 h-2 rounded-full transition-all duration-500" 
                                  style={{ width: `${data.rating * 10}%` }}
                                ></div>
                              </div>
                              {data.comments && (
                                <p className="text-sm text-gray-600">{data.comments}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-md font-medium mb-3">Skillset Self-Assessment</h3>
                        <div className="space-y-4">
                          {Object.entries(latestSelfEval.skillset).map(([skill, data]) => (
                            <div key={skill} className="border-b pb-3">
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">{skill}</span>
                                <div className="flex text-yellow-500">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      size={16} 
                                      className={i < data.level ? "fill-current" : "text-gray-300"}
                                    />
                                  ))}
                                </div>
                              </div>
                              {data.rationale && (
                                <p className="text-sm text-gray-600">Rationale: {data.rationale}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
                  <Award size={48} className="mx-auto text-indigo-500 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No self-evaluations yet</h3>
                  <p className="text-gray-500 mb-4">Start your first self-evaluation to track your progress and growth.</p>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">Start Self-Evaluation</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
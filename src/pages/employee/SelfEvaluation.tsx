import { useState } from 'react';
import { Star, Save } from 'lucide-react';
import { employees } from '../../data/mockData';

export default function EmployeeSelfEvaluation() {
  // For demo, we'll use a hardcoded employee
  const employee = employees[0];
  
  // Create state for the self-evaluation form
  const [competencies, setCompetencies] = useState<Record<string, number>>(
    Object.fromEntries(Object.entries(employee.competencies).map(([key]) => [key, 0]))
  );
  
  const [skillsetLevels, setSkillsetLevels] = useState<Record<string, number>>(
    Object.fromEntries(Object.entries(employee.skillset).map(([key]) => [key, 0]))
  );
  
  const [skillsetRationales, setSkillsetRationales] = useState<Record<string, string>>(
    Object.fromEntries(Object.entries(employee.skillset).map(([key]) => [key, '']))
  );
  
  const [goalRatings, setGoalRatings] = useState<Record<string, number>>(
    Object.fromEntries(employee.personalCareerGoals.map(goal => [goal, 0]))
  );
  
  const [goalComments, setGoalComments] = useState<Record<string, string>>(
    Object.fromEntries(employee.personalCareerGoals.map(goal => [goal, '']))
  );
  
  const handleCompetencyChange = (competency: string, value: number) => {
    setCompetencies(prev => ({...prev, [competency]: value}));
  };
  
  const handleSkillsetLevelChange = (skill: string, level: number) => {
    setSkillsetLevels(prev => ({...prev, [skill]: level}));
  };
  
  const handleSkillsetRationaleChange = (skill: string, rationale: string) => {
    setSkillsetRationales(prev => ({...prev, [skill]: rationale}));
  };
  
  const handleGoalRatingChange = (goal: string, rating: number) => {
    setGoalRatings(prev => ({...prev, [goal]: rating}));
  };
  
  const handleGoalCommentChange = (goal: string, comment: string) => {
    setGoalComments(prev => ({...prev, [goal]: comment}));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would save the evaluation to the database
    alert('Self-evaluation submitted successfully!');
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="bg-indigo-600 px-6 py-4 rounded-t-lg">
        <h1 className="text-2xl font-bold text-white">Monthly Self-Evaluation</h1>
        <p className="text-indigo-100">Period: June 1-30, 2025</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Competency Self-Assessment</h2>
          <p className="text-gray-600 mb-4">Rate yourself on a scale of 1-10 for each competency based on your performance this month.</p>
          
          <div className="space-y-6">
            {Object.entries(employee.competencies).map(([competency, currentRating]) => (
              <div key={competency} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <label className="font-medium text-gray-700">{competency}</label>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Current rating: {currentRating}/10</span>
                    <span className="text-sm font-medium">{competencies[competency]}/10</span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={competencies[competency]} 
                  onChange={(e) => handleCompetencyChange(competency, parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">1</span>
                  <span className="text-xs text-gray-500">10</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Skillset Self-Assessment</h2>
          <p className="text-gray-600 mb-4">Assess your skill level from 1-5 stars. Provide rationale if you believe your skill level has changed.</p>
          
          <div className="space-y-6">
            {Object.entries(employee.skillset).map(([skill, level]) => (
              <div key={skill} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <label className="font-medium text-gray-700">{skill}</label>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-4">Current level: 
                      <span className="flex text-yellow-500 inline-block ml-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={i < level ? "fill-current" : "text-gray-300"}
                          />
                        ))}
                      </span>
                    </span>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={20} 
                          className={`cursor-pointer ${i < skillsetLevels[skill] ? "fill-current" : "text-gray-300"}`}
                          onClick={() => handleSkillsetLevelChange(skill, i + 1)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rationale for change (optional)
                  </label>
                  <textarea 
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Explain why you believe your skill level has changed..."
                    value={skillsetRationales[skill]}
                    onChange={(e) => handleSkillsetRationaleChange(skill, e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Personal Career Goals Progress</h2>
          <p className="text-gray-600 mb-4">Rate your progress towards each career goal on a scale of 1-10.</p>
          
          <div className="space-y-6">
            {employee.personalCareerGoals.map((goal) => (
              <div key={goal} className="bg-gray-50 p-4 rounded-lg">
                <div className="mb-2">
                  <label className="font-medium text-gray-700">{goal}</label>
                  <div className="flex items-center mt-2">
                    <span className="text-sm font-medium mr-2">{goalRatings[goal]}/10</span>
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      value={goalRatings[goal]} 
                      onChange={(e) => handleGoalRatingChange(goal, parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">Not started</span>
                    <span className="text-xs text-gray-500">Completed</span>
                  </div>
                </div>
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Comments or next steps
                  </label>
                  <textarea 
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Describe your progress and plan for next month..."
                    value={goalComments[goal]}
                    onChange={(e) => handleGoalCommentChange(goal, e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-end mt-6">
          <button
            type="button"
            className="mr-4 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Save Draft
          </button>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors flex items-center"
          >
            <Save size={18} className="mr-2" />
            Submit Evaluation
          </button>
        </div>
      </form>
    </div>
  );
}
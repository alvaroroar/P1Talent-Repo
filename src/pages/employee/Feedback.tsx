import { useState } from 'react';
import { MessageSquare, Award, Heart, ThumbsUp, SmilePlus, Sparkles, Send } from 'lucide-react';
import { feedbacks, recognitions } from '../../data/mockData';

export default function EmployeeFeedback() {
  const [activeTab, setActiveTab] = useState('feedback');
  const [comment, setComment] = useState('');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  
  const toggleComments = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
    setComment('');
  };
  
  const handleReaction = (id: string, type: string) => {
    // In a real application, this would update the reaction in the database
    console.log(`Added ${type} reaction to item ${id}`);
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="flex border-b">
          <button
            className={`flex-1 py-3 px-4 text-center font-medium ${
              activeTab === 'feedback' 
                ? 'text-indigo-600 border-b-2 border-indigo-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('feedback')}
          >
            <MessageSquare size={18} className="inline-block mr-2" />
            Performance Feedback
          </button>
          <button
            className={`flex-1 py-3 px-4 text-center font-medium ${
              activeTab === 'recognition' 
                ? 'text-indigo-600 border-b-2 border-indigo-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('recognition')}
          >
            <Award size={18} className="inline-block mr-2" />
            Recognition Feed
          </button>
        </div>
        
        <div className="p-6">
          {activeTab === 'feedback' && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold mb-4">Performance Acknowledgements</h2>
              
              {feedbacks.map(feedback => (
                <div 
                  key={feedback.id} 
                  className={`p-4 rounded-lg border-l-4 ${
                    feedback.type === 'positive' ? 'bg-green-50 border-green-500' :
                    feedback.type === 'improvement' ? 'bg-yellow-50 border-yellow-500' :
                    feedback.type === 'observation' ? 'bg-blue-50 border-blue-500' :
                    feedback.type === 'reward' ? 'bg-purple-50 border-purple-500' :
                    'bg-indigo-50 border-indigo-500'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-md font-medium">{feedback.message}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      feedback.type === 'positive' ? 'bg-green-100 text-green-800' :
                      feedback.type === 'improvement' ? 'bg-yellow-100 text-yellow-800' :
                      feedback.type === 'observation' ? 'bg-blue-100 text-blue-800' :
                      feedback.type === 'reward' ? 'bg-purple-100 text-purple-800' :
                      'bg-indigo-100 text-indigo-800'
                    }`}>
                      {feedback.type.charAt(0).toUpperCase() + feedback.type.slice(1)}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-2">From: Sarah Johnson (Reporting Officer)</p>
                  <p className="text-xs text-gray-500 mt-1">{feedback.createdAt.toLocaleDateString()}</p>
                  
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button 
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center transition-colors"
                      onClick={() => handleReaction(feedback.id, 'like')}
                    >
                      <ThumbsUp size={14} className="mr-1" />
                      <span>{feedback.reactions.like.length}</span>
                    </button>
                    <button 
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center transition-colors"
                      onClick={() => handleReaction(feedback.id, 'heart')}
                    >
                      <Heart size={14} className="mr-1" />
                      <span>{feedback.reactions.heart.length}</span>
                    </button>
                    <button 
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center transition-colors"
                      onClick={() => handleReaction(feedback.id, 'happy')}
                    >
                      <SmilePlus size={14} className="mr-1" />
                      <span>{feedback.reactions.happy.length}</span>
                    </button>
                  </div>
                  
                  <div className="mt-3">
                    <button 
                      className="text-indigo-600 text-sm hover:text-indigo-800 transition-colors"
                      onClick={() => toggleComments(feedback.id)}
                    >
                      {feedback.comments.length > 0 
                        ? `${expandedItem === feedback.id ? 'Hide' : 'Show'} ${feedback.comments.length} comment${feedback.comments.length !== 1 ? 's' : ''}` 
                        : 'Add comment'}
                    </button>
                    
                    {expandedItem === feedback.id && (
                      <div className="mt-3">
                        {feedback.comments.map(comment => (
                          <div key={comment.id} className="bg-white p-3 rounded border border-gray-200 mb-2">
                            <p className="text-sm">{comment.text}</p>
                            <p className="text-xs text-gray-500 mt-1">You - {comment.createdAt.toLocaleTimeString()}</p>
                          </div>
                        ))}
                        
                        <div className="mt-2 flex">
                          <input
                            type="text"
                            className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Write a comment..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          />
                          <button 
                            className="bg-indigo-600 text-white px-3 py-2 rounded-r-md hover:bg-indigo-700 transition-colors"
                            disabled={!comment.trim()}
                          >
                            <Send size={16} />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'recognition' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold mb-4">Company Recognition Wall</h2>
              
              {recognitions.map(recognition => (
                <div key={recognition.id} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Award size={20} className="text-indigo-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">HR Team recognized {recognition.employeeId === 'emp1' ? 'you' : 'Michael Johnson'}</p>
                      <p className="text-xs text-gray-500">{recognition.createdAt.toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <p className="text-gray-800">{recognition.message}</p>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button 
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center transition-colors"
                      onClick={() => handleReaction(recognition.id, 'like')}
                    >
                      <ThumbsUp size={14} className="mr-1" />
                      <span>{recognition.reactions.like.length}</span>
                    </button>
                    <button 
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center transition-colors"
                      onClick={() => handleReaction(recognition.id, 'heart')}
                    >
                      <Heart size={14} className="mr-1" />
                      <span>{recognition.reactions.heart.length}</span>
                    </button>
                    <button 
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full flex items-center transition-colors"
                      onClick={() => handleReaction(recognition.id, 'congratulations')}
                    >
                      <Sparkles size={14} className="mr-1" />
                      <span>{recognition.reactions.congratulations.length}</span>
                    </button>
                  </div>
                  
                  <div className="mt-3">
                    <button 
                      className="text-indigo-600 text-sm hover:text-indigo-800 transition-colors"
                      onClick={() => toggleComments(recognition.id)}
                    >
                      {recognition.comments.length > 0 
                        ? `${expandedItem === recognition.id ? 'Hide' : 'Show'} ${recognition.comments.length} comment${recognition.comments.length !== 1 ? 's' : ''}` 
                        : 'Add comment'}
                    </button>
                    
                    {expandedItem === recognition.id && (
                      <div className="mt-3">
                        {recognition.comments.map(comment => (
                          <div key={comment.id} className="bg-gray-50 p-3 rounded border border-gray-200 mb-2">
                            <p className="text-sm">{comment.text}</p>
                            <p className="text-xs text-gray-500 mt-1">
                              {comment.employeeId === 'emp1' ? 'You' : 'John Doe'} - {comment.createdAt.toLocaleTimeString()}
                            </p>
                          </div>
                        ))}
                        
                        <div className="mt-2 flex">
                          <input
                            type="text"
                            className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Write a comment..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          />
                          <button 
                            className="bg-indigo-600 text-white px-3 py-2 rounded-r-md hover:bg-indigo-700 transition-colors"
                            disabled={!comment.trim()}
                          >
                            <Send size={16} />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
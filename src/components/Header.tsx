import { useNavigate } from 'react-router-dom';
import { Users } from 'lucide-react';
import { useUser } from '../context/UserContext';

export default function Header() {
  const { role, setRole } = useUser();
  const navigate = useNavigate();

  const handleRoleChange = (newRole: 'admin' | 'ro' | 'employee') => {
    setRole(newRole);
    
    // Navigate to the appropriate route based on the role
    if (newRole === 'admin') navigate('/admin');
    else if (newRole === 'ro') navigate('/ro');
    else navigate('/employee');
  };

  return (
    <header className="bg-indigo-600 text-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Users size={24} className="text-white" />
          <h1 className="text-xl font-bold">P1 - People First</h1>
        </div>
        
        <div className="flex space-x-2">
          <button 
            className={`px-3 py-1 rounded transition-colors ${role === 'admin' ? 'bg-white text-indigo-600' : 'bg-indigo-700 hover:bg-indigo-800'}`}
            onClick={() => handleRoleChange('admin')}
          >
            Admin
          </button>
          <button 
            className={`px-3 py-1 rounded transition-colors ${role === 'ro' ? 'bg-white text-indigo-600' : 'bg-indigo-700 hover:bg-indigo-800'}`}
            onClick={() => handleRoleChange('ro')}
          >
            Reporting Officer
          </button>
          <button 
            className={`px-3 py-1 rounded transition-colors ${role === 'employee' ? 'bg-white text-indigo-600' : 'bg-indigo-700 hover:bg-indigo-800'}`}
            onClick={() => handleRoleChange('employee')}
          >
            Employee
          </button>
        </div>
      </div>
    </header>
  );
}
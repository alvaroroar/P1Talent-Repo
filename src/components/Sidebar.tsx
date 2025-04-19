import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Star, MessageSquare, Award, FileText, BarChart } from 'lucide-react';
import { useUser } from '../context/UserContext';

export default function Sidebar() {
  const { role } = useUser();
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };
  
  const linkClass = (path: string) => {
    return `block px-4 py-2 text-sm rounded-md transition-colors ${
      isActive(path) 
        ? 'bg-indigo-50 text-indigo-700 font-medium' 
        : 'text-gray-700 hover:bg-gray-100'
    } flex items-center`;
  };
  
  return (
    <aside className="w-64 bg-white shadow-md h-[calc(100vh-64px)] overflow-y-auto sticky top-16">
      <div className="py-4">
        <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {role === 'admin' ? 'Admin View' : role === 'ro' ? 'Reporting Officer View' : 'Employee View'}
        </div>
        
        {role === 'admin' && (
          <nav className="mt-2 px-2 space-y-1">
            <Link to="/admin" className={linkClass('/admin')}>
              <Home size={18} className="mr-2 flex-shrink-0" />
              Dashboard
            </Link>
            <Link to="/admin" className={linkClass('/admin/employees')}>
              <Users size={18} className="mr-2 flex-shrink-0" />
              Employees
            </Link>
            <Link to="/admin" className={linkClass('/admin/performance')}>
              <BarChart size={18} className="mr-2 flex-shrink-0" />
              Performance
            </Link>
            <Link to="/admin" className={linkClass('/admin/recognition')}>
              <Award size={18} className="mr-2 flex-shrink-0" />
              Recognition
            </Link>
            <Link to="/admin" className={linkClass('/admin/reports')}>
              <FileText size={18} className="mr-2 flex-shrink-0" />
              Reports
            </Link>
          </nav>
        )}
        
        {role === 'ro' && (
          <nav className="mt-2 px-2 space-y-1">
            <Link to="/ro" className={linkClass('/ro')}>
              <Home size={18} className="mr-2 flex-shrink-0" />
              Dashboard
            </Link>
            <Link to="/ro" className={linkClass('/ro/team')}>
              <Users size={18} className="mr-2 flex-shrink-0" />
              My Team
            </Link>
            <Link to="/ro" className={linkClass('/ro/appraisals')}>
              <Star size={18} className="mr-2 flex-shrink-0" />
              Appraisals
            </Link>
            <Link to="/ro" className={linkClass('/ro/feedback')}>
              <MessageSquare size={18} className="mr-2 flex-shrink-0" />
              Feedback
            </Link>
            <Link to="/ro" className={linkClass('/ro/recognition')}>
              <Award size={18} className="mr-2 flex-shrink-0" />
              Recognition
            </Link>
          </nav>
        )}
        
        {role === 'employee' && (
          <nav className="mt-2 px-2 space-y-1">
            <Link to="/employee" className={linkClass('/employee')}>
              <Home size={18} className="mr-2 flex-shrink-0" />
              Dashboard
            </Link>
            <Link to="/employee/profile" className={linkClass('/employee/profile')}>
              <Users size={18} className="mr-2 flex-shrink-0" />
              My Profile
            </Link>
            <Link to="/employee/evaluation" className={linkClass('/employee/evaluation')}>
              <Star size={18} className="mr-2 flex-shrink-0" />
              Self-Evaluation
            </Link>
            <Link to="/employee/feedback" className={linkClass('/employee/feedback')}>
              <MessageSquare size={18} className="mr-2 flex-shrink-0" />
              Feedback
            </Link>
            <Link to="/employee" className={linkClass('/employee/recognition')}>
              <Award size={18} className="mr-2 flex-shrink-0" />
              Recognition
            </Link>
          </nav>
        )}
      </div>
    </aside>
  );
}
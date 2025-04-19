import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminEmployeeDetail from './pages/admin/EmployeeDetail';
import RODashboard from './pages/ro/Dashboard';
import ROEmployeeDetail from './pages/ro/EmployeeDetail';
import EmployeeDashboard from './pages/employee/Dashboard';
import EmployeeProfile from './pages/employee/Profile';
import EmployeeSelfEvaluation from './pages/employee/SelfEvaluation';
import EmployeeFeedback from './pages/employee/Feedback';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Admin routes */}
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/employee/:id" element={<AdminEmployeeDetail />} />
            
            {/* Reporting Officer routes */}
            <Route path="ro" element={<RODashboard />} />
            <Route path="ro/employee/:id" element={<ROEmployeeDetail />} />
            
            {/* Employee routes */}
            <Route path="employee" element={<EmployeeDashboard />} />
            <Route path="employee/profile" element={<EmployeeProfile />} />
            <Route path="employee/evaluation" element={<EmployeeSelfEvaluation />} />
            <Route path="employee/feedback" element={<EmployeeFeedback />} />
            
            {/* Default route */}
            <Route index element={<Navigate to="/admin" replace />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
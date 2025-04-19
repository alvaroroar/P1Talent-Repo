export type EmploymentType = 'full-time' | 'part-time' | 'intern';
export type EmployeeStatus = 'Onboarding' | 'Active' | 'Offboarding';
export type FeedbackType = 'positive' | 'improvement' | 'observation' | 'reward' | 'progress';
export type RecognitionType = 'milestone' | 'achievement';
export type TimeUnit = 'days' | 'weeks' | 'months' | 'years';
export type Department = 'Sales' | 'Operations' | 'Marketing' | 'Engineering' | 'HR' | 'Finance';
export type GrievanceStatus = 'Pending' | 'In Review' | 'Resolved' | 'Rejected';
export type GrievanceType = 'Work Environment' | 'Compensation' | 'Management' | 'Discrimination' | 'Other';

export interface Employee {
  id: string;
  name: string;
  age: number;
  address: string;
  email: string;
  phone: string;
  employmentType: EmploymentType;
  department: Department;
  role: string;
  jobDescription: string;
  contract: {
    file: string;
    remainingTime: {
      value: number;
      unit: TimeUnit;
    };
  };
  salary: number;
  status: EmployeeStatus;
  
  // Performance metrics
  competencies: Record<string, number>;
  skillset: Record<string, number>;
  personalQualities: string[];
  kra: Record<string, number>;
  kpi: Record<string, { target: number; current: number; description: string }>;
  outputs: Record<string, boolean>;
  personalCareerGoals: string[];
  
  // Reporting structure
  reportingOfficer?: string;
}

export interface Feedback {
  id: string;
  employeeId: string;
  createdBy: string;
  createdAt: Date;
  message: string;
  type: FeedbackType;
  reactions: {
    like: string[];
    heart: string[];
    happy: string[];
    care: string[];
    congratulations: string[];
  };
  comments: Array<{
    id: string;
    employeeId: string;
    text: string;
    createdAt: Date;
  }>;
}

export interface Recognition {
  id: string;
  employeeId: string;
  createdBy: string;
  createdAt: Date;
  message: string;
  type: RecognitionType;
  reactions: {
    like: string[];
    heart: string[];
    happy: string[];
    care: string[];
    congratulations: string[];
  };
  comments: Array<{
    id: string;
    employeeId: string;
    text: string;
    createdAt: Date;
  }>;
}

export interface SelfEvaluation {
  id: string;
  employeeId: string;
  createdAt: Date;
  competencies: Record<string, number>;
  skillset: Record<string, { level: number; rationale?: string }>;
  personalCareerGoals: Record<string, { rating: number; comments?: string }>;
}

export interface Appraisal {
  id: string;
  employeeId: string;
  createdBy: string;
  createdAt: Date;
  skillset: Record<string, { level: number; comments?: string }>;
  competencies: Record<string, number>;
  personalCareerGoals: Record<string, { rating: number; comments?: string }>;
}

export interface Grievance {
  id: string;
  employeeId: string;
  type: GrievanceType;
  subject: string;
  description: string;
  createdAt: Date;
  status: GrievanceStatus;
  assignedTo: string;
  responses: Array<{
    id: string;
    responderId: string;
    message: string;
    createdAt: Date;
  }>;
  isPrivate: boolean;
}
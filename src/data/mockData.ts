import { 
  Employee, 
  Feedback, 
  Recognition, 
  SelfEvaluation, 
  Appraisal,
  Grievance 
} from '../types';

export const employees: Employee[] = [
  {
    id: "emp1",
    name: "John Doe",
    age: 35,
    address: "123 Main St, New York, NY 10001",
    email: "john.doe@company.com",
    phone: "(555) 123-4567",
    employmentType: "full-time",
    department: "Sales",
    role: "Senior Project Manager",
    jobDescription: "Responsible for managing complex projects from initiation to completion.",
    contract: {
      file: "john_doe_contract.pdf",
      remainingTime: {
        value: 18,
        unit: "months"
      }
    },
    salary: 85000,
    status: "Active",
    
    // Performance metrics
    competencies: {
      "Decision Making": 8,
      "Leadership": 7,
      "Communication": 9,
      "Teamwork": 8
    },
    skillset: {
      "Budgeting": 4,
      "Risk Management": 3,
      "Project Management": 5,
      "Technical Knowledge": 3
    },
    personalQualities: ["Detail-oriented", "Adaptable", "Proactive"],
    kra: {
      "Sales": 70,
      "Operations": 30
    },
    kpi: {
      "Sales Conversion Rate": { 
        target: 30, 
        current: 25,
        description: "Achieve at least 30% conversion rate on sales leads"
      },
      "Client Satisfaction Score": { 
        target: 90, 
        current: 85,
        description: "Maintain a client satisfaction score of 90% or higher"
      },
      "Project Delivery On-Time": { 
        target: 95, 
        current: 90,
        description: "Deliver 95% of projects on or before deadline"
      }
    },
    outputs: {
      "Quarterly Sales Report": true,
      "Client Proposal for ABC Corp": true,
      "Team Performance Review": false,
      "Risk Assessment for Project X": false
    },
    personalCareerGoals: [
      "Become a program manager within 2 years",
      "Improve technical knowledge in industry tools",
      "Develop better cross-functional collaboration skills"
    ],
    
    reportingOfficer: "ro1"
  },
  // ... other employees with similar updated structure
];

export const grievances: Grievance[] = [
  {
    id: "grv1",
    employeeId: "emp1",
    type: "Work Environment",
    subject: "Concerns about office workspace",
    description: "The current office layout is not conducive to focused work...",
    createdAt: new Date("2025-06-01"),
    status: "In Review",
    assignedTo: "ro1",
    responses: [
      {
        id: "resp1",
        responderId: "ro1",
        message: "Thank you for raising this concern. We are reviewing the office layout...",
        createdAt: new Date("2025-06-02")
      }
    ],
    isPrivate: true
  },
  {
    id: "grv2",
    employeeId: "emp2",
    type: "Management",
    subject: "Communication issues with team lead",
    description: "There have been several instances of miscommunication...",
    createdAt: new Date("2025-05-28"),
    status: "Pending",
    assignedTo: "admin1",
    responses: [],
    isPrivate: true
  }
];

// ... rest of the existing mock data (feedbacks, recognitions, etc.)
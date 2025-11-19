import { jsx } from "react/jsx-runtime";

const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare daily sales report",
        taskDescription: "Collect and organize today’s sales numbers.",
        taskDate: "2025-01-15",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Team meeting",
        taskDescription: "Attend the morning sync meeting.",
        taskDate: "2025-01-16",
        category: "Meeting",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Client follow-up",
        taskDescription: "Contact Client A regarding project status.",
        taskDate: "2025-01-17",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Fix UI bugs",
        taskDescription: "Resolve issues in dashboard UI components.",
        taskDate: "2025-01-18",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update documentation",
        taskDescription: "Add instructions for new API endpoints.",
        taskDate: "2025-01-19",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Code review",
        taskDescription: "Review PR #102 by team member.",
        taskDate: "2025-01-20",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Build new login page",
        taskDescription: "Implement the new login UI for mobile app.",
        taskDate: "2025-01-22",
        category: "UI/UX",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Inventory check",
        taskDescription: "Verify stock levels in warehouse.",
        taskDate: "2025-01-10",
        category: "Inventory",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Vendor call",
        taskDescription: "Speak with supplier about delivery delay.",
        taskDate: "2025-01-12",
        category: "Communication",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Create purchase order",
        taskDescription: "Generate PO for restocking low items.",
        taskDate: "2025-01-15",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Warehouse inspection",
        taskDescription: "Check storage conditions and safety.",
        taskDate: "2025-01-17",
        category: "Inspection",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Daily log update",
        taskDescription: "Submit daily warehouse activity log.",
        taskDate: "2025-01-18",
        category: "Reporting",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Design banner",
        taskDescription: "Create promotional banner for new campaign.",
        taskDate: "2025-01-14",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Logo update",
        taskDescription: "Refine the company logo for branding.",
        taskDate: "2025-01-16",
        category: "Branding",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Prepare thumbnails",
        taskDescription: "Make 5 thumbnails for marketing team.",
        taskDate: "2025-01-17",
        category: "Graphics",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Database backup",
        taskDescription: "Perform weekly backup of all databases.",
        taskDate: "2025-01-11",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Security check",
        taskDescription: "Run security audit on server.",
        taskDate: "2025-01-13",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update server packages",
        taskDescription: "Install necessary updates and patches.",
        taskDate: "2025-01-15",
        category: "Maintenance",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix API downtime",
        taskDescription: "Restore payment gateway API.",
        taskDate: "2025-01-17",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Optimize database",
        taskDescription: "Improve query performance.",
        taskDate: "2025-01-18",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];



export const setLocalStorage=()=>{
     localStorage.setItem("employees",JSON.stringify(employees));
     localStorage.setItem("admin",JSON.stringify(admin));

}

export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'));
    const admin=JSON.parse(localStorage.getItem('admin'));


    console.log(employees);
    console.log(admin);
  
}
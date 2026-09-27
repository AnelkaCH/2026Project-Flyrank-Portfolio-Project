export interface TimelineStatusItem {
  id: string;
  label: string;
  status: string;
  description: string;
  color: string;
}

// Operational: #008000
// In Progress: #b8860b
// Scheduled: #000080
export const statusTimeline: TimelineStatusItem[] = [
  {
    id: "sutd",
    label: "SUTD",
    status: "on-going",
    description: "Year 1 Student",
    color: "#b8860b",
  },
  {
    id: "accelist-internship",
    label: "Accelist Internship",
    status: "completed",
    description: "Junior Software Engineer Intern",
    color: "#008000",
  },
  {
    id: "flyrank-backend",
    label: "Flyrank AI Internship",
    status: "completed",
    description: "Backend AI Engineering Intern",
    color: "#008000",
  },
  {
    id: "sc-900-exam",
    label: "SC-900",
    status: "completed",
    description: "Fully Certified",
    color: "#008000",
  },
];

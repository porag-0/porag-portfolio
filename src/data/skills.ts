import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used across academic problem-solving, application development, and exploratory software engineering.",
    skills: [
      { name: "C", levelLabel: "Strong foundation" },
      { name: "C++", levelLabel: "Strong foundation" },
      { name: "Java", levelLabel: "Strong foundation" },
      { name: "Python", levelLabel: "Working knowledge" },
      { name: "JavaScript", levelLabel: "Working knowledge" },
      { name: "TypeScript", levelLabel: "Currently exploring" },
    ],
  },
  {
    title: "Computer Science Foundations",
    description: "Core theoretical and structural computer science principles practiced through coursework and implementations.",
    skills: [
      { name: "Object-Oriented Programming (OOP)", levelLabel: "Strong foundation" },
      { name: "Data Structures", levelLabel: "Strong foundation" },
      { name: "Algorithms", levelLabel: "Strong foundation" },
      { name: "Database Management Systems (DBMS)", levelLabel: "Working knowledge" },
      { name: "Computer Networks", levelLabel: "Working knowledge" },
      { name: "Software Engineering", levelLabel: "Working knowledge" },
      { name: "System Analysis and Design", levelLabel: "Working knowledge" },
    ],
  },
  {
    title: "Frontend Development",
    description: "Building responsive, modern, component-driven user interfaces and web layouts.",
    skills: [
      { name: "HTML5", levelLabel: "Strong foundation" },
      { name: "CSS3", levelLabel: "Strong foundation" },
      { name: "JavaScript (ES6+)", levelLabel: "Working knowledge" },
      { name: "React", levelLabel: "Working knowledge" },
      { name: "TypeScript", levelLabel: "Currently exploring" },
      { name: "Tailwind CSS", levelLabel: "Working knowledge" },
      { name: "Vite", levelLabel: "Working knowledge" },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Server-side logic, routing architectures, and data communications.",
    skills: [
      { name: "Python", levelLabel: "Working knowledge" },
      { name: "FastAPI", levelLabel: "Currently exploring" },
      { name: "Node.js", levelLabel: "Currently exploring" },
      { name: "Express", levelLabel: "Currently exploring" },
      { name: "REST API Concepts", levelLabel: "Working knowledge" },
    ],
  },
  {
    title: "Databases",
    description: "Relational data structuring, queries, and schema modeling.",
    skills: [
      { name: "MySQL", levelLabel: "Working knowledge" },
      { name: "SQL", levelLabel: "Working knowledge" },
      { name: "Database Design Concepts", levelLabel: "Working knowledge" },
    ],
  },
  {
    title: "Tools & Development Environments",
    description: "Daily development tooling, version control workflows, and network simulation utilities.",
    skills: [
      { name: "Git", levelLabel: "Strong foundation" },
      { name: "GitHub", levelLabel: "Strong foundation" },
      { name: "Visual Studio Code", levelLabel: "Strong foundation" },
      { name: "IntelliJ IDEA", levelLabel: "Working knowledge" },
      { name: "Postman", levelLabel: "Working knowledge" },
      { name: "Cisco Packet Tracer", levelLabel: "Working knowledge" },
    ],
  },
];

import { User } from '../types/user';

const mockUserData: User = {
  name: 'Arjit Acharya',
  role: 'Junior Backend Developer',
  experience: '1+ year',
  location: 'Kathmandu, Nepal',
  skills: [
    // Java & Spring Boot
    'Java',
    'Spring Boot',
    'Spring Security',
    'Spring Data JPA',
    'Object-Oriented Programming',
    'Collections Framework',
    // REST & Web Services
    'REST APIs',
    'RESTful Web Services',
    'HTTP/HTTPS',
    // Authentication & Security
    'JWT',
    'OAuth2',
    'Authentication',
    'Authorization',
    // API Documentation
    'Swagger',
    'API Documentation',
    // Database
    'MySQL',
    'Database Design',
    'SQL Queries',
    'JDBC',
    // Caching & Performance
    'Redis',
    'Caching',
    // Frontend
    'Angular',
    'TypeScript',
    'Angular Components',
    'RxJS',
    'Angular Forms',
    'Angular Services',
    'HTML5',
    'CSS3',
    // DevOps
    'Docker',
    'Containerization',
    'Docker Compose',
  ],
  highlights: [
    'Built scalable backend services with Spring Boot and microservices architecture',
    'Implemented secure JWT and OAuth2 authentication mechanisms',
    'Developed fully documented RESTful APIs with Swagger/OpenAPI',
    'Integrated Redis caching for performance optimization and reduced database load',
    'Containerized applications using Docker for deployment consistency',
    'Database design and MySQL optimization for production environments',
    'Completed comprehensive training at Cosmotech covering Java and Spring ecosystem',
    'Strong foundation in Object-Oriented Programming and design patterns',
    'Experienced with Angular frontend framework and TypeScript',
    'JDBC and Spring Data JPA expertise for data persistence',
  ],
 experiences: [
  {
    title: "Backend Development Intern",
    organization: "Cosmotech",
    period: "3 Months",
    description:
      "Completed a three-month backend development internship, gaining hands-on experience with Java, object-oriented programming, Spring Boot, RESTful APIs, and database integration. Strengthened backend development fundamentals through practical tasks and guidance from senior developers.",
    skills: ["Java", "Spring Boot", "REST APIs", "MySQL", "Spring Data JPA", "Git", "Maven"],
  },
   {
  title: "Junior Backend Developer",
  organization: "Professional Experience",
  period: "1 Year",
  description:
    "Developed and maintained backend applications using Java and Spring Boot, building RESTful APIs, implementing authentication and authorization, and integrating relational databases. Contributed to production applications, including a Futsal Booking System with tournament management and a Student Management System with search, filtering, and pagination. Worked on database optimization, API documentation, application security, and deployment workflows while following clean code principles and maintainable software design practices.",
  skills: [
    "Java",
    "Spring Boot",
    "REST APIs",
    "Spring Security",
    "JWT",
    "MySQL",
    "Spring Data JPA",
    "Hibernate",
    "Swagger/OpenAPI",
    "JDBC",
    "Database Design",
    "Performance Optimization",
    "Docker",
    "Git",
    "Microservices",
    "Redis",
    "Angular",
    "TypeScript",
    "SOLID Principles",
    "Design Patterns",
    "Agile Development",
  ],
},
  ],
  projects: [
  {
  title: "Multi-Module Futsal Booking & Management Platform",
  description:
    "Designed and developed a comprehensive futsal booking and management platform comprising three integrated modules: an Admin Panel, a Vendor Management Website, and a Customer Mobile App. Developed backend services using Java and Spring Boot, implementing RESTful APIs, business logic, and database operations using Spring Data JPA, Hibernate, and MySQL. Implemented user authentication and authorization using Spring Security and JWT, with API documentation through Swagger/OpenAPI. Developed futsal reservation workflows, vendor and facility management, tournament management, and booking-related operations. Integrated eSewa payment processing into the mobile application to support online transactions. Worked on database design, request validation, exception handling, and integration between frontend applications and backend services. Used Git for version control and Maven for dependency management, following clean code principles and maintainable application design.",
 technologies: [
  "Java",
  "Spring Boot",
  "Spring Security",
  "JWT",
  "REST APIs",
  "Spring Data JPA",
  "Hibernate",
  "MySQL",
  "Redis",
  "Docker",
  "Spring MVC",
  "JDBC",
  "Swagger/OpenAPI",
  "eSewa Payment Integration",
  "React",
  "TypeScript",
  "Git",
  "Maven",
],
},
{
  title: "Student Management System",
  description:
    "Developed a student management system using Java and Spring Boot to manage student records through RESTful APIs. Implemented CRUD operations, pagination, filtering, and search functionality using Spring Data JPA, Hibernate, and MySQL. Applied object-oriented programming principles, database relationships, input validation, and exception handling to build maintainable and reliable backend services.",
  technologies: [
    "Java",
    "Spring Boot",
    "Spring Data JPA",
    "Hibernate",
    "MySQL",
    "REST APIs",
    "Maven",
    "Git",
  ],
},
{
  title: "Real-Time Chat Application",
  description:
    "Developed a real-time chat application supporting instant messaging, user authentication, and group conversations. Implemented backend APIs for user management and chat-related operations, using WebSocket technology for real-time message exchange. Focused on reliable communication, structured backend services, and maintainable code while strengthening practical skills in Java-based application development.",
  technologies: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "JWT",
    "REST APIs",
    "MySQL",
    "WebSocket",
    "Maven",
    "Git",
  ],
},
  
  ],
  contact: {
    email: 'rajuacharya260@email.com',
    phone: '9821974266',
    linkedin: 'linkedin.com/in/arjitacharya',
  },
};

export const fetchUserProfile = async (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUserData);
    }, 1000);
  });
};

export const updateUserProfile = async (user: User): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(user);
    }, 1000);
  });
};

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
      title: 'Internship - Backend Development',
      organization: 'Cosmotech',
      period: '3 Months',
      description: 'Completed backend development internship. Learned Java basics, Spring Boot fundamentals, REST APIs, and Docker. Gained foundational knowledge in backend development under senior mentorship.',
      skills: ['Java', 'Spring Boot', 'REST APIs', 'Docker'],
    },
    {
      title: 'Junior Backend Developer',
      organization: 'Professional Role',
      period: '1 Year',
      description: 'Senior Junior Backend Developer with extensive production experience. Leading development of scalable microservices architecture, implementing enterprise-grade security with JWT/OAuth2, comprehensive API documentation using Swagger/OpenAPI standards, advanced performance optimization with Redis caching strategies, full-stack development spanning Spring Boot backend and Angular frontend, and database architecture optimization. Developed 2 major production applications: Futsal Booking System with tournament management capabilities, and Student Management System with advanced filtering and pagination. Expertise in clean code principles, SOLID design patterns, Spring ecosystem mastery, CI/CD pipeline configuration, Docker containerization, and agile development methodologies.',
      skills: ['Spring Boot', 'Microservices', 'REST APIs', 'JWT', 'OAuth2', 'MySQL', 'Redis', 'Docker', 'Angular', 'TypeScript', 'Spring Data JPA', 'Swagger/OpenAPI', 'JDBC', 'Performance Optimization', 'Database Design', 'SOLID Principles', 'Design Patterns', 'Agile Development'],
    },
  ],
  projects: [
    {
      title: 'Futsal Booking Application',
      description: 'Full-stack booking platform with slot management and tournament organization. Built using Spring Boot backend and Angular frontend with JWT authentication and Redis caching.',
    },
    {
      title: 'Student Management System',
      description: 'CRUD operations with pagination, filtering, and advanced search capabilities. Showcases database design, REST APIs, and Spring Data JPA implementation.',
    },
    {
      title: 'Chat Application',
      description: 'A real-time chat application supporting instant messaging, user authentication, and group chat features. Built with modern web technologies for seamless communication.',
    },
    {
      title: 'E-Commerce Project',
      description: 'An e-commerce platform with product catalog, shopping cart, order management, and secure checkout. Developed with a focus on scalability and user experience.',
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

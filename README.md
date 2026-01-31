# React Interview Starter

This project is a realistic React application designed to showcase essential front-end skills commonly evaluated in technical interviews. It simulates a Job Tracker with a focus on clean architecture, type safety, routing, and maintainable components.

---

## Project Structure

```
src/
├─ app/
│  └─ router.tsx
├─ assets/
│  └─ react.svg
├─ features/
│  └─ jobs/
│     ├─ data.ts
│     ├─ formatters.ts
│     └─ types.ts
├─ layouts/
│  └─ MainLayout.tsx
├─ pages/
│  ├─ Home.tsx
│  ├─ Jobs.tsx
│  ├─ JobDetail.tsx
│  └─ NotFound.tsx
├─ App.tsx
├─ main.tsx
└─ index.css
```

---

## Routing Overview

- Routing is centralized in `src/app/router.tsx` for clear route management.
- The application uses nested layout routing with `MainLayout` to maintain consistent navigation and layout across pages.
- Dynamic routing is implemented for job details via the `/jobs/:id` path, enabling detailed views based on job identifiers.

---

## Data & Types

- The typed domain model for jobs is defined in `features/jobs/types.ts` to ensure type safety.
- Mock job data is provided in `features/jobs/data.ts` to simulate backend data.
- Formatting utilities for job data are located in `features/jobs/formatters.ts` to keep data presentation consistent and reusable.

---

## Styling

The project uses Tailwind CSS to apply utility-first styling, promoting rapid UI development with a consistent design system and minimal custom CSS.

---

## Features

- React with TypeScript for type-safe development
- Client-side routing with React Router and nested layouts
- Typed domain models and mock data for realistic data handling
- Utility-first styling using Tailwind CSS
- Clean, feature-based project structure for scalability and maintainability

---

## Getting Started

To run the project locally:

```bash
npm install
npm run dev
```

The application will be accessible at:

```
http://localhost:5173
```

---

## Possible Next Steps

- Implement search and filtering functionality for jobs
- Integrate real API endpoints to replace mock data
- Add global state management solutions
- Develop forms for job application or saving jobs
- Write unit and integration tests using React Testing Library

---

## Author

Aldosimone Di Rosa  
Frontend Developer (React / Angular)

- GitHub: https://github.com/Aldosimone99  
- LinkedIn: https://www.linkedin.com/in/aldosimone-di-rosa-b5a55716b/
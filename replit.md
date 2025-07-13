# Portfolio Website

## Overview

This is a personal portfolio website built as a full-stack application showcasing Saumitra Kulkarni's professional experience, projects, and publications. The application is structured as a modern web app with a React frontend and Express backend, featuring a clean, minimalist design inspired by Tania Rascia's portfolio using shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Clean, minimalist layout similar to Tania Rascia's portfolio.

## Recent Changes (January 2025)

- Reverted to original comprehensive portfolio design at user's request
- Applied dark theme with purple accent colors throughout the design
- Updated hero section with user's professional photo and dark gradient background
- Enhanced experience section with better bullet point design using bordered cards and grouped achievements
- Restored skills section with star rating system (1-5 stars) for skill proficiency levels
- Applied dark theme to all sections (navigation, experience, skills, education, projects, publications, contact)
- Updated color scheme: dark gray backgrounds with purple/pink accents
- Improved visual hierarchy with better contrast and hover effects
- Enhanced user experience with smooth animations and transitions
- Updated navigation with all sections restored (Home, Experience, Skills, Education, Projects, Publications, Contact)

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom configuration
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom theme configuration
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Development**: tsx for TypeScript execution
- **API Structure**: RESTful endpoints with minimal routes
- **Error Handling**: Centralized error middleware with proper status codes

### Database & Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (via Neon serverless)
- **Schema**: Comprehensive schema for portfolio data (users, experiences, projects, publications, skills, education)
- **Storage Strategy**: In-memory storage implementation with interface for future database integration

## Key Components

### Frontend Components
- **Navigation**: Sticky navigation with smooth scrolling and active section highlighting
- **Hero Section**: Professional introduction with contact information and resume download
- **Experience Section**: Timeline-based work experience display
- **Skills Section**: Categorized technical skills with proficiency levels
- **Education Section**: Academic background with institutions and achievements
- **Projects Section**: Portfolio projects with technologies and features
- **Publications Section**: Research papers and technical publications
- **Contact Section**: Professional contact information and co-curricular activities

### Backend Components
- **Route Handler**: Minimal API with health check and resume download endpoints
- **Storage Interface**: Abstract storage layer with in-memory implementation
- **Development Server**: Vite integration for hot module replacement
- **Static File Serving**: Resume PDF serving with proper headers

## Data Flow

1. **Static Data**: Portfolio content is statically defined in `portfolio-data.ts`
2. **API Endpoints**: Minimal backend serves health checks and static assets
3. **Frontend Rendering**: React components consume static data and render portfolio sections
4. **User Interactions**: Navigation, smooth scrolling, and file downloads handled client-side
5. **Development**: Vite provides hot reload and development server integration

## External Dependencies

### UI & Styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework with custom theming
- **Lucide Icons**: Consistent icon library throughout the application
- **class-variance-authority**: Type-safe component variants

### Development Tools
- **Vite**: Fast build tool with TypeScript support and HMR
- **ESBuild**: Fast bundling for production builds
- **PostCSS**: CSS processing for Tailwind
- **TypeScript**: Type safety across frontend and backend

### Backend Dependencies
- **Express**: Web framework for API endpoints
- **Drizzle ORM**: Type-safe database interactions
- **Neon Database**: Serverless PostgreSQL for production
- **Connect-pg-simple**: PostgreSQL session store (configured but not actively used)

## Deployment Strategy

### Development
- **Local Development**: `npm run dev` runs both frontend and backend with HMR
- **Type Checking**: `npm run check` validates TypeScript across the codebase
- **Database**: `npm run db:push` applies schema changes to the database

### Production Build
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: ESBuild bundles Express server to `dist/index.js`
- **Static Assets**: Resume PDF and other assets served from `attached_assets`

### Production Deployment
- **Server**: Node.js server serves both API and static files
- **Database**: Neon serverless PostgreSQL with connection pooling
- **Environment**: Production configuration through environment variables

The architecture prioritizes simplicity and maintainability while providing a solid foundation for future enhancements like user authentication, dynamic content management, or additional portfolio features.
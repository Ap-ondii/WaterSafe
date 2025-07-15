# WaterSafe - Water Quality Monitoring Application

## Overview

WaterSafe is a water quality monitoring application designed to serve rural communities with limited access to professional water testing services. The application provides AI-powered water quality predictions based on simple visual and sensory tests that users can perform at home, along with educational resources and local service connections.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Pattern**: RESTful API with `/api` prefix
- **Session Management**: Express sessions with PostgreSQL storage

### Development Stack
- **Language**: TypeScript throughout (frontend, backend, shared types)
- **Module System**: ES Modules
- **Development Server**: Vite with HMR for frontend, tsx for backend
- **Build Strategy**: Separate builds for client (Vite) and server (esbuild)

## Key Components

### Water Quality Prediction System
- **AI Logic**: Custom water quality assessment algorithm (`WaterQualityAI` class)
- **Input Parameters**: pH, turbidity, color, smell, water source
- **Risk Assessment**: Three-tier system (safe, caution, unsafe) with scoring
- **Recommendations**: Contextual advice based on assessment results

### Internationalization
- **Languages**: English and Swahili support
- **Context**: React Context for language state management
- **Content**: Localized strings for UI elements and educational content

### Educational Resources
- **Content Types**: Step-by-step guides, safety warnings, best practices
- **Media**: Image-supported educational cards
- **Topics**: Home testing, water treatment, storage, contamination signs

### Resource Directory
- **Services**: Water testing labs, NGOs, health centers
- **Emergency Contacts**: Health services and contamination reporting
- **Categorization**: Testing, health, NGO, emergency service types

## Data Flow

### Water Quality Assessment Flow
1. User inputs water parameters through form interface
2. Form validation using Zod schemas
3. Data processed by AI prediction engine
4. Results displayed with risk level, issues, and recommendations
5. Optional: Results stored in database for tracking

### Content Management Flow
- Static educational content served from data files
- Resource contacts managed through structured data
- Internationalization keys resolved through context system

### Database Schema
- **Users**: Basic authentication (username, password)
- **Water Tests**: Test results with timestamps and risk assessments
- **Extensible**: Ready for additional tables (locations, reports, etc.)

## External Dependencies

### Core Dependencies
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **Form Management**: React Hook Form with Zod validation
- **Database**: Drizzle ORM with Neon Database connector
- **Date Handling**: date-fns for date manipulation
- **Styling**: Tailwind CSS with custom design tokens

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Development**: tsx for TypeScript execution, Replit integrations
- **Code Quality**: ESLint, Prettier (implied by project structure)

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations in `migrations/` directory

### Environment Configuration
- **Database**: PostgreSQL connection via `DATABASE_URL`
- **Development**: Node.js development server with HMR
- **Production**: Static file serving with Express backend

### Deployment Targets
- **Primary**: Replit platform (configured for replit.com)
- **Scalable**: Standard Node.js deployment (Docker, VPS, cloud platforms)
- **Database**: Neon Database for serverless PostgreSQL

### Performance Considerations
- **Frontend**: Code splitting, lazy loading, optimized assets
- **Backend**: Efficient database queries, session management
- **Caching**: Browser caching for static assets, query caching with TanStack Query
- **Mobile**: Responsive design, touch-friendly interfaces

The application is designed to be lightweight, accessible, and deployable in environments with limited infrastructure, making it suitable for rural community deployment scenarios.
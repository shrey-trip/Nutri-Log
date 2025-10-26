# Food Logger App

## Overview
A comprehensive food logging application that allows users to track their daily food intake, monitor macronutrients (calories, protein, carbs, fats), set calorie goals, and manage custom meal sections. Built with React, TypeScript, and modern UI components.

## Features
- **Daily Food Tracking**: Log food entries with name, time, ingredients, and complete macro breakdown
- **Custom Meal Sections**: Create, edit, and delete custom meal categories (Breakfast, Lunch, Dinner, Snacks, etc.)
- **Calorie Goal Setting**: Set and track daily calorie goals with visual progress indicators
- **Date Navigation**: Browse food logs across different days with easy navigation
- **Data Import/Export**: Export all data to JSON for backup and import to restore or migrate data
- **Dark Mode Support**: Full dark mode implementation with theme toggle
- **LocalStorage Persistence**: All data persists locally in the browser

## Architecture
- **Frontend-First**: Built as a functional prototype with all logic in the frontend
- **Data Storage**: Uses localStorage for client-side persistence
- **Responsive Design**: Mobile-friendly with collapsible sidebar navigation

## Tech Stack
- React with TypeScript
- Wouter for routing
- Shadcn UI components
- Tailwind CSS
- date-fns for date handling
- Zod for schema validation

## Project Structure
```
client/src/
├── components/
│   ├── ui/              # Shadcn UI base components
│   ├── app-sidebar.tsx  # Main navigation sidebar
│   ├── daily-summary.tsx # Daily macro totals card
│   ├── date-navigator.tsx # Date selection controls
│   ├── food-entry-card.tsx # Individual food entry display
│   ├── meal-section.tsx # Meal category container
│   ├── add-food-modal.tsx # Add/edit food modal
│   ├── calorie-goal-modal.tsx # Goal setting modal
│   ├── edit-section-modal.tsx # Section edit/delete modal
│   └── theme-toggle.tsx # Dark/light mode toggle
├── pages/
│   └── home.tsx         # Main application page
└── App.tsx              # Application root
shared/
└── schema.ts            # TypeScript types and Zod schemas
```

## Data Models
- **FoodEntry**: Individual food items with macros and metadata
- **MealSection**: Custom meal categories with ordering
- **UserSettings**: User preferences including calorie goals

## Recent Changes
- Initial project setup with complete frontend implementation
- All core features implemented using localStorage
- Full dark mode support with theme persistence
- Responsive design with sidebar navigation

## User Preferences
- Uses localStorage for data persistence
- All data stored client-side
- JSON import/export for data portability

## Deployment Notes
- Designed for GitHub repository deployment
- Optimized for Vercel hosting
- Can be converted to Progressive Web App (PWA) for mobile installation

# ZipZipy LMS - Frontend

This is the frontend prototype for the ZipZipy Learning Management System, a complete LMS UI built with Next.js and Tailwind CSS.

## About The Project

This project is a high-fidelity, clickable prototype of a modern Learning Management System. It includes a public-facing website, a student dashboard, and an admin panel. All UI components are built from scratch, and the application is populated with mock data to simulate a real-world user experience.

## Built With

*   [Next.js](https://nextjs.org/)
*   [React](https://reactjs.org/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [Radix UI](https://www.radix-ui.com/) (for headless UI components)
*   [Lucide React](https://lucide.dev/) (for icons)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

*   **/src/app**: Contains all the application routes, organized using Next.js App Router.
    *   **/src/app/(auth)/**: Authentication-related pages (Login, Register).
    *   **/src/app/dashboard/**: Pages for the student dashboard.
    *   **/src/app/admin/**: Pages for the admin panel.
*   **/src/app/components**: Contains reusable React components.
    *   **/src/app/components/ui**: The core UI component library (Button, Card, etc.).
    *   **/src/app/components/landing**: Components specific to the landing page.
    *   **/src/app/components/admin**: Components specific to the admin panel.
*   **/src/lib**: Contains shared utilities and data.
    *   **data.js**: Mock data for the entire application.
    *   **utils.js**: Utility functions, such as `cn` for merging class names.
*   **/public**: Contains static assets like images and fonts.

## UI Components & Style Guide

This project includes a comprehensive, reusable component library built with Tailwind CSS and Radix UI for accessibility.

A living style guide is available at the **/style-guide** route. This page showcases all UI components and their different variants, serving as a valuable resource for developers.

## Mock Data

The application is currently populated with mock data to simulate a real backend. All mock data is located in `/src/lib/data.js`. This data can be easily replaced with API calls when connecting to a real backend.

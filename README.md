# Project Architecture and Solution Overview

This project is a **React and TypeScript application** that displays a list of houses available for sale and provides a details page for each listing. The application is organized as a two-page setup, where users can view and filter a list of properties and then click on any listing to see more detailed information.

## Solution Overview

The project leverages a modular architecture with a clear separation of concerns, allowing for scalable, reusable components and easy maintenance. The listing page displays a gallery of properties for sale, and each item links to a detailed view. The details page presents in-depth information about the selected house, structured in distinct sections for easy readability.

## Folder Structure

The folder structure follows a consistent hierarchy to support modular and reusable code components, context management, and utility functions.

## Key Technologies

- **React** for component-based architecture.
- **TypeScript** for type safety and improved development experience.
- **SASS** (with design tokens) for organized and scalable styling.
- **Context API** for global state management, enabling shared state across components.
- **Custom Hooks** for encapsulating reusable logic.

This architecture enables a clean and scalable codebase, with a focus on reusable components and separation of logic, which supports efficient data handling and user interaction throughout the app.

## Note

The provided API does not have CORS enabled, so I created an alternative API with the same data at [JSONBIN](https://jsonbin.io/) to facilitate cross-origin requests.
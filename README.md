# Full Stack Project: Quote Viewer

This full-stack project provides a convenient way to view quotes using React and Node.js (Express) technologies.

## Backend

### Project Structure

The backend project follows a modular structure to ensure maintainability and scalability. Here is an overview of the project structure:

- **Controllers**: This directory contains the controller files that handle the business logic of the application.
- **Models**: This directory contains the model files that define the data structures and interactions with the database.
- **Services**: This directory contains the service files that interact with external APIs or perform complex operations.
- **Middlewares**: This directory contains the middleware files that handle request validation, error handling, and logging.
- **Utils**: This directory contains utility functions and helper files used throughout the project.
- **Schemas**: This directory contains the schema files that define the data validation rules using a schema library like Joi.
- **Requests**: This directory contains the request files that handle HTTP requests and responses.

### Endpoints

The backend project provides the following endpoints:

- `GET /quotes/random`: Retrieves a random quote.

### Getting Started

To get started with the backend project, follow these steps:

1. Clone the repository: https://github.com/ace-js/quote-generator

2. Install dependencies: cd backend && npm install


3. Set up environment variables:
- Create a `.env` file in the root directory.
- Define the necessary environment variables in the `.env` file.

4. Start dev the server: `npm run dev`
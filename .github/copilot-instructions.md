# ThinkBoard-MERN AI Instructions

## Project Overview

ThinkBoard-MERN is a note-taking application built with the MERN stack (MongoDB, Express.js, React, Node.js). The project follows a standard MERN architecture with clear separation between frontend and backend.

## Architecture & Structure

### Backend (`/backend`)

- Express.js REST API with MongoDB integration
- Key components:
  - `src/server.js` - Main application entry point
  - `src/models/` - MongoDB schemas
  - `src/controllers/` - Request handlers
  - `src/routes/` - API route definitions
  - `src/config/` - Database and environment configuration

### Important Patterns

1. **Route Structure**

```javascript
// Example from notesRoute.js
router.get("/", getAllNotes);
router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);
```

2. **Controller Pattern**

```javascript
// Example from noteController.js
export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes Controller", error);
    res.status(500).json({ message: "Error Fetching Notes" });
  }
}
```

3. **Schema Definition**

```javascript
// Example from Notes.js
const noteSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    content: { type: String, require: true },
  },
  { timestamps: true }
);
```

## Project-Specific Conventions

1. **File Naming**

   - Controllers: `*Controller.js`
   - Routes: `*Route.js`
   - Models: `*.js` in the `models/` directory

2. **Error Handling**

   - Controllers use try-catch blocks
   - Error responses follow format: `{ message: string }`
   - HTTP status codes: 200 (success), 201 (created), 500 (server error)

3. **API Endpoints**
   - Base URL: `/api/notes`
   - RESTful conventions for CRUD operations
   - IDs passed as URL parameters (/:id)

## Development Workflow

1. **Backend Setup**

   ```bash
   cd backend
   npm install
   # Set up .env with MongoDB connection string
   npm start
   ```

2. **API Testing**
   - Test endpoints using `/backend/src/test/api.http`
   - Server runs on port 5001 by default

## Integration Points

- MongoDB connection (requires .env configuration)
- Frontend-Backend communication via REST API
- Notes as the primary data model

## Pending Implementations

- Frontend React application
- Complete CRUD operations (update/delete functionality)

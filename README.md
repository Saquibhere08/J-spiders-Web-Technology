# MERN Stack Guide

## What is MERN?

MERN is a full-stack JavaScript technology stack consisting of:

- **MongoDB** – NoSQL database
- **Express.js** – Backend web framework for Node.js
- **React.js** – Frontend JavaScript library
- **Node.js** – JavaScript runtime environment

## Architecture

```text
React Frontend
      |
      v
Express.js API
      |
      v
Node.js Server
      |
      v
MongoDB Database
```

## Prerequisites

- Node.js
- npm
- MongoDB

## Project Structure

```text
mern-app/
├── client/
│   ├── src/
│   └── public/
├── server/
│   ├── models/
│   ├── routes/
│   └── controllers/
└── package.json
```

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd mern-app
```

### 2. Install dependencies

Backend:

```bash
cd server
npm install
```

Frontend:

```bash
cd client
npm install
```

### 3. Configure environment variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4. Run the application

Backend:

```bash
npm start
```

Frontend:

```bash
npm start
```

## Example API Route

```javascript
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello from MERN!" });
});

module.exports = router;
```

## MERN Workflow

1. User interacts with React UI.
2. React sends requests to Express APIs.
3. Express handles business logic.
4. Node.js executes server-side code.
5. MongoDB stores and retrieves data.
6. Response is sent back to React.

## Advantages

- Full JavaScript stack
- Fast development
- Large community support
- Scalable architecture
- Reusable components

## Learning Resources

- React Documentation
- Node.js Documentation
- Express.js Documentation
- MongoDB Documentation

## License

MIT License

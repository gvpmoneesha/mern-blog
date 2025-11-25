# Mern Blog

A full-stack blog application built using the MERN stack (MongoDB, Express.js, React, Node.js). 
This application allows users to sign up, create posts, comment and like on posts, and manage their profile. 
It features a responsive design and secure authentication.

# Tech Stack

**Frontend:**
- **React.js**: Library for building user interfaces.
- **Vite**: Next Generation Frontend Tooling.
- **Redux Toolkit**: State management.
- **Tailwind CSS**: Utility-first CSS framework.
- **Flowbite React**: UI component library.
- **Firebase**: Used for Google Authentication and Image Storage.

**Backend:**
- **Node.js**: Runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **JWT (JSON Web Tokens)**: For secure authentication.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- A [MongoDB](https://www.mongodb.com/) database (local or Atlas)
- A [Firebase](https://firebase.google.com/) project (for Auth & Storage)

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/gvpmoneesha/mern-blog
    cd mern-blog
    ```

2.  **Install Backend Dependencies:**

    Navigate to the root directory and install dependencies:

    ```bash
    npm install
    ```

3.  **Install Frontend Dependencies:**

    Navigate to the client directory and install dependencies:

    ```bash
    cd client
    npm install
    ```

## Configuration

### Backend (.env)

Create a `.env` file in the **root** directory.

### Frontend (Firebase)

Ensure your Firebase configuration is set up in `client/src/firebase.js`. 
You might need to create a `.env` file in the `client` directory if the project uses environment variables for Firebase keys (check `client/src/firebase.js` to see how it's implemented).

## Running the Application

To run the application locally, you need to start both the backend and frontend servers.

1.  **Start the Backend Server:**

    In the root directory, run:

    ```bash
    npm run dev
    ```
    This will start the server on `http://localhost:3000`.

2.  **Start the Frontend Server:**

    Open a new terminal, navigate to the `client` directory, and run:

    ```bash
    cd client
    npm run dev
    ```
    This will start the Vite development server (usually on `http://localhost:5173`).


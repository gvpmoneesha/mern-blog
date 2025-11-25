# Frontend Documentation

The frontend of this application is built with **React**, **Vite**, and **Tailwind CSS**. It uses **Redux Toolkit** for state management and **Firebase** for authentication and storage.

## Project Structure

The `client/src` directory is organized as follows:

- **`pages/`**: Top-level page components corresponding to routes.
- **`components/`**: Reusable UI components.
- **`redux/`**: Redux slices and store configuration.
- **`assets/`**: Static assets like images.
- **`firebase.js`**: Firebase configuration and initialization.

## Key Pages

| Page Component | Route | Description |
| :--- | :--- | :--- |
| `Home.jsx` | `/` | The landing page displaying recent posts and a call to action. |
| `SignIn.jsx` | `/sign-in` | User login page. |
| `SignUp.jsx` | `/sign-up` | User registration page. |
| `Dashboard.jsx` | `/dashboard` | User dashboard. Shows profile, posts, users (admin), and comments. |
| `CreatePost.jsx` | `/create-post` | Page for admins to write new blog posts. |
| `UpdatePost.jsx` | `/update-post/:postId` | Page for admins to edit existing posts. |
| `PostPage.jsx` | `/post/:postSlug` | Displays the full content of a single blog post. |
| `Search.jsx` | `/search` | Search results page with filtering options. |
| `Projects.jsx` | `/projects` | A page to showcase projects (https://www.geeksforgeeks.org/mern/mern-stack-projects/). |
| `About.jsx` | `/about` | Information about the blog or author. |

## Key Components

### Layout & Navigation
- **`Header.jsx`**: The main navigation bar. Handles user dropdowns and dark mode toggle.
- **`Footer.jsx`**: The application footer.
- **`ThemeProvider.jsx`**: Wrapper component to manage light/dark mode themes.

### Post & Comments
- **`PostCard.jsx`**: A card component to display a summary of a blog post.
- **`CommentSection.jsx`**: Manages the list of comments on a post.
- **`Comment.jsx`**: Renders a single comment.

### Dashboard Widgets
- **`DashSidebar.jsx`**: Sidebar navigation for the dashboard.
- **`DashProfile.jsx`**: User profile settings and management.
- **`DashPosts.jsx`**: Table view of posts for management.
- **`DashUsers.jsx`**: Table view of users (Admin only).
- **`DashComments.jsx`**: Table view of comments (Admin only).
- **`DashboardComp.jsx`**: Overview/stats widget for the dashboard.

### Authentication & Security
- **`OAuth.jsx`**: Handles Google Sign-In integration.
- **`PrivateRoute.jsx`**: Protects routes that require login.
- **`OnlyAdminPrivateRoute.jsx`**: Protects routes that require admin privileges.

## 🔄 State Management (Redux)

The application uses **Redux Toolkit** to manage global state.
- **User Slice**: Manages current user data, loading state, and errors.
- **Theme Slice**: Manages the current theme (light/dark).

## Styling

- **Tailwind CSS**: Used for utility-first styling.
- **Flowbite React**: Provides pre-built UI components like Modals, Buttons, and Dropdowns that integrate with Tailwind.

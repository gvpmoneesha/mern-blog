# API Documentation

Base URL: `http://localhost:3000/api`

## Authentication

### Sign Up
Create a new user account.
- **URL**: `/auth/signup`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "username": "exampleUser",
    "email": "user@example.com",
    "password": "securePassword123"
  }
  ```

### Sign In
Log in an existing user.
- **URL**: `/auth/signin`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "securePassword123"
  }
  ```

### Google Auth
Authenticate using Google.
- **URL**: `/auth/google`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "name": "User Name",
    "email": "user@gmail.com",
    "googlePhotoUrl": "https://..."
  }
  ```

---

## User

### Sign Out
Log out the current user.
- **URL**: `/user/signout`
- **Method**: `POST`

### Update User
Update user profile information. Requires authentication.
- **URL**: `/user/update/:userId`
- **Method**: `PUT`
- **Body**: (Fields to update, e.g., username, email, password, profilePicture)

### Delete User
Delete a user account. Requires authentication.
- **URL**: `/user/delete/:userId`
- **Method**: `DELETE`

### Get Users
Retrieve a list of users (typically for admin dashboard). Requires authentication.
- **URL**: `/user/getUsers`
- **Method**: `GET`

### Get User
Retrieve public information of a specific user.
- **URL**: `/user/:userId`
- **Method**: `GET`

---

## Posts

### Create Post
Create a new blog post. Requires authentication (and likely admin privileges depending on logic).
- **URL**: `/post/create`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "title": "My New Post",
    "content": "<p>Post content...</p>",
    "category": "Tech",
    "image": "https://..."
  }
  ```

### Get Posts
Retrieve posts with optional filtering/pagination.
- **URL**: `/post/getposts`
- **Method**: `GET`
- **Query Params**: `userId`, `category`, `slug`, `searchTerm`, `startIndex`, `limit`, `order`

### Update Post
Update an existing post. Requires authentication.
- **URL**: `/post/updatepost/:postId/:userId`
- **Method**: `PUT`

### Delete Post
Delete a post. Requires authentication.
- **URL**: `/post/deletepost/:postId/:userId`
- **Method**: `DELETE`

---

## Comments

### Create Comment
Add a comment to a post. Requires authentication.
- **URL**: `/comment/create`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "content": "This is a comment.",
    "postId": "postId123",
    "userId": "userId123"
  }
  ```

### Get Post Comments
Get all comments for a specific post.
- **URL**: `/comment/getPostComments/:postId`
- **Method**: `GET`

### Like Comment
Like or unlike a comment. Requires authentication.
- **URL**: `/comment/likeComment/:commentId`
- **Method**: `PUT`

### Edit Comment
Edit an existing comment. Requires authentication.
- **URL**: `/comment/editComment/:commentId`
- **Method**: `PUT`
- **Body**:
  ```json
  {
    "content": "Updated comment content."
  }
  ```

### Delete Comment
Delete a comment. Requires authentication.
- **URL**: `/comment/deleteComment/:commentId`
- **Method**: `DELETE`

### Get All Comments
Get all comments (typically for admin dashboard). Requires authentication.
- **URL**: `/comment/getcomments`
- **Method**: `GET`

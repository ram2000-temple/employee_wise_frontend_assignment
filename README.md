# employee_wise_frontend_assignment# User Management System

A React-based User Management System that allows users to be listed, searched, edited, and deleted using an API. The project includes pagination and a modal for editing user details.

## Features
- Fetch users from an API with pagination.
- Search users by name.
- Edit user details via a modal.
- Delete users with confirmation.
- Automatically update the user list after editing or deleting a user.
- Login authentication.
- Header navigation.

## Technologies Used
- React.js
- Bootstrap (React Bootstrap)
- Axios (for API calls)

## Installation

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Steps to Install
1. Clone the repository:
   ```sh
   git clone https://github.com/ram2000-temple/employee_wise_frontend_assignment.git
   ```
2. Navigate to the project directory:
   ```sh
   cd user-management
   ```
3. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
4. Start the development server:
   ```sh
   npm start  # or yarn start
   ```

## Project Structure
```
/user-management
│── src
│   │── components
│   │   ├── UserList.js  # Main component handling user operations
│   │   ├── Login.js     # Login page component
│   │   ├── Header.js    # Header navigation component
│   │── services
│   │   ├── api.js       # Axios API configuration
│   │── App.js          # Root component
│   │── index.js        # Entry point
│── public
│── package.json
│── README.md
```

## API Endpoints (Expected)
- **GET /api/users?page={page}** - Fetch paginated users.
- **PUT /api/users/{id}** - Update user details.
- **DELETE /api/users/{id}** - Delete a user.

## Usage
- Search users using the search bar.
- Click "Edit" to modify user details.
- Click "Delete" to remove a user permanently.
- Pagination controls allow navigation between pages.
- Login to access user management features.
- Navigate using the Header component.

## Known Issues & Fixes
- **Issue:** After deleting a user, the next user from the next page doesn’t shift properly.
  - **Fix:** Implemented refetching of user data after a deletion to ensure pagination updates correctly.

## Contributing
Pull requests are welcome. Please open an issue to discuss any major changes before submitting a PR.

## GitHub Repository
[GitHub Link]https://github.com/ram2000-temple/employee_wise_frontend_assignment.git


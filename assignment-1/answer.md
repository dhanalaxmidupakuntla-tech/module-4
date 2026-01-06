Q1. Role of Frontend (FE)
Frontend (FE) is the user-facing part of a web application. It is what users see, interact with, and experience in their browser.

1. User Interface (UI)
Designs the layout, colors, fonts, buttons, and images.
Ensures the application looks clean and responsive on all devices.
Technologies used: HTML, CSS, JavaScript, React, Tailwind CSS.

2. User Interaction
Handles user actions like clicks, form submissions, scrolling, and navigation.
Validates user inputs before sending data to the backend.
Updates the UI dynamically without reloading the page.

3. Communication with Backend
Sends requests to backend APIs using HTTP (GET, POST, PUT, DELETE).
Receives data from backend and displays it to the user.
Uses tools like Fetch API or Axios.

Q2. Role of Backend (BE)
Backend (BE) is the server-side part of a web application that manages data, logic, and security.

1. Server-Side Processing
Processes requests sent from the frontend.
Executes business rules and calculations.
Generates responses for the client.

2. Database Handling
Stores, retrieves, updates, and deletes data.
Works with databases like MongoDB, MySQL, PostgreSQL.
Ensures data consistency and integrity.

3. Security and Authentication
Manages user login and authentication.
Handles authorization (who can access what).
Protects data using encryption, tokens, and secure APIs.

Q3. Business Logic
What is Business Logic?

Business Logic is the core logic of an application that defines how the system behaves according to business rules and requirements.

It decides:
What is allowed
What is restricted
How data is processed

Real-World Examples:
E-commerce Website
Apply discount only if cart value is above ₹1000.
Calculate tax and final price.
Prevent checkout if payment fails.
Banking Application
Prevent withdrawal if balance is insufficient.
Limit daily transfer amount.
Apply interest monthly.
Food Delivery App
Show restaurants only if they deliver to the user’s location.
Add delivery charges based on distance.
Disable ordering if restaurant is closed.

Q4. Client–Server Model
What is Client–Server Model?
It is an architecture where clients request services and servers provide them.

1. Client
The user’s device (browser or mobile app).
Sends requests and displays responses.
Example: Chrome browser, React frontend.

2. Server
A remote machine that processes requests.
Contains backend logic and database.
Example: Node.js server, Java backend.

3. Communication
Client sends HTTP requests (GET, POST).
Server processes request and returns a response.
Data is usually exchanged in JSON format.

Q5. Three-Tier Architecture
What is 3-Tier Architecture?
It divides a web application into three independent layers to improve scalability and maintainability.
1. Presentation Layer
User interface (Frontend).
Handles user interaction.
Example: HTML, CSS, React.

2. Application (Business) Layer
Contains business logic.
Processes client requests.
Example: Node.js, Java Spring.

3. Data Layer
Manages database operations.
Stores and retrieves data.
Example: MongoDB, MySQL.
Why it is Used
Better code organization
Easy maintenance
High scalability
Improved security

Q6. JavaScript as a Backend Language
JavaScript is widely used as a backend language because of its speed, flexibility, and ecosystem.

1. Performance
Uses non-blocking, event-driven architecture.
Handles multiple requests efficiently.
Fast execution with V8 engine.

2. Ecosystem
Large number of libraries and packages via npm.
Same language for frontend and backend.
Strong community support.

3. Popular Backend Frameworks
Node.js – Runtime environment
Express.js – Lightweight framework
NestJS – Structured and scalable framework
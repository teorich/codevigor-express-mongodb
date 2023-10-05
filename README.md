# CodeVigor Technical Interview

## Question 2.1: Explain your decisions

   1. Why did you structure your code the way you did?
      - With the current structure it is easier for me to get to know where various operations
            are placed. Instilling the concept of seperation of concerns
   2. What would you do differently in a production environment?
       - I think I won't be pushing environmental variables to the repository. I will be using the online git management service(bitbucket, github, gitlab) to store envs for differate deployment environments
       - If I had more time I could implement a more OOP methodology patterns, like defining  an interface that stupilates the various CRUD operations

## Question 2.2: Code Review

There are a few issues and improvements that could be made to this code:

1. Security: The code does not include any validation or sanitization of the user input. This could lead to security vulnerabilities such as SQL injection attacks. It is recommended to use a library like express-validator to validate and sanitize the input.

2. Error handling: The code only handles one error scenario where the user is too young. It is recommended to include error handling for other scenarios such as when the user input is missing or invalid.

3. Response format: The response format is a simple string message. It is recommended to use a more structured response format such as JSON, which includes a status code and a message.

4. Code organization: The code is written in a single function. It is recommended to break down the code into smaller functions or middleware for better organization and reusability.

5. Database connection: The code assumes that the db object is already connected to the database. It is recommended to include a check for the database connection before adding the user.

6. Asynchronous operations: The code does not use asynchronous operations, which could lead to blocking the event loop. It is recommended to use asynchronous operations when interacting with the database or other external services

## Task 3.1: Prioritization and Planning

Day 1:

- Start with fixing the critical bug in the login module as it is the most urgent task and could potentially affect the user experience.
- Allocate 4 hours for this task and test thoroughly to ensure the bug has been completely resolved.

Day 2-3:

- Move on to optimizing the database queries in an existing module as it can improve the overall performance of the application.
- Allocate 8 hours for this task and use profiling tools to identify the slow queries.
- Optimize the queries and test thoroughly to ensure there are no regressions.

Day 4:

- Develop the new feature that has been highly requested by clients.
- Allocate 8 hours for this task and start with understanding the requirements thoroughly.
- Design and develop the feature and test thoroughly to ensure it meets the client's expectations.

Day 5:

- Document the API developed in Task 1 as it is important for future maintenance and integration with other systems.
- Allocate 4 hours for this task and document the API endpoints, request/response format, authentication mechanism, etc.

Day 6:

- Review all the tasks completed so far and ensure they are working as expected.
- Allocate 4 hours for this task and test all the modules thoroughly to ensure there are no regressions.

Day 7:

- Wrap up any pending tasks or documentation work.
- Allocate 4 hours for this task and complete any pending work or documentation.

Reasoning:
The critical bug in the login module needs to be fixed first as it could potentially affect the user experience. Optimizing the database queries comes next as it can improve the overall performance of the application. Developing the new feature comes after that as it is important for client satisfaction and retention. Documenting the API comes next as it is important for future maintenance and integration with other systems. Finally, reviewing all the tasks completed so far and wrapping up any pending tasks or documentation work ensures that everything is working as expected and there are no regressions.

# Moviefy

## Milestone 1

### Project Overview

Moviefy is my ASAP project aimed at creating a website where users can leave reviews on movies and discover new movies within the same genre. The platform enables users to share their thoughts on movies, as well as explore and find movies based on their preferred genres.

### Key Features

1. **Login**: Allows users to sign in and access personalized features.

2. **Sign Up**: New users can create an account to participate in movie reviews.

3. **Posting Reviews**:

   - Users can add movie reviews with an optional image.
   - Reviews can be tagged with relevant genres to help other users find similar movies.

4. **Search Functionality**:
   - Users can search for movies by genre to discover new films that match their preferences.

### Tech Stack

- **MERN Stack**:

  - **MongoDB**: NoSQL database for storing user data, reviews, and movie information.

  - **Express**: Web framework for Node.js, used to build the backend API.

  - **React.js**: Frontend library for creating an interactive user interface.

  - **Node.js**: JavaScript runtime for building the backend of the app.

## Why This Project

As a movie enthusiast, I often face difficulties finding accurate movie reviews and discovering films that fit my specific tastes. This project aims to address these challenges by offering a platform where users can share reviews and easily find movies by genre, improving the overall movie discovery experience.

---

## Milestone 2

### Project Update 1

I’ve completed the basic setup for the **backend** including the **folder structure** and necessary **dependencies**.

### Steps Taken 1

1. Created the main project folder for the backend:

   ```bash
   mkdir Backend
   ```

2. Changed the directory to the Backend folder:

   ```bash
   cd Backend
   ```

3. Initialized the backend project:

   ```bash
   npm init -y
   ```

4. Installed the required dependencies:

   ```bash
   npm i express
   npm i mongoose
   npm i cors
   npm i nodemon
   ```

5. Created a src directory for the source code:

   ```bash
   mkdir src
   cd src
   ```

6. Added subdirectories for different backend functionalities:

   ```bash
   mkdir Config Controllers Middlewares Routes
   ```

7. Created two essential files to set up the server:

   ```bash
   touch app.js server.js
   ```

## Milestone 3

### Project Update 2

I’ve successfully set up the server endpoint and configured the .env file for environment variables. Additionally, I started the frontend using React.

### Steps Taken 2

- Created a .env file to store environment variables (e.g., database connection strings).

- Added an app.js file to handle backend server setup.

- Added an index.js file to start the backend server.

- Fixed minor bugs and improved the overall code structure.

## Milestone 4

### Project Update 3

I've have successfully deployed my project on render and have tested it

### Steps taken 3

- Logged on to Render.com and Deployed my project

- Updated the felids required by render and deployed the project

- I have attached the Deployment link, to check it out

  - ### Click [here](https://s62-moviefy.onrender.com)

## Milestone 5

### Project Update 4

I've added bruno to my project

### Steps Taken 4

- Created a new collection in bruno

- Connected my project bruno

## Milestone 6

### Project Update 5

I've added user models and schema to my project, and also added database connection

### Steps Taken 5

- Created a new file for user models and schema

- Added database connection to the user models and schema

- Added routes to add data and retrieve data

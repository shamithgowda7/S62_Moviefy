# Moviefy

## Milestone 1

### Project Overview

This is my ASAP project, where I create a website where people can leave a review on a movie, and people can find new movies of the same genre.

### Key Features

1. **Login**
2. **Sign Up**
3. **Posting Reviews**:
   - Add a review with:
     - An image (optional)
     - Tags for the genre of the movie
4. **Search Functionality**:
   - Search for movies based on genres

### Tech Stack

- **MERN**:
  - MongoDB
  - Express
  - React.js
  - Node.js

## Why This Project

As a movie enthusiast, I want to watch movies, but the problem I face is that I don’t get proper reviews and cannot easily find movies of the genre I like.

---

## Milestone 2

### Project Update 1

I finished setting up the basic **folder structure** and **dependencies** for the backend.

### Steps Taken 1

- Created new project folders:

  ```bash
  mkdir Backend
  ```

- Changed the directory:

  ```bash
  cd Backend
  ```

- Initialized the backend:

  ```bash
  npm init -y
  ```

- Installed required dependencies:

  ```bash
  npm i express
  npm i mongoose
  npm i cors
  npm i nodemon
  ```

- Created a Source folder

  ```bash
  mkdir src
  cd src
  ```

- Created additional folders inside the source directory:

  ```bash
  mkdir Config Controllers middlewares Routes
  ```

- Created two files for setting up of server:

  ```bash
  touch app.js server.js
  ```

## Milestone 3

### Project Update 2

I finished setting up the Endpoint of the server and added a `.env` file

Also set-up the Frontend using React

### Steps Taken 2

- Created an `.env` file to keep track of the Environment variables

- Added an `app.js` file to setup the server

- Added an `index.js` file to start the server

- Fixed minor bugs in the code

# Interview Scheduler

## Introduction:
The Interview Scheduler App is a React-based Single Page Application (SPA) that allows users to book, edit, and cancel interviews. The app uses the latest tools and techniques and is built using a concise API and WebSocket server to provide a real-time experience. This Read Me file is intended to provide users with an overview of the functional and behavioral requirements of the app, as well as setup instructions.

## Functional Requirements:
The app is designed to meet the following functional requirements:

- The Interview Scheduler App is a single-page application built using React.
- Data is stored using a PostgreSQL database, and the client communicates with the API server over HTTP, using the JSON format.
- Jest tests are used throughout the development of the project.
- Interviews can be booked between Monday and Friday, and a user can switch between weekdays.
- Users can book interviews in empty appointment slots by typing in a student name and selecting an interviewer from a list of available interviewers.
- Users can cancel or edit existing interviews.
- The list of days displays the number of available slots for each day, and the number of available slots is updated when an interview is booked or canceled.
- Users are shown a confirmation when they attempt to cancel an interview.
- Users are presented with an error message if an interview cannot be saved or deleted.
- Users are shown a status indicator while asynchronous operations are in progress.
- When the user presses the close button of the error, they are returned to the Form or Show view, skipping Status and Confirm.
- The app makes API requests to load and persist data, and data is not lost after a browser refresh.

## Screen Shot

Desktop View

!["Home Page"](/photo/home-screen.png)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Authors

- [Julian Paredes](https://github.com/jpared3s)
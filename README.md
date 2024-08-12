# Calorie Tracker

## Overview

The Calorie Tracker is a React-based application that allows users to track their daily caloric intake by adding meal records, filtering them by date, or by meals and viewing reports. This document provides a step-by-step guide on setting up, using, and understanding the application.

### Features

- Add new meal records with date, meal type, ingredients, and calories. ![The Adding form](/public/addRecord.png)
- Delete existing meal records.
- Filter records by date or my meal. ![filter by meal results](/public/filterbymeal.png)
- Bigger Calorie intake in one meal is highlighted ⚠ ![high calorie intake](/public/highCalorie.png)
- reorder records by meals, or by calories from biger to smaller. ![reordering the records by date](/public/orderbycalories.png)
  ![ordering by calories](/public/orderbydate.png)
- View a report of meals and total calories for a specific date in a modal window. ![show a report of a summary of calories sum and meals intake on one specific day](/public/totalReport.png)

### what is New after the React DEEP DIVE Course:

- replaceing useState Hook for all the operation done on records array with **useReducer Hook** within : recordsReducerfn
- replaceing useState Hook for all the setting of the record object itself with **useReducer Hook** within : recordsValuesReducer
- using the **Context API with state managment system by useReducer() hook** in manage the state globally
- using the **json-server API** to add, delete , filter or reorder records.
- using **json- server API** to retrieve one record details on a seperate page
- using **React Router** to navigate between pages and adding sub routes in the same page
- use **useNavigate() hook** to programmatically navigate back/ to the desired destination
- use **Link , NavLink** componenets of React Router Liberaries
- use **useParams() hook** to
- use **React.lazy()** and **Suspese componenet** to ensure JS bundeling

### Installation

#### Prerequisites

Node.js and npm installed on your machine.

#### Steps

Clone the repository:

git clone <repository_url>
cd calorie-tracker

#### Install dependencies:

npm install

#### Start the development server:

npm run dev
The app should now be running at [local server](http://localhost:5173/)

npm run server
to run the json server in order to make the app works

#### Project Structure

calorie-tracker/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── CalorieTracker.jsx
│ │ ├── FilterRecords.jsx
| | ├── LandingForm.jsx
| | ├── Loader.jsx
| | ├── SideNav.jsx
│ │ ├── ReportModal.jsx
│ ├── customHook/
│ │ ├── DataContext.jsx
│ │ ├── RecordContext.jsx
| ├── pages/
| | ├── AppLayout.jsx
| | ├── MainLayout.jsx
| | ├── LandingPage.jsx
| | ├── DemoPage.jsx
| | ├── RecordDetails.jsx
│ ├── App.jsx
│ ├── index.css
│ ├── index.js
├── package.json
└── README.md

### Components

1. App.jsx
   The main component that manages the state and renders the primary UI, including the CalorieTracker, FilterRecordsByDate, and ReportModal components.

2. Form.jsx
   Handles all tje entry input by the users and send the data to the parent App component to be passed through children as props.

3. CalorieTracker.jsx
   Handles the display of meal records and the deletion functionality.

4. FilterRecords.jsx
   Provides a date input for filtering meal records by date.

5. ReportModal.jsx
   A modal component for displaying a report of meals and total calories for a specific date.

6. sideNav.jsx
   A navigation side panel for easier back and forth between pages

7. LandingForm.jsx
   Navigate to the application via your name and email address

### APP Usage

- Adding a New Meal Record
- Fill in the date, meal type, ingredients, and calories in the form.
- Click the "Add Record" button to add the new meal record to the list or by hitting "Enter" on the keyboard.
- Deleting a Meal Record
  Click the "Delete" button next to the meal record you want to delete.
- Filtering Records by Date
- Select a date using the date input.
  Click the "Filter by Date" button to display records for the selected date.
- Viewing a Report
  Click the "Report" button to open the report modal.
  In the modal, select a date using the date input.
  Click the "Filter" button to display records and total calories for the selected date.
- clicking on the ingredient showing a detailed card of it

## credientials

this app is contribution and over-enhancement made by [Alaa Elsayed Mohammed](https://www.linkedin.com/in/alaa-elsayed-mohammed), the project idea belongs to REACT DEEP DIVE course by ENG: Ahmed Ali at [Almdrasa.](https://almdrasa.com)

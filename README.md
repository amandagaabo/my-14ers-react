# My 14ers React App

## Usage
npm install
npm run build
npm start

Run api locally.

## Description
A React app that allows users to track which Colorado 14ers they have hiked.  The user can add all
of the peaks they have hiked, view a sortable list of their peaks, edit the peak data, view the peaks
on a Google map and see a dashboard summary of their progress.

I originally created My 14ers as a frontend only jQuery app.  This app is a new version that uses a React
client and connects to a backend that was created with Node, Express and PostgreSQL.


## User
This app is intended for users who love hiking and want to keep track of the Colorado 14ers they have hiked.


## Layout
The app starts with a home page with options to login or sign up
![Alt text](/screenshots/home.png?raw=true "Home Screenshot")


The user can sign up with their email and a password or use Facebook
![Alt text](/screenshots/sign-up.png?raw=true "Sign Up Screenshot")


If a user has an account, they can login with their email and password or use Facebook
![Alt text](/screenshots/login.png?raw=true "Log In Screenshot")


After creating an account or logging in, the user can add a peak by choosing the name of the peak, selecting the date
they hiked it and adding notes if desired.
![Alt text](/screenshots/add-peak.png?raw=true "Add Peak Screenshot")


All peaks can be viewed on the peak list page.  The user can sort by date climbed, rank or peak name.
![Alt text](/screenshots/peak-list.png?raw=true "Peak List Screenshot")


By clicking edit, the user is taken to an edit peak form where they can change the date or update their notes.
![Alt text](/screenshots/edit.png?raw=true "Edit Peak Screenshot")


All peaks can be viewed as pins on a map on the peak map page.  The user can click the pins and see details
about the peak.
![Alt text](/screenshots/peak-map.png?raw=true "Peak Map Screenshot")


The dashboard page allows the user to see their overall stats - how many of the 58 fourteeners they have completed.
![Alt text](/screenshots/dashboard.png?raw=true "Dashboard Screenshot")


## Technologies, middleware and libraries used
* HTML & CSS
* JavaScript
* React & Redux
* React Bootstrap
* React Google Maps
* Node & Express
* PostgreSQL & Objection
* Passport & bcrypt
* Mocha, Chai & Enzyme
* Sinon
* Lodash
* dateFormat
* Numeral

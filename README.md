# Fetch and Display User Data Using JavaScript Fetch API

This project demonstrates how to fetch data from a public API using JavaScript's Fetch API and display it on a webpage.
It includes error handling, reload functionality, and responsive UI.

# Features

Fetches user data from a free public API

Displays:

Name

Email

Address

Loading indicator

Error handling (works even when internet is off)

Reload button to refetch data

Responsive UI using CSS Grid

# Tools & Technologies

HTML

CSS

JavaScript (Fetch API)


# API Used

Data Source:
https://jsonplaceholder.typicode.com/users

A free dummy API for testing and learning.

# How to Run

Download or clone the project.

Open the folder in VS Code.

Open index.html in your browser (double-click or use Live Server).

You will see user data loaded automatically.

Click Reload Data to fetch again.

VS Code (Recommended)

Chrome Browser

# Code Explanation
✔ Fetching Data
fetch(apiURL)
  .then(response => response.json())
  .then(data => { /* display data */ })
  .catch(error => { /* handle errors */ });

✔ Displaying Data

Uses DOM elements created dynamically.

✔ Error Handling

Shows a message when:

Internet is disconnected

API fails

URL is incorrect


# Contributions

Feel free to fork this repository and improve it!

# License

This project is free for learning and personal use.

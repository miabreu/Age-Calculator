# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built with](#built-with)
  - [Takeaways](#takeaways)


## Overview

### The Challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

<img width="1256" alt="Screen Shot 2023-04-12 at 8 06 26 PM" src="https://user-images.githubusercontent.com/42332056/231612663-3426f03a-e1c2-4f17-ba2a-d5511ec165d4.png">

Above is a screenshot of a web application interface for an age calculator. The interface consists of a simple form with two input fields: one for the user's birthdate and another for the current date. There is also a "Calculate" button to initiate the age calculation.

### Links

- Solution URL: [Github](https://github.com/miabreu/Age-Calculator/blob/main/README.md)
- Live Site URL: [Site](https://symphonious-sable-9e51b7.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Tailwind CSS
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

### Takeaways

While working on this change I was able to practice:

1. How to retrieve and manipulate user input with JavaScript
2. How to calculate a user's age based on their birthdate and the current date using JavaScript's Date object
3. How to display the calculated age on the webpage using JavaScript

One of the coolest code snippets from the project is the following JavaScript code that calculates the user's age based on their birthdate and the current date:

```
function calculateAge() {
  const birthdate = new Date(document.getElementById("birthdate").value);
  const currentDate = new Date(document.getElementById("currentdate").value);

  const ageInMilliseconds = currentDate - birthdate;
  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const age = Math.floor(ageInMilliseconds / millisecondsPerYear);

  document.getElementById("result").textContent = `Your age is ${age} years old.`;
}
```

This code retrieves the values of the birthdate and current date input fields, converts them to JavaScript Date objects, and calculates the difference between them in milliseconds. It then calculates the number of years represented by that difference and displays the result in a message on the webpage. The code also takes into account the leap year by calculating an average of 365.25 days per year.

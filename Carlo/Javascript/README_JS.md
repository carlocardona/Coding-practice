August 29, 2021

Project 1

# 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

The following image demonstrates the application functionality:

![password generator demo](./Assets/03-javascript-homework-demo.png)

---


August 22, 2021

  - Math.random()
  - More examples of Arrays, Conditionals.
  - Intro to Functions

  - Homework
  
    Rock Paper Scissors

    * Have users play the game 10 times, then show them their total scores.

    **Rules for rock-paper-scissors**

    * Rock: wins against scissors, loses to paper, and ties against itself.
    * Paper: wins against rock, loses to scissors, and ties against itself.
    * Scissors: wins against paper, loses to rock, and ties against itself.

August 15, 2021

  Topics: 

    More Arrays
    Loops

  Homework: 

  ### Instructions

  * Starting from scratch, write code that loops through the following array and logs the name of each animal on the farm to the console:

  ```
  var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];
  ```

  * Then check if the first letter in the animal's name begins with a "c" or "o". If it does, create an alert saying, "Starts with 'c' or 'o'!"

  * **HINT:** You can access the first character of a string as if it were the first element of an array.
              use => .charAt(0)

Pseudo Code:

my array of animals is here 

for the entire length of the variable

  if first letter is a "c" or an "o"
    do this if statement and alert user

August 8, 2021

  Topics: 

    Variable Types
      - Character
      - Integers
      - Booleans

    Intro to Arrays

Homework

* Create a website that accomplishes the following:

  * Create an array of your favorite bands.

  * With a prompt, ask the user's favorite band.

  * If it's one of your favorites, alert: "YEAH I LOVE THEM!"

  * If it's not, alert: "Nah. They're pretty lame."

  * **HINT:**  You will need to research how to use `.indexOf()`.

  * **HINT:** You will need to research how to use `.toLowerCase()`.






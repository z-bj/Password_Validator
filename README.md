# Password Validator

![banner](https://github.com/z-bj/Password_Validator/blob/master/regex-based-credential-validator.jpg)

This repository contains a JavaScript class called `PasswordValidator` that provides a dynamic way to check if a password meets a set of constraints. The class exports its default module and takes a password string as a parameter in its constructor method and assigns it to the `this.password` property of the class instance.

The `PasswordValidator` class has five methods:

-   `hasLowerCaseLetter()`: returns true if the password contains at least one lowercase letter.
-   `hasUpperCaseLetter()`: returns true if the password contains at least one uppercase letter.
-   `hasSpecialCharacter()`: returns true if the password contains at least one special character from the regex pattern provided.
-   `hasDigit()`: returns true if the password contains at least one digit.
-   `hasValidLength()`: returns true if the password is at least 8 characters long.

Each method uses a regular expression pattern to search for the presence of a specific type of character in the password string. If the character is found, the method returns true. Otherwise, it returns false.

This `PasswordValidator` class can be used to validate the strength of a password by checking if it meets specific criteria. It can be used in web applications to ensure that user passwords meet a certain level of complexity before they can be accepted. This repository can be cloned or downloaded to be used as a library in any JavaScript project.

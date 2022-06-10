# LOCK STEEL

## INTRODUCTION

Check the strength of your password *simply* and *quickly*, and with optional UI indicators. Lock Steel is lightweight, has no dependencies and is connected with the UI elements. Just pure ```CSS``` and ```VanillaJS```.

## FEATURES

### ALGORITHM

This is the most simple password strength checker you will see online today. It definitely has alot of room for improvement, but it is starting by checking for the 4 most basic requirements for a secure password which are:
1. 8 or more words
2. At least 1 uppercase letter
3. At least 1 number
4. At least 1 special character

After deriving the percentage by these 4 determinants, repititions will be checked for:
1. Repeated characters like "aa", "11", or ".." cause points to be deleted from the derived percentage.
2. Obvious sequences like "123", "321" cause points to be deleted from the derived percentage.

The algorithm measures the password strength in terms of percentage. Meaning the most secure is 100% and the least secure is 0%. There are a few UI components that are in charge of displaying the percentage. The first one is the indicator bar and the other is a circle with the actual percentage digit in it.
The indication bar has 4 sections, all splited into 25% each:
1. 25% - red: Weak
2. 50% - gold: Medium
3. 75% - gold: Still Medium
4. 100% - green: Strong

### GENERATE PASSWORD

Once the button is clicked, the password field is filled with an auto generated password, which follows the same algorithm and ensures 100% security.

## SETUP

#### HTML
You must have created an input field width a unique class of 'password', as that is what the css and JS will attach to.

    <div class="field">
        <input type="password" class="password" placeholder="Password">
        <div class="gen-pass">GENERATE</div>
        <div class="show-pass"><i class="material-icons">visibility</i></div>
    </div>

To display the indicator bar, which is optional, you must copy and paste the following code anywhere in your document:
   
    <div class="progress-bar">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>

#### CSS
Copy the lslstrength.css file to your css directory and include it in your document ```<head>```:

    <link rel="stylesheet" href="./css/lslstrength.min.css">

#### MATERIAL FONT ICON
Copy the material icon font files to your root directory and include it's css file in your document ```<head>```:

    <link rel="stylesheet" href="./fonts/material-icons.css">

#### JavaScript
Copy the lslstrength.min.js file to your js directory and include it at the bottom of the document right before the ```<body>``` tag:
        
    <script src="./js/lslstrength.min.js"></script>
        




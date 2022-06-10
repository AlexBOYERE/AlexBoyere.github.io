<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/fonts/material-icons.css">
    <link rel="stylesheet" href="css/design-input.css">

    <title>Strength Checker</title>
</head>
<body>
    <div class="form">
        <div class="form-title">Password Strength Checker</div>
        <div class="desc">
            <p>
                This is a simple password strength checker. It will check the strength of your password and show you the result.
            </p>
        </div>

        <div class="field">
            <input type="password" class="password" placeholder="Password">
            <div class="gen-pass">GENERATE</div>
            <div class="show-pass"><i class="material-icons">visibility</i></div>
        </div>
        <div class="progress-bar">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div class="percentage">
            <div class="digit">0</div>%
        </div>
    </div>

    <script src="js/strenghtPassword.js"></script>
</body>
</html>
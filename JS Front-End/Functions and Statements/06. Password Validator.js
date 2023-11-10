function passwordValidator(password) {

    function sixToTenChar(password) {

        return password.length >= 6 && password.length <= 10;

    }

    function onlyLettersAndDigits(password) {

        regex = /^[A-z0-9]+$/gm;
        return regex.test(password);
    }

    function hasTwoDigits(password) {
        regex = /.*\d.*\d.*/gm
        return regex.test(password);
    }



    if (!sixToTenChar(password)) {
        console.log("Password must be between 6 and 10 characters")
    }

    if (!onlyLettersAndDigits(password)) {
        console.log("Password must consist only of letters and digits")
    }

    if (!hasTwoDigits(password)) {
        console.log("Password must have at least 2 digits")
    }


    if (sixToTenChar(password) && onlyLettersAndDigits(password) && hasTwoDigits(password)) {
        console.log("Password is valid")
    }
}

passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')
function setError(id, error) {
    // set error inside the tag of id
    element = document.getElementById(id);
    element.getElementsByClassName('error')[0].innerHTML = error;

}

function clearErrors() {
    errors = document.getElementsByClassName('error');
    for (let item of errors) {
        item.innerHTML = '';
    }
}

function validateForm() {
    clearErrors();
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let address = document.getElementById("address").value;
    let dob = document.getElementById("dob").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let experience = document.getElementById("experience").value;
    let mob = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let flag = 1;

    if (fname.length == 0) {
        setError("first", "**Name can't be empty!");
        flag = 0;
    }
    if (lname.length == 0) {
        setError("last", "**Name can't be empty!");
        flag = 0;
    }

    if (address.length < 15) {
        setError("add", "**Address can't be empty!")
        flag = 0;
    }

    if (dob == "") {
        setError("date", "**Select the date of birth!");
        flag = 0;
    }

    if (male == "" && female == "") {
        setError("gen", "**Select gender!")
        flag = 0;
    }

    if (experience == -1) {
        setError("exp", "**Select experience!");
        flag = 0;
    }

    if (mob.length == 0) {
        setError("mob", "**Mobile number can't be empty!");
        flag = 0;
    }

    if (email == "") {
        setError("em", "**Email can't be empty!");
        flag = 0;
    }

    if (password == "") {
        setError("pass", "**Password can't be empty!");
    }


    if (flag) {
        return true;
    } else {
        return false;
    }
}

function showPass() {
    let password = document.getElementById("password");
    if (password.type == "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

function fnameRegEx() {
    let fname = document.getElementById("fname").value;
    let regEx = /^[a-zA-Z]*$/;
    if (regEx.test(fname)) {
        if (fname.length < 3) {
            setError("first", "**Name is too short!");
        }
        else {
            setError("first", "");
        }
    } else {
        setError("first", "**Invalid Name!");
    }
}

function lnameRegEx() {
    let lname = document.getElementById("lname").value;
    let regEx = /^[a-zA-Z]*$/;
    if (regEx.test(lname)) {
        if (lname.length < 3) {
            setError("last", "**Name is too short!");
        }
        else {
            setError("last", "");
        }
    } else {
        setError("last", "**Invalid Name!");
    }
}

function addressRegEx() {
    let address = document.getElementById("address").value;
    if (address.length < 15) {
        setError("add", "**Address should be more than 15 characters!")
    } else {
        setError("add", "");
    }
}

function mobileRegEx() {
    let mobile = document.getElementById("mobile").value;
    let regEx = /^[0-9]*$/;
    if (regEx.test(mobile)) {
        if (mobile.length != 10) {
            setError("mob", "**Mobile number must be in 10 digits!");
        }
        else {
            setError("mob", "");
        }
    }
    else {
        setError("mob", "**Invalid mobile number!");
    }
}

function emailRegEx() {
    let email = document.getElementById("email").value;
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regEx.test(email)) {
        setError("em", "");
    }
    else {
        setError("em", "**Invalid email!")
    }
}

function passwordRegEx() {
    let password = document.getElementById("password").value;
    let regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/;
    if (regEx.test(password)) {
        setError("pass", "");
    }
    else {
        setError("pass", "**Choose a strong password!")
    }
}

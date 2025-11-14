/*
    File: hw1.js
    Name: Demi Banjoko
    Date Created: 09-10-2025
    Date Last Edited: 10-26-2025
    Version: 2.0
    Purpose: MIS 3371 Homework 2 JS Patient Form 
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//name slider js code
let slider = document.getElementById("feel");
let output = document.getElementById("feel-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

// DOB validation js code 
function validateDob() 
{
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date cannot be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = 
        "Date cannot be more than 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

// SSN validation js code
function validateSsn() {
    const ssn = document.getElementById("ssn").value;

    // regex pattern for SSN
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) 
    {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid SSN";
        return false;
    } else 
    {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

// Address1 validation js code
function validateAddress1() 
{
    var ad1 = document.getElementById("address1").value;
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML = 
        "Please enter correct information on address line";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

// Zip code validation js code
function validateZip() 
{
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("zip-error").innerHTML = 
        "Zip code cannot be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zip-error").innerHTML = "";
    return true;
}

//Email validation js code
function validateEmail() {
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regex pattern for email

    if (email == "") {
        document.getElementById("email-error").innerHTML =
        "Email cannot be empty.";
        return false;
    } else if (!email.match(emailR)) {
        document.getElementById("email-error").innerHTML =
        "Please enter a valid email address.";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

//Phone number validation js code
function validatePhone() 
{
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/\D/g, ""); //removes all non-number characters

    if (phone.length == 0) {
        document.getElementById("phone-error").innerHTML =
        "Phone number cannot be left blank.";
        return false;
    }

    const formattedPhone =
    phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6,10);
    phoneInput.value = formattedPhone;
    document.getElementById("phone-error").innerHTML = "";
    return true;
}

//User ID validation js code
function validateUid() 
{
    //converts uid to lowercase
    uid = document.getElementById("uid").value.toLowerCase();

    //displays uid in lowercase
    document.getElementById("uid").value = uid;

    //uid cannot be left empty
    if (uid.length == 0) {
        document.getElementById("uid-error").innerHTML = 
        "User ID cannot be blank";
        return false;
    }

//uid cannot stat with a number
    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uid-error").innerHTML = 
        "User ID cannot start with a number";
        return false;
    }

//makes sure uid can only have letters, numbers, underscores or dashes
    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can only have letters, numbers, underscores, and dashes";
        return false;

//uid must be at least 5 characters
    } else if (uid.length < 5) {
        document.getElementById("uid-error").innerHTML = 
        "User ID must be at least 5 characters";
        return false;

//uid cannot exceed 30 characters        
    } else if (uid.length > 30) {
        document.getElementById("uid-error").innerHTML = 
        "User ID cannot exceed 30 characters";
        return false;

//if all above is correct uid is valid
    } else {
        document.getElementById("uid-error").innerHTML = "";
        return true;
    }
}

//Password validation js code
function validatePassword() {
    const pword = document.getElementById("pword").value;
    const uname = document.getElementById("uid").value;

    // sets up and initializes array
    const errorMessage = [];

    // checks for lowercase letters
    if (!pword.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter.");
    }

    // checks for uppercase letters
    if (!pword.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter.");
    }

    // checks for numbers
    if (!pword.match(/[0-9]/)) {
        errorMessage.push("Enter at least one number.");
    }

    // checks for special characters
    if (!pword.match(/[!@#$%^&*_\-\\.\+(\)]/)) {
        errorMessage.push("Enter at least one special character.");
    }

    // check for username not in password
    if (pword == uname || pword.includes(uname)) {
        errorMessage.push("Password cannot contain username.");
    }

    // displays error messages if there are any errors
    const errorContainer = document.querySelector(".pword-message");
    errorContainer.innerHTML = errorMessage
        .map((message) => `<span>${message}</span><br>`)
        .join("");
}

//Confirm password validation js code
function confirmPword() {
    pword1 = document.getElementById("pword").value;
    pword2 = document.getElementById("pword2").value;

    if (pword1 !== pword2) {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords do not match";
        return false;
    } else {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords match";
        return true;
    }
}

//Review Button (Show user input)

function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><th colspan = '3'> Review Your Information:</th>";
    for (let i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !== "") {
            switch (formcontent.elements[i].type) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

//remove user input
function removeReview() 
{
    document.getElementById("showInput").innerHTML = "";
}
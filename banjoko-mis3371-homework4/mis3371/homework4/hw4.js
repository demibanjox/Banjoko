/*
    File: hw4.js
    Name: Demi Banjoko
    Date Created: 09-10-2025
    Date Last Edited: 12-06-2025
    Version: 4.0
    Purpose: MIS 3371 Homework 4 JS Patient Form 
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//slider js code
let slider = document.getElementById("feel");
let output = document.getElementById("feel-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

 //Middle initial validation js code
 function validateMname() {
    mname = document.getElementById("mname").value;
    var namePattern = /^[A-Z]+$/;

    mname = mname.toUpperCase();
    document.getElementById("mname").value = mname;

    if (!mname.match(namePattern)) {
        document.getElementById("mname-error").innerHTML = 
        "Middle initial must be a single uppercase letter";
        return false;
    } else {
        document.getElementById("mname-error").innerHTML = "";
        return true;
    }
}

 //First name validation js code 
 function validateFname() {
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    if (fname == "") {
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty"
        return false;
    } else if (fname != "") {
        if (!fname.match(namePattern)) {
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (fname.length < 2) {
        document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
        return false;
    } else if (fname.length > 30) {
        document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}
}

//Last name validation js code
function validateLname() {
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    if (lname == "") {
        document.getElementById("lname-error").innerHTML = "Last name field cannot be empty"
        return false;
    } else if (lname != "") {
        if (!lname.match(namePattern)) {
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (lname.length < 2) {
        document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
        return false;
    } else if (lname.length > 30) {
        document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}
}



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

// Address2 validation js code
function validateAddress2() 
{
    var ad2 = document.getElementById("address2").value;
    console.log(ad2);
    console.log(ad2.length);

    if (ad2.length < 2) {
        document.getElementById("address2-error").innerHTML = 
        "Please enter correct information on address line";
        return false;
    } else {
        document.getElementById("address2-error").innerHTML = "";
        return true;
    }
}

//City validation js code 
function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City cannot be blank";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
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

//uid cannot start with a number
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
function validatePword() {
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

//alert box js code
function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    };
}

//validate input js code
function validateInput() {
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }
    if (!validateMname()) {
        valid = false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZip()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validatePhone()) {
        valid = false;
    }
    if (!validateUid()) {
        valid = false;
    }
    if (!validatePword()) {
        valid = false;
    }
    if (!confirmPword()) {
        valid = false;
    }
     if (valid) {
         document.getElementById("submit").disabled = false;
     } else{
        showAlert();
     }
 }

//Fetch API function
async function loadMessage(file) {
    try {
        let myObject = await fetch(file);
        let myText = await myObject.text();
        document.getElementById("health-tip").innerText = myText;
    } catch (err) {
        console.log("Fetch error:", err);
    }
}

//cookie for remembering info input on the form 
function setCookie(name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

var inputs = [
    { id: "fname", cookieName: "firstname" },
    { id: "mname", cookieName: "middleInitial" },
    { id: "lname", cookieName: "lastname" },
    { id: "dob", cookieName: "dob" },
    { id: "ssn", cookieName: "ssn" },

    { id: "address1", cookieName: "address1" },
    { id: "address2", cookieName: "address2" },
    { id: "city", cookieName: "city" },
    { id: "state", cookieName: "state" },
    { id: "zip", cookieName: "zip" },
    { id: "email", cookieName: "email" },
    { id: "phone", cookieName: "phone" },

    // portal account
    { id: "uid", cookieName: "uid" },
    { id: "pword", cookieName: "pword" },
    { id: "pword2", cookieName: "pword2" }
];


window.onload = function () {
    loadMessage("message.txt");
};

inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);

    // Prefill input fields
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "") {
        inputElement.value = cookieValue;
    }

    // Set a cookie when the input field changes
    inputElement.addEventListener("input", function () {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

var firstName = getCookie("firstname");
if (firstName !== "") 
{
    document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + "!<br>";
    document.getElementById("welcome2").innerHTML =
        "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form.</a>";

    document.getElementById("new-user").addEventListener("click", function () {
        inputs.forEach(function (input) {
            setCookie(input.cookieName, "", -1);
        });
        location.reload();
    });
}

 // Function to delete all cookies
function deleteAllCookies() {
    document.cookie.split(";").forEach(function (cookie) {
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    });
}


 // Event listner for "Remember Me" checkbox
document.getElementById("remember-me").addEventListener("change", function () {
    const rememberMe = this.checked;

    if (!rememberMe) {
        // If "Remember Me" is unchecked, delete cookies
        deleteAllCookies();
        console.log("All cookies deleted because 'Remember Me' is unchecked.");
    } else {
        // If "Remember Me" is checked or rechecked, save cookies
        inputs.forEach(function (input) {
            const inputElement = document.getElementById(input.id);
            if (inputElement.value.trim() !== "") {
                setCookie(input.cookieName, inputElement.value, 30);
            }
        });
        console.log("Cookies saved because 'Remember Me' is checked.");
    }
});

 // "Remember Me" reflects cookie on page load
document.addEventListener("DOMContentLoaded", function () {
    const rememberMe = document.getElementById("remember-me").checked;

    if (!rememberMe) {
        deleteAllCookies();
    }
});


window.addEventListener("load", function () {

    // Load last name from localStorage 
    let cookieLast = getCookie("lastname");
    let savedLast = localStorage.getItem("lastname");

    if (!cookieLast && savedLast) {
        document.getElementById("lname").value = savedLast;

        let display = document.getElementById("saved-lastname");
        if (display) {
            display.innerText = "Saved Last Name: " + savedLast;
        }
    }

    // Save last name to localStorage when user types
    document.getElementById("lname").addEventListener("input", function () {
        localStorage.setItem("lastname", this.value);
    });

});



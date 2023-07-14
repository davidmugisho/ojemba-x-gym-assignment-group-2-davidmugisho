function getFormvalue() {
    Event.preventDefault();
    var form = document.getElementById("userForm");
    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;
    var fullName = firstName + " " + lastName;
    console.log(fullName);
}
var eleLi = document.querySelector('[role="combobox"]');

var userNameField = document.getElementById('userName');

var passwordField = document.getElementById('password');

var fName = document.getElementById("fname");

var lName = document.getElementById("lname");

var buttonElement = document.getElementById("submitButton");

if(buttonElement) {
    buttonElement.addEventListener("click", function() {
        var userName = fName.value;
        var password = lName.value;

        console.log('fName', fName);

        chrome.runtime.sendMessage({userName, password}, function(resp) {
            textToSearch = resp;
            console.log('from content js', resp);
        })
    })
};
console.log('userNameField', userNameField);
console.log('passwordField', passwordField);


chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    userNameField.value = message.userName;
    passwordField.value = message.password;

    console.log('listner from async funct', message);
});





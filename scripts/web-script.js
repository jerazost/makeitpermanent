function createNewUser() {
    var xhttp = new XMLHttpRequest();
    var userName = document.getElementById('username');
    var pass = document.getElementById('password');
    var body = {};
    body.name = userName;
    body.password = pass;
    
    var jsonBody = JSON.stringify(body);
    xhttp.open("POST", "https://lit-lowlands-87980.herokuapp.com/users", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(jsonBody);
    var response = JSON.parse(xhttp.responseText);
    console.log(response);
    
}

function createUser() {
    var body = {};
    name = document.getElementById('username');
    password = document.getElementById('password');
    body.name = name.innerHTML;
    body.password = password.innerHTML;
    alert(JSON.stringify(body));
    $.ajax({
        type: "POST",
        url: "https://lit-lowlands-87980.herokuapp.com/users",
        data: {'': JSON.stringify(body)}
    }).done(function(data) {
        alert(data);
    }).error(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText || textStatus);
    });
}
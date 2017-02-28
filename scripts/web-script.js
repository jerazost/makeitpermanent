
function createUser() {
    var body = {};
    name = document.getElementById('user');
    password = document.getElementById('password');

    
    
    body.name = name.value;
    console.log('Name', name.value);
    console.log('Password', password.value);
    console.log('Body Name', body.name);

    body.password = password.value;
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

function pushUserInfo(urlEnd) {
    var body = {};
    var name = document.getElementById('user');
    var password = document.getElementById('password');

////////////////////////////





/////////////////////////////

    body.name = name.value;
    body.password = password.value;
    console.log('Name: ', name.value);
    console.log('Password: ', password.value);
    console.log('Body Name: ' , body.name);
    console.log('Body password: ', body.password);


    alert(JSON.stringify(body));
    $.ajax({
        url: `https://lit-lowlands-87980.herokuapp.com/api/${urlEnd}`,
        type: 'POST',
        crossDomain: true,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(body),
        success: function(data){alert(data)},
        failure: function(jqXHR, textStatus, errorThrown) {
      alert(jqXHR.responseText || textStatus);
    }



    // }).done(function(data) {
    //     alert(data);
    // }).error(function (jqXHR, textStatus, errorThrown) {

    });
}

function pullUserInfo(urlEnd) {
    var body = {};
    var name = document.getElementById('user');
    var password = document.getElementById('password');



    body.name = name.value;
    body.password = password.value;
    console.log('Name', name.value);
    console.log('Password', password.value);
    console.log('Body Name', body.name);
    console.log('Body password', body.password);


    alert(JSON.stringify(body));
    $.ajax({
        url: `https://lit-lowlands-87980.herokuapp.com/api/${urlEnd}`,
        type: 'GET',
        contentType: 'application/json',
        data: JSON.stringify(body),
        success: (res) => {
          console.log('HERES IS WHAT YOU GET BACK');
          console.log(JSON.stringify(res)); //TODO: add stuff here
        }
      }).error(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText || textStatus);
    });
}


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

        type: 'POST',
        url: `https://lit-lowlands-87980.herokuapp.com/api/${urlEnd}`,
        //url: `http://localhost:3000/api/${urlEnd}`,
        crossDomain: true,
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(body),
        success: function(data){alert(JSON.stringify(data))},
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
        type: 'POST',
        url: `https://lit-lowlands-87980.herokuapp.com/api/${urlEnd}`,
        //url: `http://localhost:3000/api/${urlEnd}`,
        crossDomain: true,
        contentType: 'application/json',
        data: JSON.stringify(body),
        success: (res) => {
          //console.log('HERES IS WHAT YOU GET BACK');
          alert(JSON.stringify(res)); //TODO: add stuff here
        }
      }).error(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText || textStatus);
    });
}

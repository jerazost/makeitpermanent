

$.support.cors = true
$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
  options.crossDomain ={
    crossDomain: true
  };
  options.xhrFields = {
    withCredentials: true
  };
});

function pushUserInfo(urlEnd) { //used to create a user
    var body = {};
    var name = document.getElementById('user');
    var password = document.getElementById('password');
    var cookie;

    body.name = name.value;
    body.password = password.value;

    $.ajax({

        type: 'POST',
        url: `http://lit-lowlands-87980.herokuapp.com/api/${urlEnd}`,
        //url: `http://localhost:3000/api/${urlEnd}`,
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(body),
        success: function(data){
          if(data.success == 1){
            if(data.userToken){
              document.cookie = 'jwt' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
              document.cookie = 'user' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
              var now = new Date();
              var time = now.getTime();
              var expireTime = time + 1000*36000; //10 hours
              now.setTime(expireTime);
              cookie = data.userToken;
              document.cookie = `jwt=${cookie};expires=${now.toGMTString()}`;
              document.cookie = `user=${name.value};expires=${now.toGMTString()}`;
              changeSign(`Hello, ${name.value}`);
              } else {
                alert(`Created account '${name.value}'`)
              }
          }
          else if(data.success == 0) {
              alert('invalid username/password')
          }
          else{

            alert(`User '${JSON.stringify(data.name)}' Already Exists`)
          }

        },
        failure: function(jqXHR, textStatus, errorThrown) {
      alert(jqXHR.responseText || textStatus);
    }
    });
}


function loginUser(urlEnd) { //logs in user on page load
    var body = {};
    var cookie;
    if(getCookie('user'))
      changeSign(`Hello, ${getCookie("user")}`);
    $.ajax({
        type: 'GET',
        url: `http://lit-lowlands-87980.herokuapp.com/api/${urlEnd}`,
        //url: `http://localhost:3000/api/${urlEnd}`,
        dataType: 'json',
        headers: {"x-access-token": getCookie("jwt")},
        contentType: 'application/json',
        data: JSON.stringify(body),
        success: function(data){

          if(data.success == 1){
            if(data.userToken){
              var now = new Date();
              var time = now.getTime();
              var expireTime = time + 1000*36000; //10 hours
              now.setTime(expireTime);
              cookie = data.userToken;
              document.cookie = `jwt=${cookie};expires=${now.toGMTString()}`;
              document.cookie = `user=${getCookie("user")};expires=${now.toGMTString()}`;

            }
        }
      },
        failure: function(jqXHR, textStatus, errorThrown) {
      alert(jqXHR.responseText || textStatus);
    }
    });
}

function logoutUser(urlEnd) { //deletes users site cookies and refreshes page
  deleteCookie('jwt');
  deleteCookie('user');
  location.reload();
}


function pullUserInfo(urlEnd) { //NOT IN USE YET
    var body = {};
    var name = document.getElementById('user');
    var password = document.getElementById('password');



    body.name = name.value;
    body.password = password.value;

    alert(JSON.stringify(body));
    $.ajax({
        type: 'POST',
        url: `http://lit-lowlands-87980.herokuapp.com/api/${urlEnd}`,
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



function getCookie(name) { //retrieves value of cookie by name of cookie
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function deleteCookie(name){ //deletes cookie passed in
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function changeSign(name){ //Changes sign in to username
    document.getElementById("log-in").innerHTML = name;
    $("#logout").show();
    $("#createUser").hide();
    $("#login").hide();
    $("#loginInput").hide();
}

'use strict';

$(function() {
    $.getJSON('https://jsonplaceholder.typicode.com/users/1', function (data) {
        console.log(data);
        console.log(data.name);
        console.log(data.address.street);
        
        var parName = document.createElement('p');
        var parStreet = document.createElement('p');
        
        parName.innerHTML = data.name;
        parStreet.innerHTML = data.address.street;
        
        $('#users-data').append(parName);
        $('#users-data').append(parStreet);
        
    });
});
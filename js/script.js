'use strict';

$(function() {
    
    function getUsers (init) {
        
        for (var i=init; i <= init+4; i++) {

                $.getJSON('https://jsonplaceholder.typicode.com/users/' + i, function (data) {
            //            console.log(data);
            //            console.log(data.name);
            //            console.log(data.address.street);

                    var parId = document.createElement('p');
                    var parName = document.createElement('p');
                    var parStreet = document.createElement('p');

                    parId.className += 'user-id';
                    parName.className += 'user-name';
                    parStreet.className += 'user-street-name';

                    parId.innerHTML = 'Id użytkownika ' + data.id;
                    parName.innerHTML = 'Imię i nazwisko ' + data.name;
                    parStreet.innerHTML = 'Ulica ' + data.address.street;

                    $('#users-data').append(parId);
                    $('#users-data').append(parName);
                    $('#users-data').append(parStreet);

                });
            }
    }
    
    getUsers(1);
    
    $('#load-users').on('click', function() {
//        console.log('test');
        var usersLoaded = $('.user-name').length;
        console.log(usersLoaded);
        getUsers(usersLoaded + 1);
    })
    
});
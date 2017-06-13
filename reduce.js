'use strict';

var requestify = require('requestify');

var url = "https://gist.githubusercontent.com/lalocespedes/604e8fa59b9f4a3027603fecc3ea6037/raw/8f5f21b441bf1195b9ac4467cc5eca35517de1d5/users";

requestify.request(url, {
    method: 'GET',
    dataType: 'json'
})
    .then(function (response) {

        var data = JSON.parse(response.getBody());
        
        // Sum all records
        var ageSum = data.reduce(function (self, item, index) {

                self += item.age;
                return self;

            }, 0);

        console.log('Sum ages is ' + ageSum);

        // Return object all email
        var email = data.reduce(function (self, item, index) {
            self[item.name.first +' '+ item.name.last] = item.email;
            return self;
        }, {});

        console.log(email);

        // Return object all email by older
        var older = data.reduce(function (self, item, index) {

            if (item.age >= 40) {
                self[item.name.first +' '+ item.name.last] = item.email;
            }
            return self;
        }, {});

        console.log(older);

        // Return object group by eye color
        var group = data.reduce(function (self, item, index) {
            self[item.eyeColor].push(item);
            return self;
        }, {blue: [], brown: [], green: []});

        console.log(group);

    });

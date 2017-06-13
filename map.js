'use strict';

var requestify = require('requestify');

var url = "https://gist.githubusercontent.com/lalocespedes/604e8fa59b9f4a3027603fecc3ea6037/raw/8f5f21b441bf1195b9ac4467cc5eca35517de1d5/users";

requestify.request(url, {
    method: 'GET',
    dataType: 'json'
})
    .then(function (response) {

        var data = JSON.parse(response.getBody());

        // Map use to build a new Array from Array
        var favoriteFruit = data.map(function (item) {
            return item.favoriteFruit;
        });

        console.log(favoriteFruit);

    });

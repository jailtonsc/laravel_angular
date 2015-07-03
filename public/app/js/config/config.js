(function () {
    "use strict";

    angular
        .module("MyApp")
        .value('config', {
            baseUrl: 'http://angular.local',
            accessTokenUrl: 'http://angular.local/oauth/access_token',
            clientId: '1',
            clientSecret: 'angular',
            grantType: 'password'
        });
})();
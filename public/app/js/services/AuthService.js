(function () {
    'use strict';

    angular
        .module('MyApp')
        .factory('AuthService', AuthService);

    AuthService.$injector = ['$http', 'config'];

    function AuthService($http, config) {
        var _logar = function (auth) {
            return $http.post(config.accessTokenUrl, {
                username: auth.email,
                password: auth.password,
                client_id: config.clientId,
                client_secret: config.clientSecret,
                grant_type: config.grantType
            });
        }

        return {
            logar: _logar
        };
    }
})();
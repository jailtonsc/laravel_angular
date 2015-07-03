(function () {
    'use strict';

    angular
        .module('MyApp')
        .factory('UsuarioService', UsuarioService);

    UsuarioService.$injector = ['$http', 'config'];

    function UsuarioService($http, config) {

        var _logar = function (auth){
            $http.post(config.accessTokenUrl, {
                username: auth.email,
                password: auth.password,
                client_id: config.clientId,
                client_secret: config.clientSecret,
                grant_type: config.grantType
            })
        }

        return {
            logar: _logar
        };
    }
})();
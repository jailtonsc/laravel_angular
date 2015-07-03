(function () {
    'use strict';

    angular
        .module('MyApp')
        .factory('AuthService', AuthService);

    UsuarioService.$injector = ['$http', 'config'];

    function AuthService() {
        var _getContatos = function () {
            return $http.get(config.baseUrl + "/contatos");
        };

        var _saveContato = function (contato) {
            return $http.post(config.baseUrl + "/contatos", contato);
        };

        return {
            getContatos: _getContatos,
            saveContato: _saveContato
        };
    }
})();
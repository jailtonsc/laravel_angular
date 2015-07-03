(function () {
    'use strict';

    angular
        .module('MyApp')
        .factory('UsuarioService', UsuarioService);

    UsuarioService.$injector = ['$http', 'config'];

    function UsuarioService() {
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
(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('AuthController', Auth);

    Auth.$injector = ['$http', '$rootScope', '$location', 'config'];

    function Auth($http, $rootScope, $location, config) {
        var vm = this;

        vm.error = {
            valid: false,
            message: ''
        };

        vm.logar = logar;

        function logar() {
            $http.post(config.accessTokenUrl, {
                username: vm.email,
                password: vm.password,
                client_id: config.clientId,
                client_secret: config.clientSecret,
                grant_type: config.grantType
            }).success(function (data) {
                if (typeof data.access_token != 'undefined' && data.access_token != '') {
                    $rootScope.token = data.access_token;
                    $location.path('usuario');
                }
            }).error(function (data) {
                vm.error.valid = true;
                vm.error.message = data.error_description
            });
        }
    }
})();






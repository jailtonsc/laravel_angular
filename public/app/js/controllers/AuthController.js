(function () {
    'use strict';

    angular
        .module('MyApp')
        .controller('AuthController', Auth);

    Auth.$injector = ['$rootScope', '$location', 'AuthService'];

    function Auth($rootScope, $location, AuthService) {
        var vm = this;

        vm.error = {
            valid: false,
            message: ''
        };

        vm.logar = logar;

        function logar() {
            AuthService
                .logar(vm)
                .success(function (data) {
                    if (typeof data.access_token != 'undefined' && data.access_token != '') {
                        $rootScope.token = data.access_token;
                        $location.path('usuario');
                    }
                })
                .error(function (data) {
                    vm.error.valid = true;
                    vm.error.message = data.error_description
                });
        }
    }
})();






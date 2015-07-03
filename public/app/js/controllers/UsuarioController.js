(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller('UsuarioController', Usuario);

    function Usuario($http, $rootScope, config) {
        var vm = this;

        vm.usuarios = [];

        getUsuarios();

        function getUsuarios() {
            $http({
                method: "GET",
                url: config.baseUrl + "/user",
                headers: {
                    Authorization: "Bearer " + $rootScope.token
                }
            }).success(function (data) {
                vm.usuarios = data;
            }).error(function (data) {
                $location.path('/');
            });
        }
    }
})();

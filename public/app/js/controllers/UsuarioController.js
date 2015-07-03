(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller('UsuarioController', Usuario);

    Usuario.$injector = ['$http', '$rootScope', '$log', 'config'];

    function Usuario($http, $rootScope, $log, config) {
        var vm = this;

        vm.usuarios = [];


        vm.totalItems = 64;
        vm.currentPage = 4;

        vm.setPage = function (pageNo) {
            vm.currentPage = pageNo;
        };

        vm.pageChanged = function() {
            $log.log('Page changed to: ' + vm.currentPage);
            return false;
        };

        vm.maxSize = 5;
        vm.bigTotalItems = 175;
        vm.bigCurrentPage = 1


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

(function () {
    "use strict";

    angular
        .module("MyApp")
        .config(Config);

    Config.$injector = ['$routeProvider'];

    function Config ($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'app/view/auth/login.html',
                controller: 'AuthController',
                controllerAs: 'vm'
            }).when('/usuario', {
                templateUrl: 'app/view/usuario/index.html',
                controller: 'UsuarioController',
                controllerAs: 'vm'
            }).when('/usuario/cadastro', {
                templateUrl: 'app/view/usuario/cadastro.html',
                controller: 'UsuarioController',
                controllerAs: 'vm'
            }).when('/imagem', {
                templateUrl: 'app/view/imagem/index.html',
                controller: 'ImagemController',
                controllerAs: 'vm'
            });
    }
})();
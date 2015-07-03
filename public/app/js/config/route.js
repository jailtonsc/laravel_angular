app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/view/auth/login.html',
            controller: 'AuthController'
        }).when('/usuario', {
            templateUrl: 'app/view/usuario/index.html',
            controller: 'UsuarioController'
        }).when('/usuario/cadastro', {
            templateUrl: 'app/view/usuario/cadastro.html',
            controller: 'UsuarioController'
        });
});

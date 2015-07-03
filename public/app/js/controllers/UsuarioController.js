app.controller('UsuarioController', function ($scope, $http, $rootScope, config) {

    $scope.usuarios = [];

    $http({
        method: "GET",
        url: config.baseUrl + "/user",
        headers: {
            Authorization: "Bearer " + $rootScope.token
        }
    }).success(function (data){
        $scope.usuarios = data;
    }).error(function (data) {
        $location.path('/');
    });;

});
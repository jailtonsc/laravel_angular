"use strict";

app.controller('AuthController', function ($scope, $http, $rootScope, $location, config) {

    $scope.email = "";
    $scope.password = "";

    $scope.error = {
        valid: false,
        message: ""
    };


    $scope.logar = function () {
        $http.post(config.accessTokenUrl, {
            username: $scope.email,
            password: $scope.password,
            client_id: "1",
            client_secret: "teste",
            grant_type: "password"
        }).success(function (data) {
            if (typeof data.access_token != "undefined" && data.access_token != "") {
                $rootScope.token = data.access_token;

                $location.path('usuario');
            }

        }).error(function (data) {
            $scope.error.valid = true;
            $scope.error.message = data.error_description
        });
    }

});

<!DOCTYPE html>
<html lang="en" ng-app="MyApp">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Fixed Top Navbar Example for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="{{ asset('app/lib/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('app/lib/bootstrap/css/bootstrap-theme.min.css') }}" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>

<!-- Fixed navbar -->
<nav class="navbar navbar-default">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li class="active"><a href="/#/usuario">Usuario</a></li>
                <li><a href="/#/">Login</a></li>
            </ul>
        </div><!--/.nav-collapse -->
    </div>
</nav>

<div ng-view></div>

<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="{{ asset('app/lib/jquery/jquery-2.1.4.min.js') }}"></script>
<script src="{{ asset('app/lib/bootstrap/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('app/lib/angular/angular.min.js') }}"></script>
<script src="{{ asset('app/lib/angular/angular-route.min.js') }}"></script>
<script src="{{ asset('app/lib/ui-bootstrap-tpls-0.13.0.min.js') }}"></script>
<script src="{{ asset('app/lib/angular/i18n/angular-locale_pt-br.js') }}"></script>

<script src="{{ asset('app/js/app.js') }}"></script>
<script src="{{ asset('app/js/config/config.js') }}"></script>
<script src="{{ asset('app/js/config/route.js') }}"></script>
<script src="{{ asset('app/js/controllers/UsuarioController.js') }}"></script>
<script src="{{ asset('app/js/controllers/AuthController.js') }}"></script>
<script src="{{ asset('app/js/services/AuthService.js') }}"></script>
</body>
</html>

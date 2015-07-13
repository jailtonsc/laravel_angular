(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller('ImagemController', Imagem);

    Imagem.$injector = [];

    function Imagem() {
        var vm = this;

        vm.imagens = [
            {src: 'http://imobiliariaemcabofrio.com.br/wp-content/uploads/2015/04/casa.jpg', nome: 'hospital'},
            {src: 'http://www.wikipekes.com//HLIC/2eebc75252a2af8af70e493ec8a561bf.jpg', nome: 'escola'}
        ];
    }
})();

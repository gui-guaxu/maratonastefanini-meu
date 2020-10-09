(function () {
    "use strict";

    // Módulo
    angular.module('listaTarefasApp', []); //-> Guardar todas as dependências aqui
    
    //Controller
    angular.module('listaTarefasApp')
    //Aqui que ficam as funções da nossa aplicação
        .controller("listaTarefasController", listaTarefasController);

    listaTarefasController.$inject = ['$scope'];

    function listaTarefasController($scope) {
        var vm = this;

        vm.tarefas = [
        {text: 'Estudar AngularJS', feito: true},
            {text: 'Fazer uma aplicação em AngularJS', feito: false},

        ];

        vm.restam = restam;
        vm.addTarefa = addTarefa;
        vm.arquivar = arquivar;


        function restam() {
            var count = 0;
            angular.forEach(vm.tarefas, function (trf) {
                if (!trf.feito) count++;
            });
            return count;
        }

        function addTarefa () {
            vm.tarefas.push({text: vm.tarefaText, feito: false});
            vm.tarefaText = '';
        }

        function arquivar () {
            
            var oldTarefas = vm.tarefas;
            vm.tarefas = [];
            angular.forEach(oldTarefas, function  (trf) {
                if (!trf.feito) vm.tarefas.push(trf); // Quando o if  -> uma linha não precisa de chaves
            });

            // Outra funcionalidade, com o filter
            // vm.tarefas = vm.tarefas.filter (function (trf) { return !trf.feito})

        }
    }

})();
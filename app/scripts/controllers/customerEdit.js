'use strict';

angular.module('app')
    .controller('CustomerEditController', ['$scope', '$state', '$stateParams', 'userService', 'notify', function ($scope, $state, $stateParams, userService, notify) {

        function initialise(){
            $scope.customer = {
                Id: $stateParams.customerId
            };
            $scope.categories = [
                {name: 'Accountant'},
                {name: 'Builder'},
                {name: 'Child Minder'},
                {name: 'Developer'},
                {name: 'Electrician'},
                {name: 'Fisherman'},
                {name: 'Housing Inspector'},
                {name: 'Plumber'},
                {name: 'Yacht Builder'},
                {name: 'Zoo Keeper'}
            ];
        }

        $scope.saveCustomer = function(){
            $state.go('dashboard');
        };

        initialise();
    }]);

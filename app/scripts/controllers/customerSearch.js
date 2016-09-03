'use strict';

angular.module('app')
    .controller('CustomerSearchController', ['$scope', '$state', 'userService', 'notify', function ($scope, $state, userService, notify) {

        function initialise(){
            $scope.search = {customerName: '', results: []};
        }

        $scope.searchCustomer = function(){
            $scope.search.results = [{name: 'Test Customer'},{name: 'Test Customer2'},{name: 'Test Customer3'}];
        };

        initialise();
    }]);

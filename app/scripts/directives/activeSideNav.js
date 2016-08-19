'use strict';

angular.module('app')
    .directive('activeSideNav', function() {
        return {
            scope: false,
            restrict: 'E',
            templateUrl: 'views/directives/activeSideNav.html',
            controller: function($scope){
                $scope.navLinks = [
                    {
                        link : '#/dashboard',
                        title: 'Dashboard'
                    },
                    {
                        link : '#/customer/new',
                        title: 'New Customer'
                    },
                    {
                        link : '#/customer/order/new',
                        title: 'New Order'
                    },
                    {
                        link : '#/customer/search',
                        title: 'Customer Search'
                    }
                ];
            }
        };
    });


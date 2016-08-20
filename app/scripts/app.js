angular.module('app', ['appTemplates', 'ui.router', 'config', 'restangular', 'angularSpinner', 'cgNotify', 'ipCookie', 'ngFileSaver','ui.bootstrap', 'ngMessages', 'ngAnimate', 'highcharts-ng', 'ngTouch', 'ui.select', 'ngSanitize'])

    .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$on('$stateChangeError', function () {
            $state.transitionTo('login');
        });
    }])

    .config(['$stateProvider', '$urlRouterProvider', 'uiSelectConfig',
        function ($stateProvider, $urlRouterProvider, uiSelectConfig) {

            uiSelectConfig.theme = 'selectize';

            var dashboardView = {
                    url: '/',
                    templateUrl: 'views/dashboard.html',
                    controller: 'DashboardController',
                    resolve: {
                        authentication: ['userService', '$q', function (userService, $q) {
                            var defer = $q.defer();
                            userService.isLoggedIn().then(function (loggedIn) {
                                if (loggedIn) {
                                    defer.resolve(true);
                                } else {
                                    defer.reject();
                                }
                            });
                            return defer.promise;
                        }]
                    }
                },
                loginView = {
                    url: '/login',
                    templateUrl: 'views/login.html',
                    controller: 'LoginController'
                },
                customerNewView = {
                    url: '/customer/new',
                    templateUrl: 'views/customerNew.html',
                    controller: 'CustomerNewController',
                    resolve: {
                        authentication: ['userService', '$q', function (userService, $q) {
                            var defer = $q.defer();
                            userService.isLoggedIn().then(function (loggedIn) {
                                if (loggedIn) {
                                    defer.resolve(true);
                                } else {
                                    defer.reject();
                                }
                            });
                            return defer.promise;
                        }]
                    }
                },
                orderNewView = {
                    url: '/customer/order/new',
                    templateUrl: 'views/orderNew.html',
                    controller: 'OrderNewController',
                    resolve: {
                        authentication: ['userService', '$q', function (userService, $q) {
                            var defer = $q.defer();
                            userService.isLoggedIn().then(function (loggedIn) {
                                if (loggedIn) {
                                    defer.resolve(true);
                                } else {
                                    defer.reject();
                                }
                            });
                            return defer.promise;
                        }]
                    }
                },
                customerSearchView = {
                    url: '/customer/search',
                    templateUrl: 'views/customerSearch.html',
                    controller: 'CustomerSearchController',
                    resolve: {
                        authentication: ['userService', '$q', function (userService, $q) {
                            var defer = $q.defer();
                            userService.isLoggedIn().then(function (loggedIn) {
                                if (loggedIn) {
                                    defer.resolve(true);
                                } else {
                                    defer.reject();
                                }
                            });
                            return defer.promise;
                        }]
                    }
                };

            $stateProvider

                .state('dashboard', dashboardView)
                .state('login', loginView)
                .state('customerNew', customerNewView)
                .state('orderNew', orderNewView)
                .state('customerSearch', customerSearchView)
            ;

            $urlRouterProvider.otherwise('/');

        }]);


angular.element(document).ready(function () {

/**
     //used for displaying a splash screen
     setTimeout(
        function asyncBootstrap() {
            angular.bootstrap( document, [ "app" ] );
        },
        ( 1 * 1000 )
    );
*/
    angular.bootstrap(document, ['app']);
});

"use strict";
 angular.module('config', [])

.constant('RECEIPT_API_URL', 'https://generic-receiver-api.herokuapp.com/')

;;angular.module('appTemplates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("views/customerEdit.html",
    "<div class=container><div class=row><div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\"><p>Customer ID: {{customer.Id}}</p><form class=form-horizontal name=customerEditForm ng-submit=saveCustomer() novalidate><div class=form-group ng-class=\"{ 'has-error' : customerEditForm.editCustomerName.$invalid && !customerEditForm.editCustomerName.$pristine }\"><label for=editCustomerName>Name</label><input class=\"form-control validate\" name=editCustomerName id=editCustomerName placeholder=Name ng-model=customer.name required minlength=3 maxlength=100><div class=help-block ng-messages=customerEditForm.editCustomerName.$error ng-if=!customerEditForm.editCustomerName.$pristine><div ng-message=required>You must supply a company name</div><div ng-message=minlength>Company Name too short</div><div ng-message=maxlength>Company Name too long</div></div></div><div class=form-group ng-class=\"{ 'has-error' : customerEditForm.editCustomerAddress1.$invalid && !customerEditForm.editCustomerAddress1.$pristine }\"><label for=editCustomerAddress1>Address Line 1</label><input class=\"form-control validate\" name=editCustomerAddress1 id=editCustomerAddress1 placeholder=Address ng-model=customer.address1 required minlength=3 maxlength=100><div class=help-block ng-messages=customerEditForm.editCustomerAddress1.$error ng-if=!customerEditForm.editCustomerAddress1.$pristine><div ng-message=required>You must supply a first line address</div><div ng-message=minlength>Address too short</div><div ng-message=maxlength>Address too long</div></div></div><div class=form-group><label for=editCustomerAddress2>Address Line 2</label><input class=\"form-control validate\" name=editCustomerAddress2 id=editCustomerAddress2 placeholder=Address ng-model=customer.address2></div><div class=form-group><label for=editCustomerTown>Town</label><input class=\"form-control validate\" name=editCustomerTown id=editCustomerTown placeholder=Town ng-model=customer.town></div><div class=form-group><label for=editCustomerCounty>County</label><input class=\"form-control validate\" name=editCustomerCounty id=editCustomerCounty placeholder=County ng-model=customer.county></div><div class=form-group ng-class=\"{ 'has-error' : customerEditForm.editCustomerPostcode.$invalid && !customerEditForm.editCustomerPostcode.$pristine }\"><label for=editCustomerPostcode>Postcode</label><input class=\"form-control validate\" name=editCustomerPostcode id=editCustomerPostcode placeholder=Postcode ng-model=customer.postcode required minlength=5 maxlength=8><div class=help-block ng-messages=customerEditForm.editCustomerPostcode.$error ng-if=!customerEditForm.editCustomerPostcode.$pristine><div ng-message=required>You must supply a postcode</div><div ng-message=minlength>Postcode too short</div><div ng-message=maxlength>Postcode too long</div><div ng-message=pattern>Invalid Postcode</div></div></div><div class=form-group ng-class=\"{ 'has-error' : customerEditForm.editCustomerTelephone.$invalid && !customerEditForm.editCustomerTelephone.$pristine }\"><label for=editCustomerTelephone>Telephone</label><input class=\"form-control validate\" name=editCustomerTelephone id=editCustomerTelephone placeholder=Telephone ng-model=customer.telephone required minlength=7 maxlength=15><div class=help-block ng-messages=customerEditForm.editCustomerTelephone.$error ng-if=!customerEditForm.editCustomerTelephone.$pristine><div ng-message=required>You must supply a telephone number</div><div ng-message=minlength>Telephone Number too short</div><div ng-message=maxlength>Telephone Number too long</div><div ng-message=pattern>Invalid Telephone</div></div></div><div class=form-group ng-class=\"{ 'has-error' : customerEditForm.editCustomerEmail.$invalid && !customerEditForm.editCustomerEmail.$pristine }\"><label for=editCustomerEmail>Email</label><input class=\"form-control validate\" name=editCustomerEmail id=editCustomerEmail placeholder=Email ng-model=customer.email required minlength=6 maxlength=100 ng-pattern=\"/^.+@.+\\..+$/\"><div class=help-block ng-messages=customerEditForm.editCustomerEmail.$error ng-if=!customerEditForm.editCustomerEmail.$pristine><div ng-message=required>You must supply an email address</div><div ng-message=minlength>Email Address too short</div><div ng-message=maxlength>Email Address too long</div><div ng-message=pattern>Invalid email address</div></div></div><div class=form-group ng-class=\"{ 'has-error' : customerEditForm.editCustomerUrl.$invalid && !customerEditForm.editCustomerUrl.$pristine }\"><label for=editCustomerUrl>Url</label><input class=\"form-control validate\" name=editCustomerUrl id=editCustomerUrl placeholder=URL ng-model=customer.url minlength=7 maxlength=255><div class=help-block ng-messages=customerEditForm.editCustomerUrl.$error ng-if=!customerEditForm.editCustomerUrl.$pristine><div ng-message=minlength>URL too short</div><div ng-message=maxlength>URL too long</div><div ng-message=pattern>Invalid URL</div></div></div><div class=form-group uib-dropdown is-open=status.isopen><label>Classification</label><ui-select ng-model=customer.category theme=selectize title=\"Select a Classification\"><ui-select-match placeholder=\"Select a Classification\">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"category in categories | filter: $select.search\"><span ng-bind-html=\"category.name | highlight: $select.search\"></span> <small ng-bind-html=\"category.code | highlight: $select.search\"></small></ui-select-choices></ui-select></div><div class=form-group><label for=editCustomerNotes>Notes</label><textarea type=text class=\"form-control validate\" name=editCustomerNotes id=editCustomerNotes placeholder=Notes ng-model=customer.notes maxlength=1024></textarea><div class=help-block ng-messages=customerEditForm.editCustomerNotes.$error ng-if=!customerEditForm.editCustomerNotes.$pristine><div ng-message=maxlength>Notes are too long</div></div></div><div class=form-group><button class=\"btn btn-primary\" ng-click=saveCustomer() ng-disabled=customerEditForm.$invalid>Save Customer</button></div></form></div></div></div>");
  $templateCache.put("views/customerNew.html",
    "<div class=container><div class=row><div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\"><form class=form-horizontal name=customerNewForm ng-submit=submitCustomerNew() novalidate><div class=form-group ng-class=\"{ 'has-error' : customerNewForm.newCustomerName.$invalid && !customerNewForm.newCustomerName.$pristine }\"><label for=newCustomerName>Name</label><input class=\"form-control validate\" name=newCustomerName id=newCustomerName placeholder=Name ng-model=customer.name required minlength=3 maxlength=100><div class=help-block ng-messages=customerNewForm.newCustomerName.$error ng-if=!customerNewForm.newCustomerName.$pristine><div ng-message=required>You must supply a company name</div><div ng-message=minlength>Company Name too short</div><div ng-message=maxlength>Company Name too long</div></div></div><div class=form-group ng-class=\"{ 'has-error' : customerNewForm.newCustomerAddress1.$invalid && !customerNewForm.newCustomerAddress1.$pristine }\"><label for=newCustomerAddress1>Address Line 1</label><input class=\"form-control validate\" name=newCustomerAddress1 id=newCustomerAddress1 placeholder=Address ng-model=customer.address1 required minlength=3 maxlength=100><div class=help-block ng-messages=customerNewForm.newCustomerAddress1.$error ng-if=!customerNewForm.newCustomerAddress1.$pristine><div ng-message=required>You must supply a first line address</div><div ng-message=minlength>Address too short</div><div ng-message=maxlength>Address too long</div></div></div><div class=form-group><label for=newCustomerAddress2>Address Line 2</label><input class=\"form-control validate\" name=newCustomerAddress2 id=newCustomerAddress2 placeholder=Address ng-model=customer.address2></div><div class=form-group><label for=newCustomerTown>Town</label><input class=\"form-control validate\" name=newCustomerTown id=newCustomerTown placeholder=Town ng-model=customer.town></div><div class=form-group><label for=newCustomerCounty>County</label><input class=\"form-control validate\" name=newCustomerCounty id=newCustomerCounty placeholder=County ng-model=customer.county></div><div class=form-group ng-class=\"{ 'has-error' : customerNewForm.newCustomerPostcode.$invalid && !customerNewForm.newCustomerPostcode.$pristine }\"><label for=newCustomerPostcode>Postcode</label><input class=\"form-control validate\" name=newCustomerPostcode id=newCustomerPostcode placeholder=Postcode ng-model=customer.postcode required minlength=5 maxlength=8><div class=help-block ng-messages=customerNewForm.newCustomerPostcode.$error ng-if=!customerNewForm.newCustomerPostcode.$pristine><div ng-message=required>You must supply a postcode</div><div ng-message=minlength>Postcode too short</div><div ng-message=maxlength>Postcode too long</div><div ng-message=pattern>Invalid Postcode</div></div></div><div class=form-group ng-class=\"{ 'has-error' : customerNewForm.newCustomerTelephone.$invalid && !customerNewForm.newCustomerTelephone.$pristine }\"><label for=newCustomerTelephone>Telephone</label><input class=\"form-control validate\" name=newCustomerTelephone id=newCustomerTelephone placeholder=Telephone ng-model=customer.telephone required minlength=7 maxlength=15><div class=help-block ng-messages=customerNewForm.newCustomerTelephone.$error ng-if=!customerNewForm.newCustomerTelephone.$pristine><div ng-message=required>You must supply a telephone number</div><div ng-message=minlength>Telephone Number too short</div><div ng-message=maxlength>Telephone Number too long</div><div ng-message=pattern>Invalid Telephone</div></div></div><div class=form-group ng-class=\"{ 'has-error' : customerNewForm.newCustomerEmail.$invalid && !customerNewForm.newCustomerEmail.$pristine }\"><label for=newCustomerEmail>Email</label><input class=\"form-control validate\" name=newCustomerEmail id=newCustomerEmail placeholder=Email ng-model=customer.email required minlength=6 maxlength=100 ng-pattern=\"/^.+@.+\\..+$/\"><div class=help-block ng-messages=customerNewForm.newCustomerEmail.$error ng-if=!customerNewForm.newCustomerEmail.$pristine><div ng-message=required>You must supply an email address</div><div ng-message=minlength>Email Address too short</div><div ng-message=maxlength>Email Address too long</div><div ng-message=pattern>Invalid email address</div></div></div><div class=form-group ng-class=\"{ 'has-error' : customerNewForm.newCustomerUrl.$invalid && !customerNewForm.newCustomerUrl.$pristine }\"><label for=newCustomerUrl>Url</label><input class=\"form-control validate\" name=newCustomerUrl id=newCustomerUrl placeholder=URL ng-model=customer.url minlength=7 maxlength=255><div class=help-block ng-messages=customerNewForm.newCustomerUrl.$error ng-if=!customerNewForm.newCustomerUrl.$pristine><div ng-message=minlength>URL too short</div><div ng-message=maxlength>URL too long</div><div ng-message=pattern>Invalid URL</div></div></div><div class=form-group uib-dropdown is-open=status.isopen><label>Classification</label><ui-select ng-model=customer.category theme=selectize title=\"Select a Classification\"><ui-select-match placeholder=\"Select a Classification\">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"category in categories | filter: $select.search\"><span ng-bind-html=\"category.name | highlight: $select.search\"></span> <small ng-bind-html=\"category.code | highlight: $select.search\"></small></ui-select-choices></ui-select></div><div class=form-group><label for=newCustomerNotes>Notes</label><textarea type=text class=\"form-control validate\" name=newCustomerNotes id=newCustomerNotes placeholder=Notes ng-model=customer.notes maxlength=1024></textarea><div class=help-block ng-messages=customerNewForm.newCustomerNotes.$error ng-if=!customerNewForm.newCustomerNotes.$pristine><div ng-message=maxlength>Notes are too long</div></div></div><div class=form-group><button class=\"btn btn-primary\" ng-click=submitCustomerNew() ng-disabled=customerNewForm.$invalid>Save Customer</button></div></form></div></div></div>");
  $templateCache.put("views/customerSearch.html",
    "<div class=container><div class=row><div class=\"col-xs-12 col-sm-12 col-md-10 col-lg-8 col-md-offset-1 col-lg-offset-2\"><form class=form-horizontal name=customerSearchForm ng-submit=searchCustomer() novalidate><div class=form-group ng-class=\"{ 'has-error' : customerSearchForm.customerNameSearch.$invalid && !customerSearchForm.customerNameSearch.$pristine }\"><label for=customerNameSearch>Name</label><input class=\"form-control validate\" name=customerNameSearch id=customerNameSearch placeholder=Name ng-model=search.customerName required><div class=help-block ng-messages=customerSearchForm.customerNameSearch.$error ng-if=!customerSearchForm.customerNameSearch.$pristine><div ng-message=required>Search name is required</div></div></div><div class=form-group><button class=\"btn btn-primary\" ng-click=searchCustomer() ng-disabled=customerSearchForm.$invalid>Search</button></div></form><div layout=column><ul class=list-group><li class=list-group-item ng-repeat=\"result in search.results\"><a href=#/customer/12345 class=\"list-group-item list-group-item-action active\"><h5 class=list-group-item-heading>{{result.name}}</h5></a></li></ul></div></div></div></div>");
  $templateCache.put("views/dashboard.html",
    "<md-content class=md-padding layout-xs=column layout=row><div flex-xs flex-gt-xs=50 layout=column><md-card><md-card-content><div><highchart id=weekOrdersChart config=weekOrdersConfig></highchart></div></md-card-content></md-card></div><div flex-xs flex-gt-xs=50 layout=column><md-card><md-card-content><div><highchart id=statusCountChart config=statusCountConfig></highchart></div></md-card-content></md-card></div></md-content>");
  $templateCache.put("views/directives/activeSideNav.html",
    "<nav class=\"navbar navbar-static-top navbar-inverse\"><div class=container-fluid><div class=navbar-header><button type=button class=navbar-toggle ng-init=\"navCollapsed = true\" ng-click=\"navCollapsed = !navCollapsed\" data-toggle=collapse data-target=.navbar-collapse><span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href=#><span class=\"glyphicon glyphicon-home\"></span> Service Manager</a></div><div class=\"collapse navbar-collapse\" id=bs-example-navbar-collapse-6 ng-class=\"{'in': !navCollapsed}\"><ul class=\"nav navbar-nav\"><li ng-repeat=\"navLink in navLinks\"><a ng-href={{navLink.link}}>{{navLink.title}}</a></li></ul></div></div></nav>");
  $templateCache.put("views/directives/currentUser.html",
    "<i class=material-icons>perm_identity</i>");
  $templateCache.put("views/login.html",
    "<div class=container><div class=row><div class=service-center-container><div class=service-centered><div class=\"col-xs-12 col-sm-6 col-md-4 col-sm-offset-3 col-md-offset-4\"><div class=login-container><form name=loginForm><div class=form-group><h3>Service Manager Login</h3></div><div class=form-group><label for=logonOrganisation>Organisation</label><input class=form-control id=logonOrganisation placeholder=\"Enter organisation\" ng-model=user.organisation required minlength=3 maxlength=50></div><div class=form-group><label for=logonEmail>Email Address</label><input type=email class=form-control id=logonEmail placeholder=\"Enter email\" ng-model=user.logon required minlength=10 maxlength=100 ng-pattern=\"/^.+@.+\\..+$/\"></div><div class=form-group><label for=logonPassword>Password</label><input type=password class=form-control id=logonPassword placeholder=\"Enter password\" ng-model=user.password required></div><div class=checkbox><label><input type=checkbox ng-model=user.rememberMe> Remember me</label></div><button type=submit class=\"btn btn-primary btn-block\" ng-click=submitLogon()>Login</button></form></div></div></div></div></div></div>");
  $templateCache.put("views/orderNew.html",
    "<div class=container><div class=row><div class=\"col-xs-12 col-sm-12 col-md-10 col-lg-8 col-md-offset-1 col-lg-offset-2\"><div><p>{{order.customer.name}}, {{order.customer.postcode}}</p></div><form name=newServiceForm class=form-horizontal><div class=\"form-group row\"><div class=col-sm-3><ui-select ng-model=newItem.product theme=selectize title=\"Select a Product\"><ui-select-match placeholder=\"Select a Product\">{{$select.selected.product.name}}</ui-select-match><ui-select-choices repeat=\"serviceProduct.product as serviceProduct in serviceProducts | filter: $select.search\"><span ng-bind-html=\"serviceProduct.product.name | highlight: $select.search\"></span> <small ng-bind-html=\"serviceProduct.product.code | highlight: $select.search\"></small></ui-select-choices></ui-select></div><div class=col-sm-3><ui-select ng-model=newItem.area theme=selectize title=\"Select an Area\"><ui-select-match placeholder=\"Select an Area\">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"area in areas | filter: $select.search\"><span ng-bind-html=\"area.name | highlight: $select.search\"></span> <small ng-bind-html=\"area.code | highlight: $select.search\"></small></ui-select-choices></ui-select></div><div class=col-sm-3><ui-select ng-model=newItem.heading theme=selectize title=\"Select a Heading\"><ui-select-match placeholder=\"Select a Heading\">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat=\"heading in headings | filter: $select.search\"><span ng-bind-html=\"heading.name | highlight: $select.search\"></span> <small ng-bind-html=\"heading.code | highlight: $select.search\"></small></ui-select-choices></ui-select></div><div class=\"btn-group col-sm-3\"><button id=single-button-new-item type=button class=\"btn btn-primary\" ng-click=addNewService()>Add</button></div></div></form><p ng-if=\"order.totalValue > 0\"></p><div layout=column><uib-accordion close-others={{orderItemsStatus.oneOrderItemAtATime}}><div uib-accordion-group class=panel-default ng-repeat=\"service in order.services\"><uib-accordion-heading>{{service.product.name}} {{service.area.name}} {{service.heading.name}} £{{service.product.price}}<i class=\"pull-right glyphicon glyphicon-pencil\"></i></uib-accordion-heading><div class=form-group><label>Company Name</label><input class=form-control placeholder=\"Company Name\" ng-model=service.advert.name></div><div class=form-group><label>Phone Number</label><input class=form-control placeholder=Telephone ng-model=service.advert.telephone></div><div class=form-group><label>Url</label><input class=form-control placeholder=URL ng-model=service.advert.url></div></div></uib-accordion><p>Total: £{{order.totalValue}}</p><button ng-disabled=\"order.totalValue == 0\" class=\"btn btn-primary btn-block\" ng-click=saveNewOrder()>Save Order</button></div></div></div></div>");
}]);
;angular.module('app', ['appTemplates', 'ui.router', 'config', 'restangular', 'angularSpinner', 'cgNotify', 'ipCookie', 'ngFileSaver','ui.bootstrap', 'ngMessages', 'ngAnimate', 'highcharts-ng', 'ngTouch', 'ui.select', 'ngSanitize'])

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
                },
                customerEditView = {
                    url: '/customer/:customerId',
                    templateUrl: 'views/customerEdit.html',
                    controller: 'CustomerEditController',
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
                .state('customerEdit', customerEditView)
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
;'use strict';

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
;'use strict';

angular.module('app')
    .controller('CustomerNewController', ['$scope', '$state', 'userService', 'notify', function ($scope, $state, userService, notify) {

        function initialise(){
            $scope.customer = {};
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

        $scope.submitCustomerNew = function(){
            $state.go('dashboard');
        };

        initialise();
    }]);
;'use strict';

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
;'use strict';

angular.module('app')
    .controller('DashboardController', ['$scope', '$state', 'ReceiptApi', 'notify', function ($scope, $state, ReceiptApi, notify) {

        function initialise(){
            $scope.stats = {
                receiptsLastSevenDays: 5,
                receiptsLastMonth: 23
            };

            $scope.weekOrdersConfig = {
                options: {
                    chart: {type: 'line'},
                    tooltip: {style: {padding: 10,fontWeight: 'bold'}
                    }
                },
                series: [{
                    name: 'Number of Orders',
                    data: [10, 15, 12, 8, 7, 0, 0],
                    color: '#0675c2'
                }],
                title: {text: 'Orders Per Day'},
                loading: false,
                xAxis: {
                    tickColor: '#fff',
                    title: {text: 'Day'},
                    categories: [
                        'Mon',
                        'Tue',
                        'Wed',
                        'Thu',
                        'Fri',
                        'Sat',
                        'Sun']
                },
                labels: {
                    formatter: function () {
                        return "<a ng-click='xLabelClick()'>" + this.value + "</a>";
                    },
                    useHTML: true
                },
                legend: {y: 5},
                useHighStocks: false
            };

            $scope.statusCountConfig = {
                options: {
                    chart: {type: 'pie'},
                    tooltip: {style: {padding: 10,fontWeight: 'bold'}}},
                series: [{
                    name: 'Status',
                    colorByPoint: true,
                    data: [{
                        name: 'Pending',
                        y: 10
                    }, {
                        name: 'SEO Production',
                        y: 8
                    }, {
                        name: 'Website Production',
                        y: 6
                    }, {
                        name: 'On Hold',
                        y: 5
                    }, {
                        name: 'Fault',
                        y: 1
                    }, {
                        name: 'Back to Rep',
                        y: 2
                    }, {
                        name: 'Complete',
                        y: 25
                    }]}],
                title: {text: 'Production Status'},
                loading: false,
                xAxis: {
                    tickColor: '#fff',
                    title: {text: 'Day'},
                    categories: [
                        'Pending',
                        'Seo Production',
                        'Website Production',
                        'On Hold',
                        'Fault',
                        'Back to Rep',
                        'Complete']
                },
                labels: {
                    formatter: function () {
                        return "<a ng-click='xLabelClick()'>" + this.value + "</a>";
                    },
                    useHTML: true
                },
                legend: {y: 5},
                useHighStocks: false
            };
        }

        $scope.navigateToList = function(){
            $state.go('editReceipts');
        };

        initialise();

    }]);
;'use strict';

angular.module('app')
    .controller('LoginController', ['$scope', 'notify', '$state', 'userService', function ($scope, notify, $state, userService) {

        function initialise(){
            if (userService.isLoggedIn()){
                $state.transitionTo('dashboard');
            }

            $scope.user = {
                organisation: 'Test Company',
                logon: 'guest@servicemanager.com',
                password: 'password',
                rememberMe: true
            };
        }

        $scope.submitLogon = function(){
            if (!$scope.loginForm.$invalid) {
                /*
                ReceiptApi.all('session').post($scope.user).then(function (res) {
                    // Successful login
                    userService.logIn($scope.values.username, res.access_token, res.role, res.campaign);
                    $state.transitionTo('newReceipt');
                }, function () {
                    // Unsuccessful Login
                    notify({ message:'Login Failed', duration:3000, classes:'alert-fail'} );
                });
                */
                if ($scope.user.logon === 'guest@servicemanager.com' && $scope.user.password === 'password') {
                    // Successful login
                    userService.logIn($scope.user.logon, 'ABCDE12345', $scope.user.organisation);
                    $state.go('dashboard');
                } else {
                    // Unsuccessful Login
                    notify({ message:'Login Failed', duration:3000, classes:'alert-fail'} );
                }
            }
        };

        initialise();
    }]);
;//'use strict';

angular.module('app')
    .controller('OrderNewController', ['$scope', '$state', 'userService', 'notify', function ($scope, $state, userService, notify) {

        var orderItemIndex = 0;

        function initialise(){
            $scope.order = {
                customer: {
                    name: 'Test Customer',
                    postcode: 'TE5 T01'
                },
                //services: [
                //    {area:'area1', heading:'heading1', product: {name: 'Website', price: 250, options: {icon: 'web'}}},
                //    {area:'area2', heading:'heading2', product: {name: 'SEO', price: 150, options: {icon: 'web'}}}
                //],
                services: [],
                totalValue: 0
            };
            $scope.orderItemsStatus = {
                orderItemOpen: false,
                oneOrderItemAtATime: true
            };
            $scope.newItem = {itemIndex: orderItemIndex};
            $scope.serviceProducts = [
                {product: {name: 'Website', price: 250, options: {icon: 'web'}}},
                {product: {name: 'SEO', price: 200, options: {icon: 'find_in_page'}}},
                {product: {name: 'Pay Per Click', price: 150, options: {icon: 'mouse'}}}
            ];
            $scope.areas = [
                {name: 'Aberdeen'},
                {name: 'Bury'},
                {name: 'Canterbury'},
                {name: 'Durham'},
                {name: 'Esher'},
                {name: 'Fulham'},
                {name: 'Great Yarmouth'},
                {name: 'Harrow'},
                {name: 'Islington'}
            ];
            $scope.headings = [
                {name: 'Accountants'},
                {name: 'Builders'},
                {name: 'Candlestick Makers'},
                {name: 'Dentists'},
                {name: 'Fishermen'},
                {name: 'Plumbers'}
            ];
        }

        $scope.submitOrderNew = function(){
            $state.go('dashboard');
        };

        $scope.addNewService = function(){
            $scope.order.services.push($scope.newItem);
            orderItemIndex++;
            calculateOrderValue();
            $scope.newItem = {itemIndex: orderItemIndex};
        };

        $scope.removeService = function(item){
            var index = $scope.order.services.indexOf(item);
            $scope.order.services.splice(index,1);
            orderItemIndex++;
            calculateOrderValue();
            $scope.newItem = {itemIndex: orderItemIndex};
        };

        function calculateOrderValue() {
            $scope.order.totalValue = _.sumBy($scope.order.services, function(service) { return service.product.price; });
        }

        $scope.saveNewOrder = function(){
            notify({ message: $scope.order, duration:5000, classes:'alert-success'} );
            $state.go('dashboard');
        };

        initialise();
    }]);
;'use strict';

angular.module('app')
    .directive('activeSideNav', function() {
        return {
            scope: false,
            restrict: 'E',
            templateUrl: 'views/directives/activeSideNav.html',
            controller: ['$scope', function($scope){
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
            }]
        };
    });

;'use strict';

angular.module('app')
    .directive('currentUser',function(){
        return {
            templateUrl: 'views/directives/currentUser.html'
        };
    });;'use strict';

angular.module('app')
    .directive('expHtmlDirective',function(){
        return {
            templateUrl: 'views/directives/directiveExampleHtmlTemplate.html'
        };
    });;'use strict';

angular.module('app')
    .directive('expInLineDirective',function(){
        return {
            template: 'Customer Name: {{customer.name}}'
        };
    });'use strict';

angular.module('app')
    .directive('focus', ['$timeout', '$parse', function($timeout, $parse) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                scope.$watch(attrs.focus, function(newValue, oldValue) {
                    if (newValue) { element[0].focus(); }
                });
                element.bind("blur", function(e) {
                    $timeout(function() {
                        scope.$apply(attrs.focus + "=false");
                    }, 0);
                });
                element.bind("focus", function(e) {
                    $timeout(function() {
                        scope.$apply(attrs.focus + "=true");
                    }, 0);
                })
            }
        }
    }]);;'use strict';

/**
 * Add pickadate directive
 * Type text is mandatory
 * Example:
 <input input-date
 type="text"
 name="created"
 id="inputCreated"
 ng-model="currentTime"
 format="dd/mm/yyyy"
 months-full="{{ monthFr }}"
 months-short="{{ monthShortFr }}"
 weekdays-full="{{ weekdaysFullFr }}"
 weekdays-short="{{ weekdaysShortFr }}"
 weekdays-letter="{{ weekdaysLetterFr }}"
 disable="disable"
 today="today"
 clear="clear"
 close="close"
 on-start="onStart()"
 on-render="onRender()"
 on-open="onOpen()"
 on-close="onClose()"
 on-set="onSet()"
 on-stop="onStop()" />
 */
angular.module('app')
    .directive('inputDate', ["$compile", "$timeout", function ($compile, $timeout) {
        // Fix for issue 46. This gotta be a bug in the materialize code, but this fixes it.
        var style = $('<style>#inputCreated_root {outline: none;}</style>');
        $('html > head').append(style);

        // Define Prototype Date format
        // Use like this
        // today = new Date();
        // var dateString = today.format("dd-m-yy");
        var dateFormat = function () {

            var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
                timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                timezoneClip = /[^-+\dA-Z]/g,
                pad = function (val, len) {
                    val = String(val);
                    len = len || 2;
                    while (val.length < len) {
                        val = "0" + val;
                    }
                    return val;
                };

            // Regexes and supporting functions are cached through closure
            return function (date, mask, utc) {

                var dF = dateFormat;

                // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
                if (arguments.length === 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
                    mask = date;
                    date = undefined;
                }

                // Passing date through Date applies Date.parse, if necessary
                date = date ? new Date(date) : new Date();
                if (isNaN(date)) throw SyntaxError("invalid date");

                mask = String(dF.masks[mask] || mask || dF.masks["default"]);

                // Allow setting the utc argument via the mask
                if (mask.slice(0, 4) == "UTC:") {
                    mask = mask.slice(4);
                    utc = true;
                }

                var _ = utc ? "getUTC" : "get",
                    d = date[ _ + "Date" ](),
                    D = date[ _ + "Day" ](),
                    m = date[ _ + "Month" ](),
                    y = date[ _ + "FullYear" ](),
                    H = date[ _ + "Hours" ](),
                    M = date[ _ + "Minutes" ](),
                    s = date[ _ + "Seconds" ](),
                    L = date[ _ + "Milliseconds" ](),
                    o = utc ? 0 : date.getTimezoneOffset(),
                    flags = {
                        d:    d,
                        dd:   pad(d),
                        ddd:  dF.i18n.dayNames[D],
                        dddd: dF.i18n.dayNames[D + 7],
                        m:    m + 1,
                        mm:   pad(m + 1),
                        mmm:  dF.i18n.monthNames[m],
                        mmmm: dF.i18n.monthNames[m + 12],
                        yy:   String(y).slice(2),
                        yyyy: y,
                        h:    H % 12 || 12,
                        hh:   pad(H % 12 || 12),
                        H:    H,
                        HH:   pad(H),
                        M:    M,
                        MM:   pad(M),
                        s:    s,
                        ss:   pad(s),
                        l:    pad(L, 3),
                        L:    pad(L > 99 ? Math.round(L / 10) : L),
                        t:    H < 12 ? "a"  : "p",
                        tt:   H < 12 ? "am" : "pm",
                        T:    H < 12 ? "A"  : "P",
                        TT:   H < 12 ? "AM" : "PM",
                        Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                        o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                        S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
                    };

                return mask.replace(token, function ($0) {
                    return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
                });
            };
        }();

        // Some common format strings
        dateFormat.masks = {
            "default":      "ddd mmm dd yyyy HH:MM:ss",
            shortDate:      "m/d/yy",
            mediumDate:     "mmm d, yyyy",
            longDate:       "mmmm d, yyyy",
            fullDate:       "dddd, mmmm d, yyyy",
            shortTime:      "h:MM TT",
            mediumTime:     "h:MM:ss TT",
            longTime:       "h:MM:ss TT Z",
            isoDate:        "yyyy-mm-dd",
            isoTime:        "HH:MM:ss",
            isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        };

        // Internationalization strings
        dateFormat.i18n = {
            dayNames: [
                "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
                "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
            ],
            monthNames: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
                "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
            ]
        };

        // For convenience...
        Date.prototype.format = function (mask, utc) {
            return dateFormat(this, mask, utc);
        };

        /**
         * Validate date object
         * @param  {Date}  date
         * @return {Boolean}
         */
        var isValidDate = function(date) {
            if( Object.prototype.toString.call(date) === '[object Date]' ) {
                return !isNaN(date.getTime());
            }
            return false;
        };

        return {
            require: 'ngModel',
            scope: {
                container: "@",
                format: "@",
                formatSubmit: "@",
                monthsFull: "@",
                monthsShort: "@",
                weekdaysFull: "@",
                weekdaysShort: "@",
                weekdaysLetter: "@",
                firstDay: "=",
                disable: "=",
                today: "=",
                clear: "=",
                close: "=",
                selectYears: "=",
                onStart: "&",
                onRender: "&",
                onOpen: "&",
                onClose: "&",
                onSet: "&",
                onStop: "&",
                ngReadonly: "=?",
                max: "@",
                min: "@"
            },
            link: function (scope, element, attrs, ngModelCtrl) {

                ngModelCtrl.$formatters.unshift(function (modelValue) {
                    if (modelValue) {
                        var date = new Date(modelValue);
                        return (angular.isDefined(scope.format)) ? date.format(scope.format) : date.format('d mmmm, yyyy');
                    }
                    return null;
                });

                var monthsFull = (angular.isDefined(scope.monthsFull)) ? scope.$eval(scope.monthsFull) : undefined,
                    monthsShort = (angular.isDefined(scope.monthsShort)) ? scope.$eval(scope.monthsShort) : undefined,
                    weekdaysFull = (angular.isDefined(scope.weekdaysFull)) ? scope.$eval(scope.weekdaysFull) : undefined,
                    weekdaysShort = (angular.isDefined(scope.weekdaysShort)) ? scope.$eval(scope.weekdaysShort) : undefined,
                    weekdaysLetter = (angular.isDefined(scope.weekdaysLetter)) ? scope.$eval(scope.weekdaysLetter) : undefined;


                $compile(element.contents())(scope);
                if (!(scope.ngReadonly)) {
                    $timeout(function () {
                        var options = {
                            container : scope.container,
                            format: (angular.isDefined(scope.format)) ? scope.format : undefined,
                            formatSubmit: (angular.isDefined(scope.formatSubmit)) ? scope.formatSubmit : undefined,
                            monthsFull: (angular.isDefined(monthsFull)) ? monthsFull : undefined,
                            monthsShort: (angular.isDefined(monthsShort)) ? monthsShort : undefined,
                            weekdaysFull: (angular.isDefined(weekdaysFull)) ? weekdaysFull : undefined,
                            weekdaysShort: (angular.isDefined(weekdaysShort)) ? weekdaysShort : undefined,
                            weekdaysLetter: (angular.isDefined(weekdaysLetter)) ? weekdaysLetter : undefined,
                            firstDay: (angular.isDefined(scope.firstDay)) ? scope.firstDay : 0,
                            disable: (angular.isDefined(scope.disable)) ? scope.disable : undefined,
                            today: (angular.isDefined(scope.today)) ? scope.today : undefined,
                            clear: (angular.isDefined(scope.clear)) ? scope.clear : undefined,
                            close: (angular.isDefined(scope.close)) ? scope.close : undefined,
                            selectYears: (angular.isDefined(scope.selectYears)) ? scope.selectYears : undefined,
                            onStart: (angular.isDefined(scope.onStart)) ? function(){ scope.onStart(); } : undefined,
                            onRender: (angular.isDefined(scope.onRender)) ? function(){ scope.onRender(); } : undefined,
                            onOpen: (angular.isDefined(scope.onOpen)) ? function(){ scope.onOpen(); } : undefined,
                            onClose: (angular.isDefined(scope.onClose)) ? function(){ scope.onClose(); } : undefined,
                            onSet: (angular.isDefined(scope.onSet)) ? function(){ scope.onSet(); } : undefined,
                            onStop: (angular.isDefined(scope.onStop)) ? function(){ scope.onStop(); } : undefined
                        };
                        if (!scope.container) {
                            delete options.container;
                        }
                        var pickadateInput = element.pickadate(options);
                        //pickadate API
                        var picker = pickadateInput.pickadate('picker');

                        //watcher of min, max, and disabled dates
                        scope.$watch('max', function(newMax) {
                            if( picker ) {
                                var maxDate = new Date(newMax);
                                picker.set({max: isValidDate(maxDate) ? maxDate : false});
                            }
                        });
                        scope.$watch('min', function(newMin) {
                            if( picker ) {
                                var minDate = new Date(newMin);
                                picker.set({min: isValidDate(minDate) ? minDate : false});
                            }
                        });
                        scope.$watch('disable', function(newDisabled) {
                            if( picker ) {
                                var disabledDates = angular.isDefined(newDisabled) && angular.isArray(newDisabled) ? newDisabled : false;
                                picker.set({disable: disabledDates});
                            }
                        });
                    });
                }
            }
        };
    }]);
;'use strict';

angular.module('app')
    .directive('onLastRepeat', function() {
        return function(scope, element, attrs) {
            if (scope.$last)
                setTimeout(function() {
                    scope.$emit('onRepeatLast', element, attrs);
                }, 1);
        };
    });;'use strict';

angular.module('app')
    .directive('registerDomComponents', function() {
        return {
            restrict: 'A',
            link: function() {
                $('.materialboxed').materialbox();
            }
        }
    });;(function () {
    'use strict';

    angular.module('app')
        .directive('selectOption', materialSelect);
    materialSelect.$inject = ['$timeout'];

    function materialSelect($timeout) {
        var directive = {
            link: link,
            restrict: 'A',
            require: '?ngModel'
        };

        function link(scope, element, attrs, ngModel) {
            $timeout(create);

            if (ngModel) {
                ngModel.$render = create;
            }

            function create() {
                element.material_select();
            }

            //if using materialize v0.96.0 use this
            element.one('$destroy', function () {
                element.material_select('destroy');
            });
        }

        return directive;
    }

})();;'use strict';

angular.module('app')
    .factory('ReceiptApi', ['Restangular', 'RECEIPT_API_URL', function (Restangular, url) {
        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setBaseUrl(url);
            RestangularConfigurer.addRequestInterceptor(function (element, operation, what) {
                if (operation === 'post' && what === 'info') {
                    //post web request to the info endpoint
                }

                return element;
            });

            RestangularConfigurer.addResponseInterceptor(function (data, operation, what) {

                if (operation === 'get' && what === 'info') {
                    //get web request from the info endpoint
                }

                return data;
            });
        });
    }]);
;'use strict';

angular.module('app')
    .service('userService', ['ipCookie', 'ReceiptApi', '$q', function userService(ipCookie, ReceiptApi, $q) {

        var loggedIn = false;
        var authTokenIsValid = false;


        this.getCurrentUser = function () {
            return ipCookie('currentUser');
        };

        this.setCurrentUser = function (user) {
            ipCookie('currentUser', user, { expires: 1 });
            authTokenIsValid = true;
        };

        this.logIn = function (username, token, organisation) {

            var user = {
                username: username,
                token: token,
                organisation: organisation
            };

            this.setCurrentUser(user);

            // these could be methods in the future
            loggedIn = true;
        };

        this.getToken = function () {
            var user = this.getCurrentUser();

            if (user) {
                return user.token;
            } else {
                return false;
            }
        };

        this.getOrganisation = function () {
            var user = this.getCurrentUser();

            if (user) {
                return user.organisation;
            } else {
                return false;
            }
        };

        this.checkTokenValidity = function (token) {

            var defer = $q.defer();

            if (authTokenIsValid) {

                defer.resolve(true);

            } else {

                var dis = this;
                //ReceiptApi.one('session', token).get().then(function () {
                if (token === 'ABCDE12345'){
                    loggedIn = true;
                    authTokenIsValid = true;
                    defer.resolve(true);
                } else {
                   //}, function () {
                    //    dis.logout();
                    defer.resolve(false);
                    //});
                }
            }

            return defer.promise;
        };

        this.isLoggedIn = function () {

            var isLoggedIn = $q.defer();
            var token = this.getToken();

            if (token) {
                this.checkTokenValidity(token).then(isLoggedIn.resolve);

            } else {
                ipCookie.remove('currentUser');
                isLoggedIn.resolve(false);

            }

            return isLoggedIn.promise;

        };

        this.logout = function () {
            var defer = $q.defer();
            var token = this.getToken();

            if (!this.getCurrentUser()) {
                defer.resolve(false);
            }

            //ReceiptApi.one('session', token).remove().then(function () {
                // success
                ipCookie.remove('currentUser');

                loggedIn = false;

                authTokenIsValid = false;

                defer.resolve(true);

            //}, function () {
            //    // failure
            //    defer.resolve(false);
            //});

            return defer.promise;
        };

    }]);;'use strict';

angular.module('app')
    .factory('_', ['$window', '$state', function($window, $state) {

        if(!$window._){
            $state.go('login');
        }
        return $window._;

    }]);
describe('LoginController', function() {
    beforeEach(module('app'));

    var scope, controller, $state, rootScope;

    beforeEach(inject(function($rootScope, $controller, _$state_, _$rootScope_){
        rootScope = _$rootScope_;
        scope = rootScope.$new();
        $state = _$state_;
        controller = $controller('LoginController', { $scope: scope });
    }));

    describe('incorrect login details', function() {
        it('fails authentication and remain at the logon state', function() {
            scope.loginForm = {};
            scope.user = {
                organisation: 'Test Company',
                logon: 'guest@servicemanager.com',
                password: 'badpassword',
                rememberMe: true
            };
            scope.submitLogon();
            rootScope.$digest();
            expect($state.current.name).toBe('login');
        });
    });

    describe('correct login details', function() {
        it('passes authentication and goes to the dashboard state', function() {
            scope.loginForm = {};
            scope.user = {
                organisation: 'Test Company',
                logon: 'guest@servicemanager.com',
                password: 'password',
                rememberMe: true
            };
            scope.submitLogon();
            rootScope.$digest();
            expect($state.current.name).toBe('dashboard');
        });
    });
});
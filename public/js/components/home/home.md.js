((app) => {
    app.config(($stateProvider) => {
        $stateProvider.state('app.home', {
            url:'/',
            template: '<home />'
        })
    });

})(angular.module('app.home', ['ui.router']));
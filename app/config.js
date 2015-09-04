export default (ngModule, Angular) => {
    ngModule.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.hashPrefix('!');

        $urlRouterProvider.otherwise('home');

        $stateProvider.state('home', {
            url: '/home',
            templateProvider: ['$q', function($q) {
                var deferred = $q.defer();
                require.ensure(['./states/home/HomeView.html'], function() {
                    var template = require('./states/home/HomeView.html');
                    deferred.resolve(template);
                });
                return deferred.promise;
            }],
            controller: 'HomeCtrl',
            controllerAs: 'test'
        })
        .state('about', {
            url: '/about',
            templateProvider: ['$q', function($q) {
                var deferred = $q.defer();
                require.ensure(['./states/about/AboutView.html'], function() {
                    var template = require('./states/about/AboutView.html');
                    deferred.resolve(template);
                });
                return deferred.promise;
            }],
            controller: 'AboutCtrl',
            controllerAs: 'test'
        })
        .state('blog', {
            url: '/blog',
            templateProvider: ['$q', function($q) {
                var deferred = $q.defer();
                require.ensure(['./states/blog/BlogView.html'], function() {
                    var template = require('./states/blog/BlogView.html');
                    deferred.resolve(template);
                });
                return deferred.promise;
            }],
            controller: 'BlogCtrl',
            controllerAs: 'test'
        })
        .state('blogs', {
            url: '/blogs/:name',
            templateProvider: ['$q', function($q) {
                var deferred = $q.defer();
                require.ensure(['./states/blogs/BlogsView.html'], function() {
                    var template = require('./states/blogs/BlogsView.html');
                    deferred.resolve(template);
                });
                return deferred.promise;
            }],
            controller: 'BlogsCtrl',
            controllerAs: 'test'
        })
        .state('contact', {
            url: '/contact',
            templateProvider: ['$q', function($q) {
                var deferred = $q.defer();
                require.ensure(['./states/contact/ContactView.html'], function() {
                    var template = require('./states/contact/ContactView.html');
                    deferred.resolve(template);
                });
                return deferred.promise;
            }],
            controller: 'ContactCtrl',
            controllerAs: 'test'
        });
    }]);
}
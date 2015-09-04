export default (ngModule, Angular) => {
    ngModule.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.hashPrefix('!');

        $urlRouterProvider.otherwise('home');

        $stateProvider.state('about', {
            url: '/about',
            templateProvider: ['$q', function($q) {
                var deferred = $q.defer();
                require.ensure(['./states/about/aboutView.html'], function() {
                    var template = require('./states/about/aboutView.html');
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
                require.ensure(['./states/blog/blogView.html'], function() {
                    var template = require('./states/blog/blogView.html');
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
                require.ensure(['./states/blogs/blogsView.html'], function() {
                    var template = require('./states/blogs/blogsView.html');
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
                require.ensure(['./states/contact/contactView.html'], function() {
                    var template = require('./states/contact/contactView.html');
                    deferred.resolve(template);
                });
                return deferred.promise;
            }],
            controller: 'ContactCtrl',
            controllerAs: 'test'
        })
        .state('home', {
            url: '/home',
            templateProvider: ['$q', function($q) {
                var deferred = $q.defer();
                require.ensure(['./states/home/homeView.html'], function() {
                    var template = require('./states/home/homeView.html');
                    deferred.resolve(template);
                });
                return deferred.promise;
            }],
            controller: 'HomeCtrl',
            controllerAs: 'test'
        });
    }]);
}
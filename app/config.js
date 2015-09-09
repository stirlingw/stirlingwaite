export default (ngModule, Angular) => {
    ngModule.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
        //$locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');

        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', {
            url: '/home',
            templateProvider: ['$q', function($q) {
                let deferred = $q.defer();
                require.ensure(['./../app/states/home/homeView.html'], function() {
                    var template = require('./../app/states/home/homeView.html');
                    deferred.resolve(template);
                });
                return deferred.promise;
            }],
            controller: 'HomeCtrl',
            controllerAs: 'test',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure(['./../app/states/home/homeModule.js'], function() {
                    var module = require('./../app/states/home/homeModule.js')(Angular);
                    $ocLazyLoad.load({
                        name: 'homeApp'
                    });
                    deferred.resolve(module);
                });

                return deferred.promise;
            }]
        })
        .state('about', {
            url: '/about',
            templateProvider: ['$q', function($q) {
                let deferred = $q.defer();
                require.ensure(['./../app/states/about/aboutView.html'], function() {
                    var template = require('./../app/states/about/aboutView.html');
                    deferred.resolve(template);
                });
                return deferred.promise;
            }],
            controller: 'AboutCtrl',
            controllerAs: 'test',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure(['./../app/states/about/aboutModule.js'], function() {
                    var module = require('./../app/states/about/aboutModule.js')(Angular);
                    $ocLazyLoad.load({
                        name: 'aboutApp'
                    });
                    deferred.resolve(module);
                });

                return deferred.promise;
            }]
        })
        .state('blog', {
            url: '/blog',
            templateProvider: ['$q', function($q) {
                let deferred = $q.defer();
                require.ensure(['./../app/states/blog/blogView.html'], function() {
                    var template = require('./../app/states/blog/blogView.html');
                    deferred.resolve(template);
                });
                return deferred.promise;
            }],
            controller: 'BlogCtrl',
            controllerAs: 'test',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure(['./../app/states/blog/blogModule.js'], function() {
                    var module = require('./../app/states/blog/blogModule.js')(Angular);
                    $ocLazyLoad.load({
                        name: 'blogApp'
                    });
                    deferred.resolve(module);
                });

                return deferred.promise;
            }]
        })
        .state('blogs', {
            url: '/blogs/:name',
            templateProvider: ['$q', function($q) {
                let deferred = $q.defer();
                require.ensure(['./../app/states/blogs/blogsView.html'], function() {
                    var template = require('./../app/states/blogs/blogsView.html');
                    deferred.resolve(template);
                });
                return deferred.promise;
            }],
            controller: 'BlogsCtrl',
            controllerAs: 'test',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure(['./../app/states/blogs/blogsModule.js'], function() {
                    var module = require('./../app/states/blogs/blogsModule.js')(Angular);
                    $ocLazyLoad.load({
                        name: 'blogsApp'
                    });
                    deferred.resolve(module);
                });

                return deferred.promise;
            }]
        })
        .state('contact', {
            url: '/contact',
            templateProvider: ['$q', function($q) {
                let deferred = $q.defer();
                require.ensure(['./../app/states/contact/contactView.html'], function() {
                    var template = require('./../app/states/contact/contactView.html');
                    deferred.resolve(template);
                });
                return deferred.promise;
            }],
            controller: 'ContactCtrl',
            controllerAs: 'test',
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure(['./../app/states/contact/contactModule.js'], function() {
                    var module = require('./../app/states/contact/contactModule.js')(Angular);
                    $ocLazyLoad.load({
                        name: 'contactApp'
                    });
                    deferred.resolve(module);
                });

                return deferred.promise;
            }]
        });
    }]);
}
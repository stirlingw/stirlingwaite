## Background

I didn't want to use a database or API for this website for simplistic reasons.
I did however want something easy to use, and markdown seemed to be the next reasonable
solution.

## Prep 

Some prep work is needed before we can add a mark down file into angular. 
    
    npm install angular-ui-router --save
    npm install raw-loader --save
    npm install marked --save
    npm install lodash --save

## Add Router
    ngModule.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
        //$locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    
        $urlRouterProvider.otherwise('home');
    
        $stateProvider.state('blogs', {
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
        });
    }]);
    
## Add Service

    ngModule.service('SuperModelService', ['$http','$q',
        function( $http, $q) {
            'use strict';
            var Service = {};
    
            var foundBlogs = [
                {
                    id: 0,
                    date: '2015-09-03',
                    title: 'Marked Down With Marked',
                    subTitle: 'And Webpack Loaders',
                    name: "marked-down-with-marked",
                    file: 'marked-down-with-marked.md',
                    img: 'marked-down-with-marked.jpg'
                }
            ];
    
            Service.getBlog = function(blogName){
                var blog = _.findWhere(foundBlogs, {name: blogName});
                return blog;
            };
    
            Service.getBlogs = function(){
                return foundBlogs;
            };
    
            return Service;
        }]);

## Add Controller

The thing to note in here is the following:

marked.setOptions({})
var fileContent = require("raw!./md/" + $scope.blog.file);
var markedContent = marked(fileContent);
$scope.fileContent = $sce.trustAsHtml(markedContent);

Here is the code:
    
    var marked = require('marked');
    
    ngModule.controller('BlogsCtrl', ['$scope', '$sce', '$state', 'SuperModelService',
        function($scope, $sce, $state, SuperModelService) {

            $scope.blog = SuperModelService.getBlog($state.params.name);

            //console.log($scope.blog);

            if($scope.blog !== undefined) {
                marked.setOptions({
                    renderer: new marked.Renderer(),
                    gfm: true,
                    tables: true,
                    breaks: false,
                    pedantic: false,
                    sanitize: true,
                    smartLists: true,
                    smartypants: false
                });

                var fileContent = require("raw!./md/" + $scope.blog.file);
                var markedContent = marked(fileContent);
                $scope.fileContent = $sce.trustAsHtml(markedContent);
            }
        }
    ]);

## Add View

The important thing to note is ng-bind-html="fileContent" from the controller

    <!-- Post Content -->
    <article>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div ng-bind-html="fileContent"></div>
                </div>
            </div>
        </div>
    </article>

    

## Follow Up

With Webpack you can add the raw-loader, and require the loader in directly

var fileContent = require("raw!./md/" + $scope.blog.file);

We also added marked [https://www.npmjs.com/package/marked](https://www.npmjs.com/package/marked) and required it in with var marked = require('marked');

